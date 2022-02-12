import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class HydrogenView {

  
  init(){    
    console.log('Hydrogen.init')
    
    document.title = "Hydrogen Power"  
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



      // const downArrow = document.querySelector(".downArrow");
  
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
      <va-app-header title="Hydrogen" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='hydrogen-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-hydrogen'>

          <!-- heading and image 100% of viewport height  -->
          <div class='hydrogen-background'>

            <h1 class='anim-in'>Hydrogen</h1>
            <img  id='hydrogen-header-image' src='/images/hydrogen-header.png' alt='Image of cartoon hydrogens.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='hydrogen-body'>

            <h4>The Power of Hydrogen</h4>
            <br>
            <p>The simplest and most abundant element in the universe, hydrogen packs a lot of energy - more 
            than natural gas or oil on a mass basis. It’s a cleaner, more flexible energy carrier and is always 
            combined with other elements. Hydrogen can be produced in several ways. One method of 
            producing this zero-carbon fuel can be done by splitting water into hydrogen and oxygen using 
            renewable resources—this is called green hydrogen.</p>
            <br>
            <p>Green hydrogen has a key role to play in the global energy transition by helping to diversify energy 
            sources worldwide, as well as foster business and technological innovation. Its unique properties 
            make it a powerful enabler for the energy transition, with benefits for both the energy system and 
            end-use applications like chemicals, transport, and heat generation.</p>
            <br>
            <h4>Fuel Cell</h4>
            <br>
            <p>A fuel cell uses the chemical energy of hydrogen or other fuels to cleanly and efficiently produce 
            electricity. If hydrogen is the fuel, the only products are electricity, water, and heat. Fuel cells are 
            unique in terms of the variety of their potential applications; they can use a wide range of fuels
            and feedstocks and can provide power for systems as large as a utility power station and as small 
            as a laptop computer.</p>
            <br>
            <p>Fuel cells can be used in a wide range of applications, providing power for applications across 
            multiple sectors, including transportation, industrial/commercial/residential buildings, and 
            long-term energy storage for the grid in reversible systems.</p>
            <br>
            <p>Fuel cells can operate at higher efficiencies than combustion engines and can convert the chemical 
            energy in the fuel directly to electrical energy with efficiencies capable of exceeding 60%. Fuel cells
            have lower or zero emissions compared to combustion engines. Hydrogen fuel cells emit only water, 
            addressing critical climate challenges as there are no carbon dioxide emissions.</p>
            <br>
            <p>Click on the image below to learn more about the fuel cells.</p>
            <br>
            <div class='calign'>
                  <img id='fuel-cells-image' src='/images/fuel-cells-image.png' alt='Image of fuel cells?.'>
            </div>
            <h4>FUEL CELLS</h4>
            <p>(Open in a new window:https://www.energy.gov/eere/fuelcells/fuel-cells/)</p>
            <br>
            <h4>Hydrogen-powered Vehicles</h4>
            <br>
            <p>Hydrogen can be used as the fuel to power vehicles, such as cars, airplanes and so forth.</p>
            <br>
            <p>Fuel cell electric vehicles (FCEVs) are powered by hydrogen. They are more efficient than 
            conventional internal combustion engine vehicles and produce no tailpipe emissions—they 
            only emit water vapor and warm air. FCEVs and the hydrogen infrastructure to fuel them are 
            in the early stages of implementation.</p>
            <br>
            <p>
            Hydrogen looks to be a good solution to the challenge of flying without wrecking the climate.
            Whether hydrogen is used to power a fuel cell to generate electricity or directly combusted for 
            motive power, the only waste product is clean water. Importantly in the context of flight, 
            hydrogen  packs a lot of energy per unit of mass – three times more than conventional jet fuel, 
            and more than a hundred times that of lithium-ion batteries.</p>
            <br>
            <p>Click on the image below to learn more about the future hydrogen-powered airplanes.</p>
            <div class='calign'>
                  <img id='airbus-hydrogen-image' src='/images/airbus-hydrogen-airplanes.png' alt='Image of airbus hydrogen powered airplanes?.'>
            </div>
            <h4>HYDROGEN POWERED AIRPLANES</h4>
            <p>(Open in a new window:https://www.airbus.com/en/innovation/zero-emission/hydrogen/zeroe)</p>


          </div>


        </div>  


      </div>
      <app-footer></app-footer>

    `
    render(template, App.rootEl)
  }



}

export default new HydrogenView()