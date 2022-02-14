import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class NuclearPowerView {

  
  init(){    
    console.log('Nuclearpower.init')
    
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
      <va-app-header title="Nuclear Power" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='nuclearpower-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-nuclearpower'>

          <!-- heading and image 100% of viewport height  -->
          <div class='nuclearpower-background'>

            <h1 class='anim-in'>Nuclear Power</h1>
            <img id='nuclear-power-header-image' src='/images/nuclear-power-header.png' alt='Image of cartoon nuclear plant.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='nuclearpower-body'>
             <h4>NUCLEAR POWER</h4>
             <br>
             <p>Nuclear power plants heat water to produce steam. The steam is used to spin large turbines that
              generate electricity. Nuclear power plants use heat produced during nuclear fission to heat water.</p>
              <br>
              <p>In nuclear fission, atoms are split apart to form smaller atoms, releasing energy. Fission takes place 
                inside the reactor of a nuclear power plant. At the center of the reactor is the core, which contains 
                uranium fuel.</p>
                <br>
                <p>The uranium fuel is formed into ceramic pellets. Each ceramic pellet produces about the same
                amount of energy as 150 gallons of oil. These energy-rich pellets are stacked end-to-end in 
                12-foot metal fuel rods. A bundle of fuel rods, some with hundreds of rods, is called a fuel 
                assembly. A reactor core contains many fuel assemblies.</p>
                <br>
                <p>The heat produced during nuclear fission in the reactor core is used to boil water into steam, 
                which turns the blades of a steam turbine. As the turbine blades turn, they drive generators that 
                make electricity. Nuclear plants cool the steam back into water in a separate structure at the 
                power plant called a cooling tower, or they use water from ponds, rivers, or the ocean. The cooled 
                water is then reused to produce steam.</p>
                <br>
                <p>The prospect of nuclear power in Australia has been a topic of public debate since the 1950s. 
                While we have never had a nuclear power station, we do have 33% of the world’s uranium deposits 
                and we are the world’s third largest producer of it. </p>
                <br>
                <p>In 2019, 31 countries had commercial nuclear power plants, and in 14 of the countries, nuclear
                energy supplied at least 20% of their total annual electricity generation. The United States had 
                the largest nuclear electricity generation capacity and generated more nuclear electricity than 
                any  other country. France, with the second-largest nuclear electricity generation capacity and 
                second-highest nuclear electricity generation, had the largest share—about 70%—of total annual 
                electricity generation from nuclear energy.</p>
                <br>
                <p>The graph below depicts the number of operable nuclear reactors worldwide as of October 2021,
                  by country.</p>
                  <br>
                  <div class='calign'>
                  <img class='diagram' id='nuclear-reactors-image' src='/images/nuclear-reactors-graph.png' alt='Image of graph with number of reactors worldwide.'>
                </div>

                <br>
                <h4>Advantages and Challenges of Nuclear Energy</h4>
                <br>
                <p>Nuclear is a zero-emission clean energy source. It also keeps the air clean by removing thousands
                of tons of harmful air pollutants each year that contribute to acid rain, smog, lung cancer and 
                cardiovascular disease.</p>
                <br>
                <p>Nuclear energy’s land footprint is small; despite producing massive amounts of carbon-free 
                power, nuclear energy produces more electricity on less land than any other clean-air source.</p>
                <br>
                <p>Nuclear energy produces minimal waste; It’s about 1 million times greater than that of other
                traditional energy sources and because of this, the amount of used nuclear fuel is not as big as 
                you might think.  All of the used nuclear fuel produced by the U.S. nuclear energy industry over 
                the last 60 years could fit on a football field at a depth of less than 10 yards! That waste can also 
                be reprocessed and recycled, although the United States does not currently do this.</p>
                <br>
                <p>One of the challenges of the nuclear energy is the public awareness; Commercial nuclear power
                is sometimes viewed by the general public as a dangerous or unstable process.</p>
                <br>
                <p>The other issue is the used Fuel Transportation, storage and disposal; Many people view used 
                fuel as a growing problem and are apprehensive about its transportation, storage, and disposal.</p>
                <br>
                <p>The other challenges of nuclear energy are high construction and operating costs of nuclear 
                power plants.</p>
                <br>
                <p>Click on the image below to learn more about the pros and cons of nuclear energy.</p>
                <br>
                <div class='calign'>
                <a href="https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy/">
                  <img class='diagram' id='nuclear-plant-image' src='/images/nuclear-plant-image.png' alt='Image of a nuclear power plant.'>
                </a>
                </div>
                <h4>ADVANTAGES AND CHALLENGES OF NUCLEAR ENERGY</h4>
                <p>(Open in a new window: https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy/)</p>
                <br>
                <br>
                <p>Click on the image below to learn more about the safety of nuclear waste management.</p>
                <div class='calign'>
                <a href="https://www.base.bund.de/EN/nwm/introduction/introduction_node.html/"><img class='diagram' id='nuclear-waste-image' src='/images/nuclear-waste-image.png' alt='Image of scary nuclear waste.'></a>
                </div>
                <h4>SAFETY OF NUCLEAR WASTE MANAGEMENT</h4>
                <p>(Open in a new window: https://www.base.bund.de/EN/nwm/introduction/introduction_node.html/)</p>
                <br>
                <br>
                <p>Australia is the only G20 country where nuclear power is banned by Federal law, but 
                Australian Nuclear Association (ANA) is an independent incorporated scientific institution 
                made up of people from the professions, business, government and universities with an 
                interest in nuclear topics. The ANA promotes the knowledge and practice of the peaceful, 
                safe and effective use of nuclear science and technology and provides a forum for the 
                presentation, exchange and dissemination of information in the field of nuclear science and 
                technology.</p>
                <br>
                <p>Click on the image below to learn more about ANA</p>
                <div class='calign'>
                  <a href="https://www.nuclearaustralia.org.au/"><img class='diagram' id='ana-logo-image' src='/images/ana-logo.png' alt='Image of ana logo.'></a>
                </div>
                <p>(Open in a new window: https://www.nuclearaustralia.org.au/)</p>

          </div>
          
        </div>  
      </div>
      <app-footer></app-footer>

     
    `
    render(template, App.rootEl)
  }



}

export default new NuclearPowerView()