import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
// import { scrolltrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(MotionPathPlugin);


/* TREV IS DOING THIS BIT. WORK IN POROGRESS   */


class HomeView {

  
  earth;
  space;
  bubble1 ;
  bubble2 ;
  atmosphere ;
  astronaut;


  init(){    
    console.log('HomeView.init')

    // this.currentStep = 0;
    document.title = 'Home'  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
    this.startSection1Anim()
    if (!localStorage.getItem('currentStage')) {
      console.log('no current stage set. setting it to 0')
      this.setStage(0)
    }
    this.handleStageClick()
  } 


    // clicking the down arrow increments the story stage to the next level
  handleDownClick(){
    this.stageIncrement()
    this.handleStageClick()
     
  }

  // clicking the up arrow decrements the story stage to the previous level
  handleUpClick(){
    this.stageDecrement()
    this.handleStageClick()

  }


  setListeners(){
    console.log('setlisteners called')

    this.earth = document.querySelector(".earth");
    this.space = document.querySelector(".space");
    this.bubble1 = document.querySelector("#bubble1");
    this.bubble2 = document.querySelector("#bubble2");
    this.atmosphere = document.querySelector(".atmosphere");
    this.astronaut = document.querySelector('.astronaut');
    this.astronaut2 = document.querySelector('.astronaut2');
    this.up = document.querySelector('.up');
    this.down = document.querySelector('.down');
    
  
    console.log('setting click listener on the Minjis');
    this.astronaut.addEventListener('click', ()=>{
      console.log('clicked minji')
      this.stageIncrement()
      this.handleStageClick()
      console.log('endclick minji')
    })
    this.bubble1.addEventListener('click', ()=>{
      console.log('clicked bubble1')
      this.stageIncrement()
      this.handleStageClick()
      
    })

    this.bubble2.addEventListener('click', ()=> {

      if( this.getStage() == 1)  {
        gotoRoute('/atmosphere')
      } else {
        this.stageIncrement()
        this.handleStageClick()
      }

    })

    // more information baout atmosphere
    this.astronaut2.addEventListener('click', () => {


    })
    


  }


  // helper functions to set the stage in local storage/
  stageIncrement(){
    let currentStage = Number(localStorage.getItem("currentStage"));
    ++currentStage
    localStorage.setItem('currentStage',currentStage.toString())
  }
  stageDecrement(){
    let currentStage = Number(localStorage.getItem("currentStage"));
    (currentStage > 0) ? --currentStage : currentStage = 0;
    localStorage.setItem('currentStage',currentStage.toString())
  }
  getStage(){
    return Number(localStorage.getItem("currentStage"));   
  }
  setStage(stageInt) {
    if (stageInt >= 0) localStorage.setItem('currentStage',stageInt.toString())
  }

