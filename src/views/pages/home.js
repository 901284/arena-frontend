import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import AppFooter from './../../components/app-footer';
gsap.registerPlugin(MotionPathPlugin);

class HomeView {

  
  earth;
  space;
  bubble1 ;
  bubble2 ;
  atmosphere ;
  astronaut;


  init(){    

    // this.currentStep = 0;
    document.title = 'Home'  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
    this.startSection1Anim()
    if (!localStorage.getItem('currentStage')) {
      this.setStage(0)
    }
    this.handleStageClick()
  } 


    // clicking the down arrow increments the story stage to the next level
  handleDownClick(){
    let lastStage = 9;
    if (this.getStage() < lastStage){
      this.stageIncrement()
      this.handleStageClick()
    }    
  }

  // clicking the up arrow decrements the story stage to the previous level
  handleUpClick(){
    if (this.getStage() > 0 ) {
    this.stageDecrement()
    this.handleStageClick()
    }
  }

  setListeners(){

    this.earth = document.querySelector(".earth");
    this.space = document.querySelector(".space");
    this.bubble1 = document.querySelector("#bubble1");
    this.bubble2 = document.querySelector("#bubble2");
    this.atmosphere = document.querySelector(".atmosphere");
    this.astronaut = document.querySelector('.astronaut');
    this.astronaut2 = document.querySelector('.astronaut2');

    this.astronaut.addEventListener('click', ()=>{
      this.stageIncrement()
      this.handleStageClick()
    })
    this.bubble1.addEventListener('click', ()=>{
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


  // quicky hide all sections. This is usually used before showing a section to ensure the lage is clear before unhiding a particular sectin and animating the elements into view.
  hideAllSections(){
    document.querySelector('#section1').classList.add('hide'); // learn more about atmosphere
    document.querySelector('#section2').classList.add('hide'); // earths atmosphere
    document.querySelector('#section3').classList.add('hide'); // wind power - before interaction
    document.querySelector('#section4').classList.add('hide'); // solar power - before interaction
    document.querySelector('#section5').classList.add('hide'); // fossil fuel - before interaction
    document.querySelector('#section6').classList.add('hide'); // hydrogen - before interaction
    document.querySelector('#section7').classList.add('hide'); // nuclear - before interaction
    document.querySelector('#section8-game').classList.add('hide'); // game section  - before interaction
    document.querySelector('#section9-ask').classList.add('hide'); // ask anything section  - before interaction 
  }
  

  handleStageClick(){

    /* nav butttons */
    let up = document.querySelector('.up');
    let down = document.querySelector('.down'); 

    /* sections  */ 
    let section1 = document.querySelector('#section1'); // learn more about atmosphere
    let section2 = document.querySelector('#section2'); // earths atmosphere
    let section3 = document.querySelector('#section3'); // wind power - before interaction
    let section4 = document.querySelector('#section4'); // solar power - before interaction
    let section5 = document.querySelector('#section5'); // fossil fuel - before interaction
    let section6 = document.querySelector('#section6'); // hydrogen - before interaction
    let section7 = document.querySelector('#section7'); // nuclear - before interaction
    let section8 = document.querySelector('#section8-game') // game section  - before interaction   
    let section9 = document.querySelector('#section9-ask') // ask anything section  - before interaction 
    

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
        up.classList.add('hide');
        down.classList.remove('hide');  
                       
        //  show or hide relevant sections 
        this.hideAllSections();
        section1.classList.remove('hide');                
        this.handleStage0Click(atmosphere,bubble1, bubble2, spaceBackground)
        break;

      case 1:  // atmosphere popup oj minji interaction
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');
        
        //  show or hide relevant sections 
        this.hideAllSections();
        section1.classList.remove('hide');  

        // show the atmosphere, hide the first bubble and show the second.
        this.handleStage1Click(atmosphere,bubble1, bubble2, spaceBackground)
        break;
           

      case 2: // atmosphere page with minji hanging from a cloud
        // code block to execure the transition from section 1 to section 2
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');
      
        // show and hide the relevant sections
        this.hideAllSections();
        section2.classList.remove("hide")
        this.handleStage2Click(section1, section2, cloud, astronaut2, bubble3)        
        break;
      
      case 3:  // wind power page
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');   
        
        // show and hide the relevant sections
        this.hideAllSections();
        section3.classList.remove("hide")  
        this.handleStage3Click(section3)
        break;
    
      case 4:  // solar power
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');   

        // show or hide the relevent sections 
        this.hideAllSections();
        section4.classList.remove("hide")
        this.handleStage4Click(section4)
        break;

      case 5:  // fossil fuels
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');
        
        // show or hide the relevent sections 
        this.hideAllSections();
        section5.classList.remove("hide")
        this.handleStage5Click(section5)
        break;

      case 6:  // fossil fuels
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');
        
        // show or hide the relevent sections 
        this.hideAllSections();
        section6.classList.remove("hide")
        this.handleStage6Click(section6)
        break;

      case 7: // nuclear
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');
        
        // show or hide the relevent sections 
        this.hideAllSections();
        section7.classList.remove("hide")
        this.handleStage7Click(section7)
        break;

        
      case 8: // game 
        // set the display class on the nav buttons.
        up.classList.remove('hide');
        down.classList.remove('hide');
        
        // show or hide the relevent sections 
        this.hideAllSections();
        section8.classList.remove("hide")
        this.handleStage8Click(section8)
        break;


      case 9: // ask anything 
      // set the display class on the nav buttons.
      up.classList.remove('hide');
      down.classList.remove('hide');
      
      // show or hide the relevent sections 
      this.hideAllSections();
      section9.classList.remove("hide")
      this.handleStage9Click(section9)
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
      const atmosphere = document.querySelector("#atmos-section1");
      // create gsap timeline for animating in the atmosphere.
      const tl = gsap.timeline({})   
      tl.from(atmosphere, {opacity: 0, scale: 0.5, duration: 2, delay: 0.3});
     }
  
    animateSection1Speech(){
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
    let astronaut = document.querySelector('.astronaut4')
    let bubble = document.querySelector('.speech-bubble5')
    let solarpower = document.querySelector('.solarpower')
    let sun = document.querySelector('#sun')

    const timeLineSolar = gsap.timeline();
    timeLineSolar .fromTo(solarpower, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                  .fromTo(sun, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                  .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out"  })
                  .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" });
  }



  /* ============ animateions for section 5 (.... power) ================= */
  handleStage5Click(section5){
    let astronaut = document.querySelector('.astronaut5')
    let bubble = document.querySelector('#bubble6')
    let fossilFuels = document.querySelector('.fossilfuels')
    let smog = document.querySelector('#smog')

    const timeLineFossilfuels = gsap.timeline();
    timeLineFossilfuels .fromTo(fossilFuels, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                        .fromTo(smog, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                        .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out"  })
                        .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" });
  }


  /* ============ animateions for section 6 ( hydrogen ) ================= */
  handleStage6Click(section6){
    let astronaut = document.querySelector('.astronaut6')
    let bubble = document.querySelector('#bubble7')
    let hydrogen = document.querySelector('.hydrogen')
    let h2o = document.querySelector('#h2o')

    const timeLineFossilfuels = gsap.timeline();
    timeLineFossilfuels .fromTo(hydrogen, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                        .fromTo(h2o, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                        .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out"  })
                        .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" });

  }



  /* ============ animateions for section 7 ( nuclear ) ================= */
  handleStage7Click(section7){
    let astronaut = document.querySelector('.astronaut7')
    let bubble = document.querySelector('#bubble8')
    let nuclear = document.querySelector('.nuclear')
    let nuclearCloud = document.querySelector('#nuclear-cloud')

    const timelineNuclear = gsap.timeline();
    timelineNuclear .fromTo(nuclear, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                        .fromTo(nuclearCloud, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                        .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out"  })
                        .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" });

  }



  /* ============ animateions for section 8 ( game ) ================= */
  handleStage8Click(section8){
    let astronaut = document.querySelector('.astronaut-play')
    let bubble = document.querySelector('#bubble-play')
    let game = document.querySelector('.game')
    let gameController = document.querySelector('#game-controller')

    const timelinePlayGame = gsap.timeline();
    timelinePlayGame  .fromTo(game, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                      .fromTo(gameController, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                      .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out"  })
                      .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" });

  }

  /* ============ animateions for section 9 ( ask anything ) ================= */
  handleStage9Click(section9){
    let astronaut = document.querySelector('.astronaut-ask')
    let bubble = document.querySelector('#bubble-question')
    let ask = document.querySelector('.ask')
    let questionmark = document.querySelector('#questionmark')

    const timelineAskMe = gsap.timeline();
    timelineAskMe .fromTo(ask, {opacity: 0, scale: 0.5 }, {opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" })
                  .fromTo(questionmark, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out" })
                  .fromTo(astronaut, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out"  })
                  .fromTo(bubble,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power4.out" });

  }



  // render out the page contenet.
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
           
            <div class='earth'></div>

            <div class='atmosphere hide' id='atmos-section1' alt='image of the atmosphere surrounding the planet' ></div>

            <div class='astronaut' alt='animated image of Minji the astonaut'></div>

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
            
            <div class='astronaut2' alt='animated image of Minji the astonaut' @click=${()=> gotoRoute('/atmosphere')} ></div>

            <img class='speech-bubble3' id='bubble3' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/atmosphere')} alt='Speech bubble says "Click Minji to lean more."'>
                         
          </div>

        </div>

        <!-- page3 - stage 3  - wind power -->
        <div class='home-section hide'  id='section3'>
          <h1 class='anim-in'>WIND POWER</h1>
                 
          <div class='windpower'>                    
            <div class='astronaut3' alt='animated image of Minji the astonaut' @click=${()=> gotoRoute('/windpower')}></div>
            <img class='speech-bubble4' id='bubble4' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/windpower')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>

        <!-- page4  - stage 4 - solar power-->
        <div class='home-section hide'  id='section4'>
          <h1 class='anim-in'>SOLAR POWER</h1>

          <div class='solarpower'>                    
            <div class='astronaut4' @click=${()=> gotoRoute('/solarpower')} alt='animated image of Minji the astonaut'></div>
            <div id='sun' @click=${()=> gotoRoute('/solarpower')} alt='Image of the sun' ></div>
            <img class='speech-bubble5' id='bubble5' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/solarpower')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>


        <!-- page5 - stage 5  - fossil fuels -->
        <div class='home-section hide'  id='section5'>
          <h1 class='anim-in'>FOSSIL FUELS</h1>

          <div class='fossilfuels' alt='Image of a hazy polluted sky'>                    
            <div class='astronaut5' @click=${()=> gotoRoute('/fossilfuels')} alt='animated image of Minji the astonaut'></div>
            <div id='smog' @click=${()=> gotoRoute('/fossilfuels')} alt='Image of smog in the sky' ></div>
            <img class='speech-bubble6' id='bubble6' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/fossilfuels')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>


        <!-- page6  - stage 6 -  hydrogen  --->
        <div class='home-section hide'  id='section6'>
          <h1 class='anim-in'>HYDROGEN</h1>

          <div class='hydrogen' alt='Image of a clear blue sky'>                    
            <div class='astronaut6' @click=${()=> gotoRoute('/hydrogen')} alt='Animated image of Minji the astonaut hanging from a pristine cloud'></div>
            <div id='h2o' @click=${()=> gotoRoute('/hydrogen')} alt='Image of smog in the sky' ></div>
            <img class='speech-bubble7' id='bubble7' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/hydrogen')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>


        <!-- page7  - nuclear power -->
        <div class='home-section hide'  id='section7'>
          <h1 class='anim-in'>NUCLEAR POWER</h1>

          <div class='nuclear' alt='Image of yelow nuclear cloud in a blue sky'>                    
            <div class='astronaut7' @click=${()=> gotoRoute('/nuclear')} alt='Animated image of Minji the astonaut swinging from the nuclear cloud'></div>
            <div id='nuclear-cloud' @click=${()=> gotoRoute('/nuclear')} alt='The yellow and white nuclear cloud' ></div>
            <img class='speech-bubble8' id='bubble8' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/nuclear')} alt='Speech bubble says "Click Minji to lean more."'>
          </div>

        </div>


        <!-- page8  - the power supply game -->
        <div class='home-section hide'  id='section8-game'>
          <h1 class='anim-in'>POWER SUPPLY GAME</h1>


          <div class='game' alt='Logo image of the game controller in the center of the screen'>                    
            <div class='astronaut-play' @click=${()=> gotoRoute('/game')} alt='Animated image of Minji the astonaut swinging from a game controller'></div>
            <div id='game-controller' @click=${()=> gotoRoute('/game')} alt='Game controller logo image' ></div>
            <img class='speech-bubble-play' id='bubble-play' src='/images/bubble-play.png' @click=${()=> gotoRoute('/game')} alt='Speech bubble says "Click Minji to play the game"'>
          </div>

        </div>

        <!-- page9-  ask me anything -->
        <div class='home-section hide'  id='section9-ask'>
          <h1 class='anim-in'>ASK ME ANYTHING</h1>


          <div class='ask' alt='Question mark logo centered in a sircular blue sky'>                    
            <div class='astronaut-ask' @click=${()=> gotoRoute('/ask')} alt='Animated image of Minji the astonaut swinging from a game controller.'></div>
            <div id='questionmark' @click=${()=> gotoRoute('/ask')} alt='Game controller logo image.' ></div>
            <img class='speech-bubble-question' id='bubble-question' src='/images/section2-bubble1-learn.png' @click=${()=> gotoRoute('/ask')} alt='Speech bubble says "Click Minji to learn more."'>
          </div>

        </div>       

      </div>
      <app-footer></app-footer>
     
    `
    render(template, App.rootEl)
  }



}

export default new HomeView()