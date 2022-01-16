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

  currentStep = 0;
  earth;
  space;
  bubble1 ;
  bubble2 ;
  atmosphere ;
  astronaut;


  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
    this.startSection1Anim()
    
  } 


  setListeners(){
    console.log('setlisteners called')

    this.earth = document.querySelector(".earth");
    this.space = document.querySelector(".space");
    this.bubble1 = document.querySelector("#bubble1");
    this.bubble2 = document.querySelector("#bubble2");
    this.atmosphere = document.querySelector(".atmosphere");
    this.astronaut = document.querySelector('.astronaut');

    this.astronaut.addEventListener('click', ()=>{
      this.handleAstranautClick()
    })
    
  }



    /*'animating in the elements for section 1 when section on page load'*/
  startSection1Anim(){
      console.log('startsection1Anim called')
      const earth = document.querySelector(".earth");
      const space = document.querySelector(".space");
      const astronaut = document.querySelector(".astronaut");
      const bubble1 = document.querySelector("#bubble1");
      // const downArrow = document.querySelector(".downArrow");
  
      // create gsap timeline for animating in the atmosphere.
      const tl = gsap.timeline();
      tl  .from(space, {opacity: 0, scale: 0.1, duration: 0.5, delay: 0.3})
          .from(earth, {opacity: 0, scale: 0.5, duration: 0.8,ease: "elastic.out"})
          .from(astronaut, {opacity:0 , y: -100, duration: 0.7, ease: "power4.out"})
          .from(bubble1, { opacity:0 , y: -50, duration: 0.8, ease: "power4.out"},+2.0);
  }


  handleAstranautClick(){

    // this.earth = document.querySelector(".earth");
    // this.space = document.querySelector(".space");
    let bubble1 = document.querySelector("#bubble1");
    let bubble2 = document.querySelector("#bubble2");
    let atmosphere = document.querySelector(".atmosphere");
    // this.astronaut = document.querySelector('.astronaut');

    switch(this.currentStep) {
      case 0:
        // show the atmosphere, hide the first bubble and show the second.
        const tl = gsap.timeline();
        atmosphere.classList.remove("hide");
        bubble2.classList.remove("hide");
        
        // animate the element transitions.
        tl  .to(bubble1, {opacity:0 ,  duration: 0.3, ease: "power4.out"})            
            .from(atmosphere, { opacity:0 , scale: 0.8, duration: 0.8, ease: "elastic.out"})            
            .from(bubble2, { opacity:0 , duration: 0.8, ease: "power4.out"});
        atmosphere.classList.remove("hide");

        // make the hide of bubble1 permanent
        bubble1.classList.add("hide");
        this.currentStep++;
        break;
      
      case 1:
        // code block to execure the transition to 
        break;

      case 2:
        // code block
      break;

      default:
        // code block
    } 

    if (this.currentStep = 0) {

    }

  }

  /* ==============  animations for section 1  ================== */

  // animate in the atmosphere
  animateAtmosphere(){
    console.log('animating the atmosphere')
    const atmosphere = document.querySelector("#atmos-section1");
    // create gsap timeline for animating in the atmosphere.
    const tl = gsap.timeline({})   
    tl.from(atmosphere, {opacity: 0, scale: 0.5, duration: 2, delay: 0.3});
   }

  animateSection1Speech(){
    console.log('animating the speech for section 1')
    const atmosphere = document.querySelector("#atmos-section1");
    // create gsap timeline for animating in the atmosphere.
    const tl = gsap.timeline({})   
    tl.from(atmosphere, {opacity: 0, scale: 0.5, duration: 2, delay: 0.3});

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

            <div class='atmosphere hide' id='atmos-section1' >
                         
            </div>

            <div class='astronaut'>
              
            </div>

            <img class='speech-bubble' id='bubble1' src='/images/section1-bubble1.png' alt='Speech bubble says "Click me, please.  I need atmosphere to breethe!"'>
                      
            <img class='speech-bubble hide' id='bubble2'  src='/images/section1-bubble2.png' 
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