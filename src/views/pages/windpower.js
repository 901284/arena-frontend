import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class WindpowerView {

  
  init(){    
    console.log('Windpower.init')
    
    document.title = "Wind Power"  
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
      <va-app-header title="Wind Power" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='windpower-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-windpower'>

          <!-- heading and image 100% of viewport height  -->
          <div class='windpower-background'>

            <h1 class='anim-in'>Wind Power</h1>
            <img  id='wind-power-header-image' src='/images/wind-power-header.png' alt='Image of cartoon wind turbines.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='windpower-body'>

            <h4>How do wind turbines work?</h4>
            <br>
            <p>Wind turbines work on a simple principle: instead of using electricity to make wind-like a fan-wind turbines use wind to make 
            electricity. Wind turns the propeller-like blades of a turbine around a rotor, which spins a generator, which creates electricity.</p>
            <br>
            <p>Wind is a form of solar energy caused by a combination of three concurrent events:
              <br>1- The sun unevenly heating the atmosphere.
              <br>2- Irregularities of the earth's surface.
              <br>3- The rotation of the earth.</p>
              <br>
            <p>The terms "wind energy" and "wind power" both describe the process by which the wind is used to generate mechanical power 
            or electricity. This mechanical power can be used for specific tasks (such as grinding grain or pumping water) or a generator can 
            convert this mechanical power into electricity.</p>
            <br>
            <p>A wind turbine turns wind energy into electricity using the aerodynamic force from the rotor blades, which work like an airplane 
            wing or helicopter rotor blade. When wind flows across the blade, the air pressure on one side of the blade decreases. The
            difference in air pressure across the two sides of the blade creates both lift and drag. The force of the lift is stronger than the drag
            and this causes the rotor to spin. The rotor connects to the generator, either directly (if it’s a direct drive turbine) or through a shaft 
            and a series of gears (a gearbox)  that speed up the rotation and allow for a physically smaller generator. This translation of 
            aerodynamic force to rotation of a generator creates electricity. 
            </p><br><br>
            <h4>Advantages of Wind Power:</h4>
            <br>
            <p>Wind power is cost-effective. Land-based utility-scale wind is one of the lowest-priced energy sources available today, costing 
            1–2 cents per kilowatt-hour after the production tax credit. Because the electricity from wind farms is sold at a fixed price over a 
            long period of time (e.g. 20+ years) and its fuel is free, wind energy mitigates the price uncertainty that fuel costs add to traditional 
            sources of energy.</p>
            <br>
            <p>
              Wind creates jobs. The U.S. wind sector employs more than 100,000 workers, and wind turbine technician is one of the fastest 
              growing American jobs. According to the Wind Vision Report, wind has the potential to support more than 600,000 jobs in 
              manufacturing, installation, maintenance, and supporting services by 2050. Wind enables U.S. industry growth and U.S.
              competitiveness.</p>
            <br>
            <p>New wind projects account for annual investments of over $10 billion in the U.S. economy. The United States has a vast domestic 
            resources and a highly-skilled workforce, and can compete globally in the clean energy economy. It's a clean fuel source. Wind 
            energy doesn't pollute the air like power plants that rely on combustion of fossil fuels, such as coal or natural gas, which emit 
            particulate matter, nitrogen oxides, and sulfur dioxide-causing human health problems and economic damages. Wind turbines don't 
            produce atmospheric emissions that cause acid rain, smog, or greenhouse gases.</p>
            <br>
            <p>Wind is a domestic source of energy. The nation's wind supply is abundant and  inexhaustible. Over the past 10 years, U.S. wind 
            power capacity has grown 15% per year, and wind is now the largest source of renewable power in the United States. It's sustainable. 
            Wind is actually a form of solar energy. Winds are caused by the heating of the atmosphere by the sun, the rotation of the Earth, 
            and the Earth's surface irregularities. For as long as the sun shines and the wind  blows, the energy produced can be harnessed to 
            send power across the grid. 
            </p>
            <br>
            <p>Wind turbines can be built on existing farms or ranches. This greatly benefits the economy in rural areas, where most of the best 
            wind sites are found.  Farmers and ranchers can continue to work the land because the wind turbines  use only a fraction of the land. 
            Wind power plant owners make rent payments  to the farmer or rancher for the use of the land, providing landowners with additional 
            income.</p>
            <br>
            <br>
            <h4>CHALLENGES OF WIND POWER:</h4>
            <br>
            <p>Wind power must still compete with conventional generation sources on a  cost basis.  Even though the cost of wind power has 
            decreased dramatically  in the past several decades, wind projects must be able to compete economically with the lowest-cost 
            source of electricity, and some locations may not be windy enough to be cost competitive.</p>
            <br>
            <p>Good land-based wind sites are often located in remote locations, far from  cities where the electricity is needed. Transmission 
            lines must be built to  bring the electricity from the wind farm to the city. However, building just  a few already-proposed transmission
            lines could significantly reduce the  costs of expanding wind energy.</p>
            <br>
            <p>
            Wind resource development might not be the most profitable use of the land.  Land suitable for wind-turbine installation must
            compete with alternative uses  for the land, which might be more highly valued than electricity generation. Turbines might cause 
            noise and aesthetic pollution.</p>
            <br>
            <p>Although wind power plants have relatively little impact on the environment  compared to conventional power plants, concern exists
            over the noise produced by the turbine blades and visual impacts to the landscape.
            </p>
            <br>
            <p>Wind plants can impact local wildlife. Birds have been killed by flying into spinning turbine blades. Most of these problems have 
            been resolved or greatly reduced through technology development or by properly siting wind plants. Bats have also been killed by 
            turbine blades, and research is  ongoing to develop and improve solutions to reduce the impact of wind turbines on these species. </p>
            <br>
            <p>Like all energy sources, wind projects can alter the habitat on which they are built, which may alter the suitability of that habitat for
            certain species.</p>
            <br>
            <br>
            <br>
            <p>Click on the image below to learn about  Wind Power in Australia.</p>
            <br>
            <div class='calign'>
                  <a href="https://arena.gov.au/renewable-energy/wind/"><img id='kangaroo-image' src='/images/kangaroo-wind-farm.png' alt='Image of kangaroo standing in front of wind turbines.'></a>            </div>
                <h4>Wind Power in Australia</h4>
                <!-- <p>(Open in a new window: https://arena.gov.au/renewable-energy/wind/)</p> -->
            <p>Click on the image below to learn about the types and applications of Wind Turbines. </p>
            <br>
            <div class='calign'>
                  <a href="https://www.energy.gov/eere/wind/how-do-wind-turbines-work/"><img id='wind-turbine-image' src='/images/offshore-wind-turbines.png' alt='Image of wind turbines in the ocean?.'></a>
            </div>
                <h4>Types and Applications of Wind Turbines</h4>
                <!-- <p>(Open in a new window: https://www.energy.gov/eere/wind/how-do-wind-turbines-work/)</p> -->
            

          </div>


        </div>  


      </div>
      <app-footer></app-footer>
      

     
    `
    render(template, App.rootEl)
  }



}

export default new WindpowerView()