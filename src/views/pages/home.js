import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { scrolltrigger } from "gsap/ScrollTrigger.js";



/* TREV IS DOING THIS BIT. WORK IN POROGRESS   */

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">


        <!-- page1  -->
        <div class='home-section' id='section1'>
          <h1 class='anim-in'>Section 1</h1>

          <div class='space'> 
            
           
            <div class='earth'> 
            
            </div>

            <div class='atmosphere'>
                         
            </div>

            <div class='astronaut'>
              
            </div>

            <img class='speech-bubble-s1b1' src='/images/section1-bubble1.png' alt='Speech bubble says "Click me, please.  I need atmosphere to breethe!"'>
                      
            <img class='speech-bubble-s1b2 hide' src='/images/section1-bubble2.png' 
              alt='Speech bubble says "Oh, Thank you!  My name is Minji from teh clean plannet. 
              I am here to help you learn to keep your beautiful Bleu Marble plannet habitable for many years to come! 
              Buckle up and enjoy the ride!"'>
                        
   
          </div>

        </div>  

        <!-- page2  -->
        <div class='home-section'  id='section2'>
          <h1 class='anim-in'>Section 2.</h1>


        </div>

        <!-- page3  -->
        <div class='home-section'  id='section3'>
          <h1 class='anim-in'>Section 3</h1>


        </div>




      </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()