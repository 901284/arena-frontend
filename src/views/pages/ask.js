import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class AskView {
  
  init(){    
   
    document.title = "Ask me anything"  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
    this.startSection1Anim()
    this.downClickCount = 0;
    
  } 


  setListeners(){
 
    // enable these once i have put them  in the dom.
    this.downArrow = document.querySelector('#down');
    // this.upArrow = document.querySelector('#up');
    this.leftArrow = document.querySelector('#left');
        
  }

    /*'animating in the elements for section 1 when section on page load'*/
  startSection1Anim(){

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
      <va-app-header title="Ask Me anything" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
            
      <div class="page-content" id='ask-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-ask'>

          <!-- heading and image 100% of viewport height  -->
          <div class='ask-background'>

            <h1 class='anim-in'>ASK ME ANYTHING</h1>
            <img class='header-image' src='/images/ask-header.png' alt='header image on the "Ask Me Anything" page showing a busy city using all energy forms.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='ask-body'>

            <h4>Frequently Asked Questions</h4>
            <br>
            <sl-details summary="Are hydrogen-propelled airplanes really climate neutral?">
              Well not really 100%, In the first place, the production of hydrogen is not emission-free. In addition, the hydrogen-powered jet engines emit NOX gases into atmosphere as well. The good news is, the polluting emissions associated with hydrogen production and combustion are way lower than those of the fossil fuels. Depending on production and delivery methods and jet propulsion technologies.
            </sl-details>
            <br>
            <sl-details summary="WHAT ARE HYDROGEN PRODUCTION PATHS?">
              Natural gas steam reformation is the most widely used method. 97% of the hydrogen is produced using this pathway, because it is economically the most beneficial method. The second leading pathway is electrolysis. This method can be emission free if renewable sources of energy are used. Such as wind, geo-thermal, solar and so forth. Renewable hydrogen production by electrolysis sounds amazing but producing and delivering hydrogen by fossil fuels is the most economically beneficial and efficient way. The total efficiency for fossil fuels is above 50%, for gases is above 53% and for biofuel is about 40%.
            </sl-details>
            <br>
            <sl-details summary="CAN SOLAR ENERGY BE USED TO PROPEL AIRCRAFTS?">
              This type of aircraft is equipped with photovoltaic solar panels which capture the energy of the sunlight and transform it into electrical energy. which then powers the electric-propulsion system of the aircraft to generate enough lift to keep the aircraft airborne. There advantages of solar flight are that the Earth is constantly receiving lots of renewable solar energy for free, About 885 million terrawatt hours a year. This renewable and free source of energy can propel airplanes to fly much higher and far longer than traditional airplanes. Solar airplanes can fly in the stratosphere region and stay in the cruising flight mode for a very long time.
            </sl-details>

          <br>
          <div class="ask-section">
          <h4>ASK ME Anything</h4>
          <p>Are you curious to know more?</p>
          <p>You can easily ask us anything about the</p>
          <p>renewable energy in the box below and click</p>
          <p>on the SEND button.</p>
          </div>
          <sl-form class="ask-form">
          <sl-textarea placeholder="Ask us a question"></sl-textarea>
          <sl-button >SEND</sl-button>
          </sl-form>
   
          </div>


        </div>  


      </div>
     
    `
    render(template, App.rootEl)
  }



}

export default new AskView()