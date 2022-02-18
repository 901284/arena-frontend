import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import CommentAPI from './../../CommentAPI'
import CommentElement from '../../components/CommentElement'
import Toast from '../../Toast'
import { gsap } from "gsap";



class ChatView {
    init(){
        console.log('ChatView.init')
        document.title = 'Chat with other users'
        this.setIconClickListener()
        this.comments=[];  // a place to store all the comments
        this.render()
        Utils.pageIntroAnim()
        this.render();
        this.getAllComments();
        this.renderComments();
        this.isAutoRefresh = true;
        this.refresher()
    }



    // TREV TO PICK UP HERE TO ALOS MAKE THE ICON DISAPPEAR WHEN THE WIDGET IS SHOW. ALSO NEED TO SHOW THE INCON WHEN THE WIDGET DISAPPEARS.
    setIconClickListener(){

        document.querySelector('#chat-icon').addEventListener('click', () => {

            if (localStorage.getItem('showChat') == "true") {
                // is already true so hide the widget  and set as false
                let chatWidget = document.querySelector('#chat')
                let chatIcon = document.querySelector('#chat-icon')
                let chatTl = gsap.timeline();
                chatTl  .to(chatWidget, {opacity: 0, duration: 0.5, ease: "power4.out"})
                        .to(chatIcon, {opacity: 1, duration: 0.5, ease: "power4.out"},-0.5);
                localStorage.setItem('showChat',"false")
            } else  {
                //  is already false so show the widget and set as true 
                let chatWidget = document.querySelector('#chat')
                let chatIcon = document.querySelector('#chat-icon')
                let chatTl = gsap.timeline();
                chatTl  .fromTo(chatWidget, {opacity: 0},{opacity: 1, duration: 0.5, ease: "power4.out"})
                        .to(chatIcon, {opacity: 0, duration: 0.5, ease: "power4.out"},-0.5);
                localStorage.setItem('showChat',"true")
            }

        })

    }

    // refresh the comment history at 30 second intervals
    async sleep(milliseconds){
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    async refresher(){
        const refreshInterval = 10000 //milliseconds
        let max = 2
        let count = 0

        while (this.isAutoRefresh && count < max){
            await this.sleep(refreshInterval)
            this.getAllComments();
            console.log("got comments", this.comments)
            this.renderComments();
            console.log("rendered comments")
            count++
        }
    }



    // get the commments from the datasbase.
    async getAllComments(){
        let result = await CommentAPI.getComments();
        console.log('comment data: ' ,result)
        this.comments = result;

    }

    chatHandler(e){

        // stop the usual submit process for validation and hadle the submit with js.
        e.preventDefault()

        // get the current user id  and listing id  and append to the form data before submission.   
        const formData = e.detail.formData
        const sendButton = document.querySelector('#send-button')
        const commentInput = document.querySelector("#chat-input-comment")
        sendButton.setAttribute('loading', '')
        
        // validate the text
        const commentText =  formData.get('content').toString()
        if (commentText == null || commentText.length <1) {
            Toast.show("You must have text input to post a comment","info")
            return
        }
        // append the sender user info
        formData.append("email", Auth.currentUser.email)
        formData.append("name", Auth.currentUser.firstname)

        // send the data
        CommentAPI.newComment(formData)
        .then(result => {
            console.log(result)
            if (result.ok){
                // if response ok, clear the comment field ready for next input
                commentInput.value = ''              
            } else {
                Toast.show("Unable to submit the new commnet")
            }
        })
        .catch( err => {
            // handle the error and alert the user with basic information.
            Toast.show("Unable to sumbit the new comment ","error")
            console.log("Error submitting the new comment. ",err)
        })
        // this.getAllComments();
        // this.renderComments();
        sendButton.setAttribute('loading', 'false')
    }

    renderComments(){
        let chatHistory = document.querySelector('.chat-history')
        // clear previous chat elements and populate with the generic message
        chatHistory.innerHTML = `<div><p>Be the first to comment!</p></div>`


        // dont render any comment elements if there is nothing to render
        if ( this.comments == null || Object.keys(this.comments).length <1) {
            console.log('no comments to render')
            return
        } 

        chatHistory.innerHTML = ''

        // editing lsitings into comments. reuse of the listing  function. :)
        this.comments.forEach(com => {

            // verify if the user is an author or non-author of the comment
            const isAuthor = (com.email == Auth.currentUser.email) ? true : false
            let commentElement = CommentElement.build(com, isAuthor)
            // make it clickable to view more detail
            // commentElement.addEventListener('click', e => {
            //     // handleCommentClick(e.currentTarget.id)
            //     console.log('comment id clicked: ', e.currentTarget.id)
            //     chatHistory.append(commentBubble)   
            // })
            // console.log(commentElement)
            chatHistory.innerHTML+=commentElement;

        }); 
    }

    render(){    
        const template = html`      
        <div class="chat-container">
            <div id='close-button'>
                <span class="material-icons material-icons-outlined">close</span>
            </div>
            
            <div class='chat-history'> 
                <p>Be the first to comment!</p>

            </div>

            <!-- Form to get the user input to post to the chat        -->
            <sl-form class="dark-theme chat-form" >    

            <sl-input id='chat-input-comment' name="content" type="text" placeholder="Hey, I have an idea!!!" size="medium"  required >
              <sl-icon name="chat" slot="suffix" id='send-button' @click=${this.chatHandler}></sl-icon>
            </sl-input>
                
<!--             
                <div class='chat-input'>
                    <sl-input id='chat-input-comment' name="content" type="text" placeholder="Hey, I have an idea!!!" required large></sl-input>                     
                </div>
                <div class='send-button-div'> -->
                    <!-- <sl-button id='send-button' type="primary" submit>-></sl-button> -->
                    <!-- <span id='send-button' class="material-icons material-icons-outlined" @click=${this.chatHandler} >send</span>
                </div> -->
                
            </sl-form>
        </div>

        `

    if (localStorage.getItem('showChat') == "true") {
        document.querySelector('#chat').style.opacity = 1.0;
    } else {
        document.querySelector('#chat').style.opacity = 0.0;
    }

        render(template, App.chatEl)    
        document.querySelector('#close-button').addEventListener('click', () => {
            localStorage.setItem('showChat', "false");
            let chatWidget = document.querySelector('#chat')
            let chatIcon = document.querySelector('#chat-icon')

            const chatTl = gsap.timeline();
            chatTl  .to(chatWidget, {opacity: 0, duration: 0.5, ease: "power4.out"})
                    .to(chatIcon, {opacity: 1, duration: 0.5, ease: "power4.out"},-0.5);
        })
    }
}

export default new ChatView()