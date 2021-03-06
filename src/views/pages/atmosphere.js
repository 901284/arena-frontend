import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { scrolltrigger } from "gsap/ScrollTrigger.js";

class AtmosphereView {

  
  init(){    
    
    document.title = "Earth's Atmosphere"  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
    this.startSection1Anim()
    this.scrollPosition = 0 
  } 

  setListeners(){

    this.earth = document.querySelector(".earth");
    this.space = document.querySelector(".space");
    this.atmosphere = document.querySelector(".atmosphere");
    this.astronaut = document.querySelector('.astronaut');

    // enable these once i have put them  in the dom.
    this.downArrow = document.querySelector('#down');
    this.leftArrow = document.querySelector('#left');
       
  }

    /*'animating in the elements for section 1 when section on page load'*/
  startSection1Anim(){
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


  /* =============== animate section in or out ==================  */

  showSection(section){
    const tl =  gsap.timeline(); 
    tl  .from(section, { className: "-hide", scale: 0.1, duration: 0.5, ease: "power4.out" });
  }


  hideSetion(section){
    const tl =  gsap.timeline(); 
    tl  .to(section, { className: "+hide", scale: 0.1, duration: 0.5, ease: "power4.out" });
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
    
    // nav button click handlers
  handleUpClick(){
    // move up the page
    let pageHeight = window.innerHeight;
    document.querySelector('.page-content').scrollBy({ top: 0-(pageHeight-100),behavior: 'smooth' });
  }


  handleDownClick(){
    // move down the page
    let pageHeight = window.innerHeight;
    document.querySelector('.page-content').scrollBy({ top: pageHeight-100,behavior: 'smooth' });
  }



  render(){
    const template = html`
      <va-app-header title="Earth's Atmosphere" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content" id='atmosphere-content'>

        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up' @click=${() => this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>      
        
             <!-- page1  -->
        <div class='home-section' id='section-atmosphere'>

          <h1 class='anim-in'>Earth's Atmosphere</h1>
          <div class='atmosphere-background'></div>
          <div class='space'>           
            
            <div class='earth'> </div>

            <div class='atmosphere' id='atmos-section1' > </div>

            <div class='astronaut' @click=${()=> this.handleDownClick()}> </div>

          </div>

        </div> 
        
        <div id='atmosphere-body-text'>
          <h3>What is the greenhouse effect?</h3>
          <p>The greenhouse effect is a process that occurs when gasses in Earth's atmosphere trap the Sun's heat. This process makes Earth much warmer than it would be without an atmosphere. The greenhouse effect is one of the things that makes Earth a comfortable place to live (the left side of figure 1).</p>
        
          <h3>How does the greenhouse effect work?</h3>
          <p>As you might expect from the name, the greenhouse effect works like a greenhouse! A greenhouse is a building with glass walls and a glass roof. Greenhouses are used to grow plants, such as tomatoes and tropical flowers.
          A greenhouse stays warm inside, even during the winter. In the daytime, sunlight shines into the greenhouse and warms the plants and air inside. At nighttime, it's colder outside, but the greenhouse stays pretty warm inside. That's because the glass walls of the greenhouse trap the Sun's heat.
          The greenhouse effect works much the same way on Earth. Gasses in the atmosphere, such as carbon dioxide, trap heat similar to the glass roof of a greenhouse. These heat-trapping gasses are called greenhouse gasses.
          During the day, the Sun shines through the atmosphere. Earth's surface warms up in the sunlight. At night, Earth's surface cools, releasing heat back into the air. But some of the heat is trapped by the greenhouse gasses in the atmosphere. That's what keeps our Earth a warm and cozy 58 degrees Fahrenheit (14 degrees Celsius), on average.
          </p>


          <h3>How are humans impacting the greenhouse effect?</h3>
          <p>Human activities are changing Earth's natural greenhouse effect. Burning fossil fuels like coal and oil puts more carbon dioxide into our atmosphere.
          NASA has observed increases in the amount of carbon dioxide and some other greenhouse gasses in our atmosphere. Too much of these greenhouse gasses can cause Earth's atmosphere to trap more and more heat. This causes Earth to warm up (The right side of figure 1).
          </p>

          <div class='calign'>
            <img class='diagram' id='diagram-greenhouse-effect' src='/images/diagram_greenhouse_effect.png' alt='Diagram of the  earth comparing the natural greenhouse effect with the man made one.'>
          </div>
          <p>Figure 1:  The Natural Greenhouse effect, left side, and the Human Enhanced Greenhouse effect, right side, in the Earth's atmosphere.<p>

          <h3>What reduces the greenhouse effect on Earth?</h3>

          <p>Just like a glass greenhouse, Earth's greenhouse is also full of plants! Plants can help to balance the greenhouse effect on Earth. All plants ??? from giant trees to tiny phytoplankton in the ocean ??? take in carbon dioxide and give off oxygen. The ocean also absorbs a lot of excess carbon dioxide in the air. Unfortunately, the increased carbon dioxide in the ocean changes the water, making it more acidic. This is called ocean acidification. More acidic water can be harmful to many ocean creatures, such as certain shellfish and coral. Warming oceans, from too many greenhouse gasses in the atmosphere, can also be harmful to these organisms. Warmer waters are a main cause of coral bleaching.
          </p>
      

          <div class='calign'>
            <p>Click on the image below to learn more about the Greenhouse Effect.</p>    
            <a href='https://climatekids.nasa.gov/greenhouse-effect'><img class='content-image' src='/images/greenhouse-effect.png' alt="Image of earths atmosphere protecting the earth from the intense sun rays"/></a>
            <h3>Greenhouse Effect</h3>
          </div>

          <br>
          <br>

          <div class='calign'>
            <p>Click on the image below to learn more about the Greenhouse Gasses.</p>
            <a href='https://climatekids.nasa.gov/greenhouse-cards'><img class='content-image' src='/images/greenhouse-gasses.png' alt='Image of large factory emmitting gasses'/></a>
            <h3>Greenhouse Gasses</h3>
          </div>

          <p>To Learn more about the Earth's atmosphere and the Greenhouse Effect, please use the websites below.</p>
          <p><a href='https://scied.ucar.edu/learning-zone/how-climate-works/greenhouse-effect'>https://scied.ucar.edu/learning-zone/how-climate-works/greenhouse-effect</a></p>
          
        </div>

        <br><br><br><br>

      </div>
      <app-footer></app-footer>     
    `
    render(template, App.rootEl)
  }

}

export default new AtmosphereView()