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
              This is a first-of-a-kind deployment for Australia and will help to reduce emissions in the ultra-heavy transport sector. The project will be located at the
              Sun Metals zinc refinery in Townsville, which is owned by Ark Energy’s sister company, Sun Metals Corporation (SMC). 
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
              <p>There is limited understanding and knowledge of the best and most effective way to transition a large fleet of heavy vehicles, stagnating the government’s 
                and private operators’ efforts to decarbonise. This project provides the Australian public transport sector with a commercial and technical blueprint to solve '
                some of the most critical issues facing large-scale fleet electrification, being the impact on the grid and the management of assets.
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