import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class fossilfuelsView {

  
  init(){    
    console.log('FossilFuels.init')
    
    document.title = "Fossil Fuels"  
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
      <va-app-header title="Fossil Fuels" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='fossilfuels-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-fossilfuels'>

          <!-- heading and image 100% of viewport height  -->
          <div class='fossilfuels-background'>

            <h1 class='anim-in'>Fossil Fuels</h1>
            <img  id='fossil-fuels-header-image' src='/images/fossil-fuels-header.png' alt='Image of cartoon fOsSiL fUeLs.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='fossilfuels-body'>

            <h4>FOSSIL FUELS</h4>
            <br>
            <p>Fossil energy sources, including oil, coal and natural gas, are non-renewable resources that 
            formed when prehistoric plants and animals died and were gradually buried by layers of rock. 
            Over millions of years, different types of fossil fuels formed -- depending on what combination
            of organic matter was present, how long it was buried and what temperature and pressure
            conditions existed as time passed.</p>
            <br>
            <p>Today, fossil fuel industries drill or mine for these energy sources, burn them to produce 
            electricity, or refine them for use as fuel for heating or transportation. Over the past 20 years, 
            nearly three-fourths of human-caused emissions came from the burning of fossil fuels.</p>
            <br>
            <h4>Electricity Generation in Australia</h4>
            <br>
            <p>In 2019-20 total electricity generation in Australia was nearly steady at around 265 TWh 
            (955 PJ), the highest total generation on record for Australia. COVID-19 affected sectoral
            usage and time of demand, but had limited impact on overall demand for electricity forthe year as a whole.
            Fossil fuels contributed 76% of total electricity generation in 2020, including coal (54%),
            gas (20%) and oil (2%). The share of coal in the electricity mix has continued to decline,in contrast to the beginning of the century when coal’s share was more than 80% of electricity generation.
            Renewables contributed 24% of total electricity generation in 2020, specifically solar (9%),wind (9%) and hydro (6%). The share of renewable energy generation increased from 21% in 2019.
            About 16% of Australia’s electricity was generated outside the electricity sector by businessand households in 2019-20.</p>
            <br>
            <br>
            <h4>Australian electricity generation - fuel mix calendar year 2020</h4>
            <br>
            <p>The figure below shows Australian electricity generation fuel mix in shares in calendar year
            2020 by state and territory. Electricity generation fuel mix varies across states and territories.Coal continues to dominate in New South Wales, Victoria and Queensland making up more than 60% of generation in all three states in 2020. Gas accounted for 85% of Northern Territory generation, 62% of Western Australian generation and 41% of South Australian generation. Renewables accounted for 98% of generation in Tasmania and 58% in South Australia, with hydro being dominant in Tasmania and other renewables being dominant in South Australia. Coal continues to make up more than 50% of total Australian generation.</p>
            <div class='calign'>
                  <img id='fossil-fuel-graph-image' src='/images/fuel-mix-graph.png' alt='Image of fuel mix graph?.'>
            </div>
            <br>
            <h4>Australian electricity generation renewable sources</h4>
            <br>
            <p>The figure below shows Australian electricity generation from renewable sources in gigawatt hours from 1994-95 to 2019-20. Generation from renewables has increased by 126% over thepast decade. The composition of renewable energy in Australia has diversified significantly as wind and increasingly solar capacity has come online, with the share of hydro declining.</p>
            <div class='calign'>
                  <img id='renewable-sources-graph-image' src='/images/renewable-sources-graph.png' alt='Image of renewable sources graph?.'>
            </div>
            <br>
            <h4>Hazardous Fossil Fuels Emissions</h4>
            <br>
            <p>Emissions of carbon from fossil fuels make the largest contribution to climate change.
            About 90 per cent of the world’s carbon emissions comes from the burning of fossil fuels, 
            mainly for electricity, heat and transport. </p>
            <br>
            <p>In 2021, most of the world's fossil fuel carbon emissions came from coal (40 per cent), 
            oil (32 per cent), natural gas (21 per cent), cement (5 per cent) and flaring and other smaller 
            sources (2 per cent).</p>
            <br>
            <p>Australian emissions
              Australia is the world’s 14th highest emitter, contributing just over 1 per cent of global 
              emissions.
              The Australian Government tracks the nation’s greenhouse gases emissions through the
              National Greenhouse Gas Inventory. According to the December 2020 update, Australia 
              emitted 499 million tonnes of carbon dioxide equivalent, a 5 per cent decrease on 2019.</p>
              <br>
              <p>Click on the image below to learn more about the sources of Australia’s greenhouse gases.</p>
              <div class='calign'>
                  <img id='coal-fired-power-plant-image' src='/images/coal-fired-power-plant.png' alt='Image of coal fired power plant?.'>
              </div>
              <h4>AUSTRALIA'S GREENHOUSE GASES</h4>
              <p>(Open in a new window: https://www.csiro.au/en/research/environmental-impacts/climate-change/climate-change-qa/sources-of-ghg-gases)</p>
          </div>


        </div>  


      </div>
     
    `
    render(template, App.rootEl)
  }



}

export default new fossilfuelsView()