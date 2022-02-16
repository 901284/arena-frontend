import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";

class GameView {
  
  init(){    
    console.log('gameView.init')
    
    document.title = "The Power Supply Game"  
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

  gameSubmitHandler(){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    let coal = formData.get('coal-input')
    let gas = formData.get('gas-input')
    let nuclear = formData.get('nuclear-input')
    let fuelcell = formData.get('fuelcell-input')
    let wind = formData.get('wind-input')
    let solar = formData.get('solar-input')

    let powerGenerated = (coal * 540) + (gas * 270) + (nuclear * 1000) + (fuelcell * 50) + (wind * 60) + (solar * 20)
    let co2Emitted = (coal * 140000) + (gas * 35000) + (nuclear * 3000) + (fuelcell * 500) + (wind * 80) + (solar * 44)
    let budgetSpent = (coal * 1000) + (gas * 550) + (nuclear * 3200) + (fuelcell * 110) * (wind * 80) + (solar * 33)
    let landCleared = (coal * 30) + (gas * 5) + (nuclear * 40) + (fuelcell * 1) + (wind * 300)

    document.getElementById('power-generated').innerHTML = powerGenerated
    document.getElementById('co2-emitted').innerHTML = co2Emitted
    document.getElementById('budget-spent').innerHTML = budgetSpent
    document.getElementById('land-cleared').innerHTML = landCleared

    this.render()
   
  }


  render(){
    const template = html`
      <va-app-header title="The Power Supply Game" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      
      <div class="page-content" id='game-content'>

        <!-- nav buttons  -->
        <div class='back' @click=${()=> gotoRoute('/')}></div>
        <div class='nav-container'>
          <div class='up hide'  @click=${()=> this.handleUpClick()}></div>
          <div class='down' @click=${()=> this.handleDownClick()} ></div>
        </div>
        
        <div id='article-game'>

          <!-- heading and image 100% of viewport height  -->
          <div class='game-background'>

            <h1 class='anim-in'>THE POWER SUPPLY GAME</h1>
            <img class='header-image' src='/images/power-supply-game-header.png' alt='header image on the game page showing a city at night time with all the lights on.'>

          </div>
          
          <!-- scrolling content text, images and links          -->
          <div id='game-body'>

            <h4>THE POWER SUPPLY GAME</h4>
            <br>
            <p>(The idea, information and data of this game are mostly adopted from the Power Supply Simulation by Dr Martin Draganski at RMIT)</p>
            <br>
            <h5>Goal:</h5>
            <p>To light up the city in the above picture, you need to supply 2000 Megawatts (2 Gigawatts) of electrical power. You have an initial
            budget of $ 6 billion a limited land area of 5000 hectares. You should minimize the CO2 emissions and maximize the green energy
            generation, as well.</p>
            <br>
            <h5>Resources:</h5>
            <p>There are different technologies at your disposal:</p>
            <ol>
              <li>High yield and polluting baseload, namely Coal and Gas Power Plants.</li>
              <li>Renewables, namely Solar and Wind Power.</li>
              <li>High yield and expensive-to-run baseload, namely Nuclear Powerplant.</li>
              <li>Hydrogen Fuel Cells to increase the efficiency of the renewables.</li>
            </ol>
            <br>
            <h5>Advantages and Disadvantages of each power supply option:</h5>
            <br>
            <ol>
              <li>Coal-Fired Power Plant: Cheapest baseload, but most poluting.</li><br>
              <li>Gas-Fired Power Plant: Expensive but less polluting baseload</li><br>
              <li>Nuclear Power Plant: Expensive but least polluting baseload</li><br>
              <li>Wind Farm (up to 50 turbines): smallest carbon footprint of renewables, but requires largest land area of installation.
               Fuel cells greatly improves all aspects.</li><br>
              <li>Solar PV: Available per 2000 homes. Becomes cheaper when utilizing fuel cell technology.</li><br>
              <li> Fuel Cell: Electricity is generated through an electrochemical reaction. 20 reserves are required to back up the renewables.</li><br>
            </ol>
            <br>
            <p>Each power supply installation has properties that are written under it. To turn on each power plant, please enter
            a number in the space provided. For example, if you enter 2 under the wind turbine instalation, you turn on 
            2 wind turbines, and if you enter 0, you turn all of them off, and so forth.</p>
            <br>
            <p>At the bottom, there is a dashboard where you can see how much is generated, how much C02 is emitted, how much 
            budget is spent and how much land is cleared. Remember to generate at least 2000 Megawats of electrical power to 
            light up the city. The less CO2 is emitted, in other words the more renewables are used, the better.</p>
            <br>
            <!-- <p>By pressing on the SAVE button, you can save the game and return to it at a later time. By clicking on the RESET button,
            you can reset the game and start from the scratch. </p> -->
            <h3>Are you ready? Let’s go!</h3>
                <sl-form class="form-game" @sl-submit=${this.gameSubmitHandler} class='game'>
                    <div class='game-section'>
                      <img class='game-image' id='game-coal-image' src='/images/game-coal.png' alt='Image of coal plant.'>
                      <p>Power Generation: 540 MW</p>
                      <p>CAPITAL COST: $1000 M</p>
                      <p>LAND AREA: 30 hc</p>
                      <p>CO2 EMISSIONS: 140000 t</p>
                      <br>
                      <sl-input name='coal-input' type='number' placeholder="0-5" label="ENTER A NUMBER BETWEEN 0 and 5"></sl-input>
                    </div>
                    <div class='game-section'>
                      <img class='game-image' id='game-gas-image' src='/images/game-gas.png' alt='Image of gas plant.'>
                      <p>Power Generation: 270 MW</p>
                      <p>CAPITAL COST: $550 M</p>
                      <p>LAND AREA: 5 hc</p>
                      <p>CO2 EMISSIONS: 35000 t</p>
                      <br>
                      <sl-input name='gas-input' type='number' placeholder="0-8" label="ENTER A NUMBER BETWEEN 0 and 8"></sl-input>
                    </div>
                    <div class='game-section'>
                      <img class='game-image' id='game-nuclear-image' src='/images/game-nuclear.png' alt='Image of nuclear plant.'>
                      <p>Power Generation: 1000 MW</p>
                      <p>CAPITAL COST: $3200 M</p>
                      <p>LAND AREA: 40 hc</p>
                      <p>CO2 EMISSIONS: 3000 t</p>
                      <br>
                      <sl-input name='nuclear-input' type='number' placeholder="0-3" label="ENTER A NUMBER BETWEEN 0 and 3"></sl-input>
                    </div>
                    <div class='game-section'>
                      <img class='game-image' id='game-fuelcell-image' src='/images/game-fuelcell.png' alt='Image of fuel cell plant.'>
                      <p>Power Generation: 50 MW</p>
                      <p>CAPITAL COST: $110 M</p>
                      <p>LAND AREA: 1 hc</p>
                      <p>CO2 EMISSIONS: 500 t</p>
                      <br>
                      <sl-input name='fuelcell-input' type='number' placeholder="0-20" label="ENTER A NUMBER BETWEEN 0 and 20"></sl-input>
                    </div>
                    <div class='game-section'>
                      <img class='game-image' id='game-wind-image' src='/images/game-wind.png' alt='Image of wind plant.'>
                      <p>Power Generation: 60 MW</p>
                      <p>CAPITAL COST: $80 M</p>
                      <p>LAND AREA: 300 hc</p>
                      <p>CO2 EMISSIONS: 80 t</p>
                      <br>
                      <sl-input name='wind-input' type='number' placeholder="0-20" label="ENTER A NUMBER BETWEEN 0 and 20"></sl-input>
                    </div>
                    <div class='game-section'>
                      <img class='game-image' id='game-solar-image' src='/images/game-solar.png' alt='Image of solar plant.'>
                      <p>Power Generation: 20 MW</p>
                      <p>CAPITAL COST: $33 M</p>
                      <p>LAND AREA: 300 hc</p>
                      <p>CO2 EMISSIONS: 44 t</p>
                      <br>
                      <sl-input name='solar-input' type='number' placeholder="0-60" label="ENTER A NUMBER BETWEEN 0 and 60"></sl-input>
                    </div>
                    <sl-button type="primary" class="submit-btn" submit style="width: 100%;">CLICK TO CALCULATE</sl-button>
                    </sl-form>
                        <div id='game-results'>
                        <p>POWER GENERATED: </p><p id='power-generated'> </p><p> MEGAWATTS</p><br>
                        <p>CO2 EMITTED: </p><p id='co2-emitted'> </p><p> TONNES</p><br>
                        <p>BUDGET SPENT: </p><p id='budget-spent'> </p><p> MILLION DOLLARS</p><br>
                        <p>LAND CLEARED: </p><p id='land-cleared'> </p><p> HECTARES</p><br>
                        </div>

   
          </div>


        </div>  


      </div>
     
    `
    render(template, App.rootEl)
  }



}

export default new GameView()