    /*'animating in the elements for section 1 when section on page load'*/
  startSection1Anim(){
      console.log('startsection1Anim called')
      const earth = document.querySelector(".earth");
      const space = document.querySelector(".space");
      const astronaut = document.querySelector(".astronaut");
      const bubble1 = document.querySelector("#bubble1");
      let spaceBackground = document.querySelector(".space-background");
      let bubble2 = document.querySelector("#bubble2");
      let atmosphere = document.querySelector(".atmosphere");

      //reset elements properties      
      space.style.borderRadius = "50%"; 
      space.style.opacity = "1";
      // space.style.scale.transform = "scale(1)";

  
      // create gsap timeline for animating in the atmosphere.
      const tl = gsap.timeline();
      tl  .to(atmosphere,{opacity: 0, duration: 0 })
          .fromTo(space, {opacity: 0, scale: 0.1},{opacity: 1, scale:1, duration: 0.5})
          .fromTo(earth, {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out"})
          .fromTo(astronaut, {opacity:0 , y: -100},{opacity:1 , duration: 0.7, ease: "power4.out"} )
          .fromTo(bubble1, { opacity:0 , y: -50}, { opacity:1 , duration: 0.8, ease: "power4.out"},+2.0);
          
        //   tl  .to(bubble1, {opacity:0 ,  duration: 0.4, ease: "power4.out"})
        // .to(spaceBackground,{duration: 1.2, borderRadius: "0%",  ease: "power4.out", x: newXcoord, y: newYcoord, width: "100%", height: "100%"})     
  }



  handleStageClick(){

    console.log('stageclick')

    /* sections 3 */ 
    let section1 = document.querySelector('#section1'); 
    let section2 = document.querySelector('#section2');
    let section3 = document.querySelector('#section3');
    let section4 = document.querySelector('#section4');
    let section5 = document.querySelector('#section5');

    /* elements of section 1 */ 
    let spaceBackground = document.querySelector(".space-background");
    let bubble1 = document.querySelector("#bubble1");
    let bubble2 = document.querySelector("#bubble2");
    let atmosphere = document.querySelector(".atmosphere");
    let astronaut = document.querySelector('.astronaut');
    
    /* elements of section 2 */
    let cloud = document.querySelector('.cloud');
    let astronaut2 = document.querySelector('.astronaut2');
    let bubble3 = document.querySelector('#bubble3');

    switch(this.getStage()) {

      case 0:  // page load and intro / hero screen
      
        // set the nav buttons
        this.up.classList.add('hide');
        this.down.classList.remove('hide');  
                       
        //  show or hide relevant sections 
        section1.classList.remove('hide');         
        section2.classList.add('hide');    
        section3.classList.add('hide');      
        section4.classList.add("hide")
        section5.classList.add("hide")
          
        this.handleStage0Click(atmosphere,bubble1, bubble2, spaceBackground)
        break;

      case 1:  // atmosphere popup oj minji interaction
        // set the display class on the nav buttons.
        this.up.classList.remove('hide');
        this.down.classList.remove('hide');
        
        //  show or hide relevant sections 
        section1.classList.remove('hide');  
        section2.classList.add('hide');    
        section3.classList.add('hide');       
        section4.classList.add("hide")
        section5.classList.add("hide")
         
        // show the atmosphere, hide the first bubble and show the second.
        this.handleStage1Click(atmosphere,bubble1, bubble2, spaceBackground)
        break;
           

      case 2: // atmosphere page with minji hanging from a cloud
        // code block to execure the transition from section 1 to section 2
        // set the display class on the nav buttons.
        this.up.classList.remove('hide');
        this.down.classList.remove('hide');

        // show and hide the relevant sections
        section1.classList.add("hide")
        section2.classList.remove("hide")
        section3.classList.add("hide")
        section4.classList.add("hide")
        section5.classList.add("hide")

        this.handleStage2Click(section1, section2, cloud, astronaut2, bubble3)        

        break;
      
      case 3:  // wind power page
        // set the display class on the nav buttons.
        this.up.classList.remove('hide');
        this.down.classList.remove('hide');
        
        // show and hide the relevant sections
        section1.classList.add("hide")
        section2.classList.add("hide")
        section3.classList.remove("hide")
        section4.classList.add("hide")
        section5.classList.add("hide")

        this.handleStage3Click(section3)
        break;
    
      case 4:  // solar power
        // set the display class on the nav buttons.
        this.up.classList.remove('hide');
        this.down.classList.add('hide');

        // show or hide the relevent sections 
        section1.classList.add("hide")
        section2.classList.add("hide")
        section3.classList.add("hide")
        section4.classList.remove("hide")
        section5.classList.add("hide")

        this.handleStage4Click(section4)
        break;

      case 5:  // fossil fuels
      // set the display class on the nav buttons.
      this.up.classList.remove('hide');
      this.down.classList.add('hide');

      // show or hide the relevent sections 
      section1.classList.add("hide")
      section2.classList.add("hide")
      section3.classList.add("hide")
      section4.classList.add("hide")
      section5.classList.remove("hide")
      this.handleStage5Click(section5)
      break;


      default:
        // stageis out of range or not set, so set to o
        this.setStage(0)
        // code block

    } 


  }



  /* ==============  animations for section 1  ================== */
  handleStage0Click(atmosphere, bubble1, bubble2, spaceBackground) {
   
    const tlStage0 = gsap.timeline();
    
    bubble2.classList.add("hide");
    bubble1.classList.remove("hide");
    atmosphere.classList.add("hide");
    spaceBackground.classList.add('space-background-small')
    spaceBackground.classList.remove('space-background-enlarged')

    this.startSection1Anim()

  }


  handleStage1Click(atmosphere, bubble1, bubble2, spaceBackground) {

    const tl = gsap.timeline();
    // atmosphere.classList.remove("hide");
    bubble2.classList.remove("hide");
    let newXcoord = 0 - spaceBackground.offsetLeft;
    let newYcoord = 0 - spaceBackground.offsetTop;
    spaceBackground.classList.remove('space-background-small')
    spaceBackground.classList.add('space-background-enlarged')
    
    // animate the element transitions.
    tl  .to(bubble1, {opacity:0 ,  duration: 0.4, ease: "power4.out"})
        // .fromTo(spaceBackground,{ css:{className:"+= space-background space-background-small"}},{duration: 1.2,  ease: "power4.out", css:{className:"+= space-background space-background-enlarged"}})            
        .fromTo(atmosphere, { opacity: 0, scale: 0.5 }, { opacity:1 , scale: 1, duration: 2.0, ease: "elastic.out"},+1.0)            
        .fromTo(bubble2, { opacity: 0 }, { opacity:1 , duration: 0.8, ease: "power4.out"});
    atmosphere.classList.remove("hide");

    // make the hide of bubble1 permanent
    bubble1.classList.add("hide");

  }

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
    


  /* ========== animations for section 2 ( atmosphere  - minji hangs from cloud ) =================== */

  // animate to the clouds thingy in section 2 
  
  handleStage2Click(section1, section2, cloud, astronaut2, bubble3) {
    const timelineCloud = gsap.timeline();
    timelineCloud 
        .fromTo(section2, { opacity: 0, scale: 0.1 }, {opacity: 1, scale: 1, duration: 0.3, ease: "power4.out" })
        .fromTo(cloud, { scale: 0.1}, { duration: 1.2, scale: 1, ease: "power4.out"  })
        .fromTo(astronaut2,{ scale: 0.0}, { duration: 1, ease: "elastic.out", scale: 1}) 
        .fromTo(bubble3,{ opacity: 0 }, { opacity: 1, duration: 0.7, ease: "power4.out"});
    section2.classList.remove("hide");
  }
  
  /* ============ animateions for section 3 (wind power)================= */
  handleStage3Click(section3){
    const astronaut3 = document.querySelector('.astronaut3')
    const speechBubble = document.querySelector('.speech-bubble4')
    const windpower = document.querySelector('.windpower')
 
    const timelineWind = gsap.timeline();
    timelineWind.fromTo(section3,{opacity : 0, scale: 0.5}, {opacity : 1, scale: 1, duration: 0.5, ease: "power4.out"})
                .fromTo(windpower,{ scale: 0.1, ease: "power4.out"  }, { duration: 1.2, scale: 1, ease: "power4.out"  })
                .fromTo(astronaut3, { scale: 0.0},{ duration: 1, ease: "elastic.out", scale: 1})
                .fromTo(speechBubble,{ opacity: 0.0, scale: 0.5}, { opacity: 1.0, duration: 0.7, scale: 1.0, ease: "power4.out"});
  }



  /* ============ animateions for section 4 (solar power) ================= */
  handleStage4Click(section4){
    console.log('stage 4 click handler')
    let astronaut = document.querySelector('.astronaut4')
    let bubble = document.querySelector('.speech-bubble5')
    let solarpower = document.querySelector('.solarpower')
    let sun = document.querySelector('#sun')

    const timeLineSolar = gsap.timeline();
    timeLineSolar .fromTo(solarpower, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                  .fromTo(sun, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                  .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power4.out"  })
                  .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power4.out" });
  }



  /* ============ animateions for section 5 (.... power) ================= */
  handleStage5Click(section5){
    console.log('stage 5 click handler')



  }



  /* ============ animateions for section 6 (... power) ================= */
  handleStage6Click(section6){
    console.log('stage 6 click handler')

  }




  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">

        <div class='nav-container'>
          <div class='up' @click=${()=> this.handleUpClick()} ></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>

        <!-- page1  -  stages 0 and 1 -->
        <div class='home-section' id='section1'>
          <h1 class='anim-in'>Hi, Welcome to ARENA! My name in Minji</h1>
          <div class='space-background space-background-small'></div>
          <div class='space'>           
           
            <div class='earth'> 
             
            </div>

            <div class='atmosphere hide' id='atmos-section1' alt='image of the atmosphere surrounding the planet' >
                         
            </div>

            <div class='astronaut' alt='animated image of Minji the astonaut'>
              
            </div>

            <img class='speech-bubble' id='bubble1' src='/images/section1-bubble1.png' alt='Speech bubble says "Click me, please.  I need atmosphere to breethe!"'>
                      
            <img class='speech-bubble hide' id='bubble2'  src='/images/section1-bubble2.png' 
              alt='Speech bubble says "Oh, Thank you!  My name is Minji from teh clean plannet. 
              I am here to help you learn to keep your beautiful Bleu Marble plannet habitable for many years to come! 
              Buckle up and enjoy the ride!"'>
                        
   
          </div>

        </div>  

        <!-- page2 -  stage 2 -->
        <div class='home-section hide'  id='section2'>
          <h1 class='anim-in'>Earth's Atmosphere</h1>
          
          <div class='cloud' alt='Large circular image of the clouds in the sky containing Minji and a speech bubble'>           
           
           
            <div class='astronaut2' alt='animated image of Minji the astonaut' @click=${()=> gotoRoute('/atmosphere')} >
              
            </div>

            <img class='speech-bubble3' id='bubble3' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/atmosphere')} alt='Speech bubble says "Click Minji to lean more."'>
                      
                                   
   
          </div>

        </div>

        <!-- page3 - stage 3  - wind power -->
        <div class='home-section hide'  id='section3'>
          <h1 class='anim-in'>Wind Power</h1>
                 
          <div class='windpower'>                    
            <div class='astronaut3' alt='animated image of Minji the astonaut' @click=${()=> gotoRoute('/windpower')}></div>
            <img class='speech-bubble4' id='bubble4' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/windpower')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>

        <!-- page4  - stage 4 - solar power-->
        <div class='home-section hide'  id='section4'>
          <h1 class='anim-in'>Solar Power</h1>

          <div class='solarpower'>                    
            <div class='astronaut4' @click=${()=> gotoRoute('/solarpower')} alt='animated image of Minji the astonaut'></div>
            <div id='sun' @click=${()=> gotoRoute('/solarpower')} alt='Image of the sun' ></div>
            <img class='speech-bubble5' id='bubble5' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/solarpower')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>


        <!-- page5 - stage 5  - fossil fuels -->
        <div class='home-section hide'  id='section5'>
          <h1 class='anim-in'>Fossil Fuels</h1>

          <div class='fossilfuels' alt='Image of a hazy polluted sky'>                    
            <div class='astronaut5' @click=${()=> gotoRoute('/fossilfuels')} alt='animated image of Minji the astonaut'></div>
            <div id='smog' @click=${()=> gotoRoute('/fossilfuels')} alt='Image of smog in the sky' ></div>
            <img class='speech-bubble6' id='bubble6' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/fossilfuels')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>


        <!-- page6  - stage 6-->
        <div class='home-section hide'  id='section6'>
          <h1 class='anim-in'>Section 6</h1>


        </div>


        <!-- page7  -->
        <div class='home-section hide'  id='section7'>
          <h1 class='anim-in'>Section 7</h1>


        </div>


        <!-- page8 -->
        <div class='home-section hide'  id='sectio8'>
          <h1 class='anim-in'>Section 8</h1>


        </div>

        <!-- page9-->
        <div class='home-section hide'  id='section9'>
          <h1 class='anim-in'>Section 9</h1>


        </div>       
        
        <!-- page10-->
        <div class='home-section hide'  id='section10' >
          <h1 class='anim-in'>Section 10</h1>


        </div>       
        
        <!-- page11- -->
        <div class='home-section hide'  id='section11'>
          <h1 class='anim-in'>Section 11</h1>


        </div>



      </div>
     
    `
    render(template, App.rootEl)
  }



}

export default new HomeView()