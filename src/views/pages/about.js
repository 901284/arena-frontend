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
       <!--  <h1>About</h1>
        <article>
        <p>Hello and welcome to ARENA EDUCATION, We are Ali, Mikayla, Lucas, Trevor and Ryan.. and we are Team Rose. This website is our team work for the DIG33 DigEx Design Studio unit at Curtin University Australia.</p>
        <p>ARENA EDUCATION website is based on a simulated and fictional design brief, as if it was affiliated with the Australian Renewable Energy Agency. It aims to educate young Australians about renewable energy in an easy-to-understand language, and in an interactive and playful manner.</p>
        <p>Have fun and keep exploring renewable energy.</p>
        </article> -->

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
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            </p>
          </div>

          <img src="/images/earth.png" class="role-img"/>
        </div>

        <div class="project-container">
          <div class="project-box">
            <div class="project-text">
             <h3>Our Projects</h3>
              <h2>Hydogren Hub<br>Feasibility Study</h2>
              <p>This project will investigate the technical and commercial viability of renewable hydrogen and ammonia production facilities at the Port of Newcastle.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
              </p>
            </div>

            <div class="project-img"></div>
            
          </div>
        </div>

        <div class="project-container">
          <div class="project-box">
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
    `
    render(template, App.rootEl)
  }
}




export default new AboutView()