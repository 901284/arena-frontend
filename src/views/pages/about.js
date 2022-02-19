import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class AboutView {
  init(){
    document.title = 'About Us'    
    this.render()    
    Utils.pageIntroAnim()
  }


  render(){
    const template = html`
      <va-app-header title="About" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <div class="about-header">
          <div class="header-info">
            <h1>ABOUT</h1>
            <p>How we're working to support the global transition to net zero emissions through pre-commercial innovation</p>
          </div>
        </div>

        <div class="about-numbers">
          
          <div class="numbers-items">
            <div class="numbers-item">
              <div class="number">2016</div>
              <div class="number-p">Corporate Leadership Award</div>
            </div>
          </div>

          <div class="numbers-items">
            <div class="numbers-item">
              <div class="number">2018</div>
              <div class="number-p">Energy Efficient Champions</div>
            </div>
          </div>

          <div class="numbers-items">
            <div class="numbers-item">
              <div class="number">2021</div>
              <div class="number-p">Community Leadership Award</div>
            </div>
          </div>

        </div>

        <div class="about-intro">
          <h1>We support the global transition to net zero emissions.</h1>
        </div>

        <div class="role-container">
          <div class="our-role">
            <h3>Our Role</h3>
            <h1>Connecting investment, knowledge and people to deliver energy innovation</h1>
            <p>Established by the Australian government in July 2012, our purpose is to support the global transition to net zero emissions by accelerating
               the pace of pre-commercial innovation, to the benefit of Australian consumers, businesses and workers.
            </p>
          </div>
          

          <img src="/images/earth.png" class="role-img"/>

        </div>

        <hr id="about-hr">

        <div class="project-container">
          <div class="project-box">
            <div class="project-text project-inner">
             <h3>Our Projects</h3>
              <h2>Hydogren Hub<br>Feasibility Study</h2>
              <p>This project will investigate the technical and commercial viability of renewable hydrogen and ammonia production facilities at the Port of Newcastle.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
              </p>
            </div>

            <div class="project-img alternative-img"></div>
            
          </div>
        </div>

        <div class="project-container">
          <div class="project-box alternative">
          <div class="project-img"></div>

            <div class="project-text">
             <h3>Our Projects</h3>
              <h2>Next Generation<br>Electric Bus Depot</h2>
              <p>This project will investigate the technical and commercial viability of renewable hydrogen and ammonia production facilities at the Port of Newcastle.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
              </p>
            </div>            
          </div>
        </div>
        
      </div>      
      <app-footer></app-footer>

    `
    render(template, App.rootEl)
  }
}




export default new AboutView()