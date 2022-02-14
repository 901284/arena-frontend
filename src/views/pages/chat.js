import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import CommentAPI from './../../CommentAPI'
import CommentElement from '../../components/CommentElement'

class ChatView {
    init(){
        console.log('ChatView.init')
        document.title = 'Chat with other users'
        this.comments=[];  // a place to store all the comments
        this.render()
        Utils.pageIntroAnim()
        this.render();
        this.getAllComments();
        this.renderComments();
        this.isAutoRefresh = true;
        this.refresher()
    }

    // refresh the comment history at 30 second intervals
    async sleep(milliseconds){
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    async refresher(){
        const refreshInterval = 30000 //milliseconds

        while (this.isAutoRefresh){
            await this.sleep(refreshInterval)
            this.getAllComments();
            this.renderComments();
        }
    }



    // get the commments from the datasbase.
    getAllComments(){
        let result = CommentAPI.getComments();
        console.log('comment data: ' ,result)
        this.comments = result;

    }

    chatHandler(e){

        // stop the usual submit process for validation and hadle the submit with js.
        e.preventDefault()

        // get the current user id  and listing id  and append to the form data before submission.   
        const formData = e.detail.formData
        formData.append("email", Auth.currentUser.email);
        const sendButton = document.querySelector('#send-button')
        const commentInput = document.querySelector("#chat-input-comment")
        sendButton.setAttribute('loading', '')
        const commentText =  formData.get('comment').toString()
            
        // validate the text
        if (commentText == null || commentText.length <1) {
            Toast.show("You must have text input to post a comment","info")
            return
        }

        // send the text
        CommentAPI.newComment(formData)
        .then(result => {
            if (result.ok){
                // if response ok, clear the comment field ready for next input
                commentInput.value = ''
                renderComments();
            } else {
                Toast.show("Unable to submit the new commnet")
            }
        })
        .catch( err => {
            // handle the error and alert the user with basic information.
            Toast.show("Unable to sumbit the new comment ","error")
            console.log("Error submitting the new comment. ",err)
        })
        sendButton.setAttribute('loading', 'false')
    }

    renderComments(){
        let chatHistory = document.querySelector('.chat-history')
        // clear previous chat elements and populate with the generic message
        chatHistory.innerHTML = `<div><p>Be the first to comment!</p></div>`


        // dont render any comment elements if there is nothing to render
        if ( comments == null || Object.keys(comments).length <1) return

        chatHistory.innerHTML = ''

        
        // editing lsitings into comments. reuse of the listing  function. :)
        this.comments.forEach(com => {

            // verify if the user is an author or non-author of the comment
            const isAuthor = (com.user._id == Auth.currentUser._id) ? true : false
            let commentElementFactory = new CommentElement;
            let commentElement = commentElementFactory.build(com, isAuthor)
            // make it clickable to view more detail
            commentElement.addEventListener('click', e => {
                // handleCommentClick(e.currentTarget.id)
                console.log('comment id clicked: ', e.currentTarget.id)
                chatHistory.append(commentBubble)   
            })

        }); 
    }

    render(){    
        const template = html`      
        <div class="chat-body">
            
            <div class='chat-history'> 
                <p>Be the first to comment!</p>

            </div>

            <!-- Form to get the user input to post to the chat        -->
            <sl-form class="dark-theme" @sl-submit=${this.chatHandler}>    
            <div class='chat-form'>
                <div class='chat-input'>
                    <sl-input id='chat-input-comment' name="comment" type="text" placeholder="Hey, I have an idea!!!" required></sl-input>                     
                </div>
                <div class='send-button-div'>
                    <sl-button id='send-button' type="primary" submit>Send</sl-button>
                </div>
            </div>
            </sl-form>
        </div>

        `
        render(template, App.chatEl)    
    }
}

export default new ChatView()