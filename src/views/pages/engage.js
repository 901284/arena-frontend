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
        <div class="engage-header">
          <div class="header-info">
            <h1>ENGAGE</h1>
            <p class="feature-box__text">Learn how you can get involved in Renewable Energy, and have a positive impact on the Earth's environment</p>
          </div>
        </div>
        
        <div class="engage-spiel">
          <h1>Are you keen on learning more about Renewable Energy and having a positive impact on the Earth's Environment?</h1>
          <p class="feature-box__text">We offer free online renewable energy courses, games and quizzes, so that you can build your 
            skills and learn about a career in renewable energy. If that's not your style, you can at least learn something to help
            make the Earth a better place!
          </p>
            <sl-icon name="caret-down-fill" class="learn-more"></sl-icon>


            <hr>
        </div>

        <div class="engage-row">

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"  style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Take a trip</h3>
              <p class="feature-box__text">
                Take a field trip with your classmates to one of our exciting locations!
              </p>
            </div>
          </div>

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"  style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Be a role model</h3>
              <p class="feature-box__text">
                Kids learn a lot through observing what older kids do - show them how
                they can start to implement good habits.
              </p>
            </div>
          </div>

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"   style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Explore the world</h3>
              <p class="feature-box__text">
                Curiosity is a really cool natural thing. Go out into the world, and see how your and the other's around you interactions
                shape the world that we live in.
              </p>
            </div>
          </div>

          <div class="engage-column">
            <div class="feature-box">
              <sl-icon name="arrow-down-right-circle"  style="font-size: 5rem; color: var(--brand-green);"></sl-icon>
              <h3 class="heading-tertiary">Play games</h3>
              <p class="feature-box__text">
                Interact with any of our cool pages and games to learn all that you want!
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


export default new EngageView()