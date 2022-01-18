import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class EngageView {
  init(){
    document.title = 'Engage'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Engage" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">  

     <!--    <h1>Engage</h1>
        <img src="images/astronautincloud.png" alt="Cartoon astronaut in cloud">
        <p>Are you keen on learning more about Renewable Energy and having a positive impact on the Earth's Environment?</p>
        <p>This official energy website has fun educational resources for students from year one to year twelve:<br><a href="https://www.energy.gov/diversity/student-educational-resources-stem">https://www.energy.gov/diversity/student-educational-resources-stem</a></p>
        <p>And if you are eager to get more actively engaged, you may want to have a look at The SDG7 Youth Constituency website:<br><a href="https://www.unmgcy.org/sustainable-energy">https://www.unmgcy.org/sustainable-energy</a></p> -->
        
        <div class="engage-header">
          <div class="header-info">
            <h1>ENGAGE</h1>
            <p>Learn how you can get involved in Renewable Energy, and have a positive impact on the Earth's environment</p>
          </div>
        </div>
        
        <div class="engage-spiel">
          <h3 class="learn-more">- Learn More - </h3>
          <h1>Are you keen on learning more about Renewable Energy and having a positive impact on the Earth's Environment?</h1>
          <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <hr>
        </div>

        <div class="engage-row">

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"  style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Take a trip</h3>
              <p class="feature-box__text">
                Lorem ipsum sit amet consectetur adiscipting elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"  style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Be a role model</h3>
              <p class="feature-box__text">
                Kids do a lot of learning just by observing what older kids do - show them how
                they can start to implement good habits.
              </p>
            </div>
          </div>

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"   style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Explore the world</h3>
              <p class="feature-box__text">
                Lorem ipsum sit amet consectetur adiscipting elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"  style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Play games</h3>
              <p class="feature-box__text">
                Lorem ipsum sit amet consectetur adiscipting elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

        </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new EngageView()