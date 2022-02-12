import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class SolarpowerView {

  
  init(){    
    console.log('Solarpower.init')
    
    document.title = "Solar Power"  
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
      <va-app-header title="Solar Power" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='solarpower-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-solarpower'>

          <!-- heading and image 100% of viewport height  -->
          <div class='solarpower-background'>

            <h1 class='anim-in'>Solar Power</h1>
            <img id='solar-power-header-image' src='/images/solar-power-header.png' alt='Image of cartoon solar panels and sun.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='solarpower-body'>
              <p>The amount of sunlight that strikes the earth's surface in an hour and a half is enough to handle 
              the entire world's  energy consumption for a full year. Solar technologies convert sunlight into 
              electrical energy either through photovoltaic (PV) panels or through mirrors that concentrate 
              solar radiation. This energy can be used to generate electricity or be stored in batteries or thermal
              storage. </p>
              <p>Solar radiation is light – also known as electromagnetic radiation – that is emitted by the sun.
              While every location on Earth receives some sunlight over a year, the amount of solar radiation 
              that reaches any one spot on the Earth’s surface varies. Solar technologies capture this radiation
              and turn it into useful forms of energy.</p>
              <p>At the end of 2020, there was more than 700 GW of solar installed around the world, meeting 
              around 3 percent of global electricity demand.
              </p>
              <p>More solar PV energy is added each year than any other type of energy generation, thanks largely
              to the rapid cost reductions that have been achieved in recent years. Between 2010 and 2019, the 
              global levelized cost of electricity (LCOE) for large scale solar dropped by 85 per cent.</p>
              <p>There are two main types of solar power technology, solar photovoltaic and solar thermal.
              </p>
              <p>1. Solar photovoltaic
                Solar photovoltaic (also known as solar PV) converts sunlight directly into electricity using a 
                technology known as a semiconductor cell or solar PV cell. The most common form of solar PV
                cell is typically encased in glass and an aluminium frame to form a solar panel. One or more panels 
                can be installed to power a single light, cover the roof of a house for residential use, or be assembled 
                into a large-scale solar farm generating hundreds of megawatts of  electricity. Solar PV panels are 
                currently the most widespread type of solar PV technology, however other types of solar PV are
                being developed for targeted applications including PV that can be integrated into buildings, flexible
                PV and even PV paint.</p>

                <div class='calign'>
                  <img class='diagram' id='photovoltaic-image' src='/images/photovoltaic.png' alt='Image of photovoltaic solar panels.'>
                </div>
                <h4>PHOTOVOLTAIC</h4>
                <p>(Open in a new window: https://arena.gov.au/renewable-energy/solar-pv-rd/)</p>

                <p>2- Solar Thermal
                  Solar thermal converts sunlight into heat (also known as thermal energy), which can be used for 
                  a variety of purposes including creating steam to drive an electricity generator. This energy can 
                  be used to drive a refrigeration cycle to provide solar-based cooling. There are two main types of 
                  solar thermal technologies. Small scale thermal technology is used to heat space or water (such as
                  in a solar hot water system). Concentrated solar thermal harvests the sun’s heat to  produce large-
                  scale power generation. It uses a field of mirrors to reflect sunlight onto a device called a receiver, 
                  which transfers the heat to a thermal energy storage system. Energy can then be released from 
                  storage as required.</p>

                  <div class='calign'>
                  <img class='diagram' id='solar-thermal-image' src='/images/SOLAR THERMAL_IMAGE.png' alt='Image of solar thermal solar panels.'>
                </div>
                <h4>SOLAR THERMAL</h4>
                <p>(Open in a new window: https://arena.gov.au/renewable-energy/concentrated-solar-thermal/)</p>
          </div>
        </div>  
      </div>
      <app-footer></app-footer>

     
    `
    render(template, App.rootEl)
  }



}

export default new SolarpowerView()