import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class GameView {
  
  init(){    
    console.log('gameView.init')
    
    document.title = "The Power Suppply Game"  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
    this.startSection1Anim()
    this.downClickCount = 0;
    
  } 


  setListeners(){
    console.log('setlisteners called')

 
    // enable these once i have put them  in the dom.
    this.downArrow = document.querySelector('#down');
    // this.upArrow = document.querySelector('#up');
    this.leftArrow = document.querySelector('#left');
        
  }

    /*'animating in the elements for section 1 when section on page load'*/
  startSection1Anim(){
      console.log('startsection1Anim called')


      // create gsap timeline for animating in the atmosphere.
      const tl = gsap.timeline();
  //     tl  .from(space, {opacity: 0, scale: 0.1, duration: 0.5, delay: 0.3})
  //         .from(earth, {opacity: 0, scale: 0.5, duration: 0.8,ease: "elastic.out"})
  //         .from(astronaut, {opacity:0 , y: -100, duration: 0.7, ease: "power4.out"})
  //         .from(bubble1, { opacity:0 , y: -50, duration: 0.8, ease: "power4.out"},+2.0);
  }


  /* =============== animate section in or out ==================  */


  handleUpClick(){
  // move up the page

    let pageHeight = window.innerHeight;
    window.scrollBy(0, 0 - pageHeight);
    

  }


  handleDownClick(){
    // move down the page

    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);


  }


  render(){
    const template = html`
      <va-app-header title="The Power Supply Game" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='game-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-game'>

          <!-- heading and image 100% of viewport height  -->
          <div class='game-background'>

            <h1 class='anim-in'>THE POWER SUPPLY GAME</h1>
            <img  id='game-header-image' src='/images/game-header.png' alt='header image on the game page showing a city at night time with all the lights on.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='game-body'>

            <h4>heading</h4>
            <br>
            <p>This is some body text as a placeholder for the game</p>
          
   
          </div>


        </div>  


      </div>
     
    `
    render(template, App.rootEl)
  }



}

export default new GameView()