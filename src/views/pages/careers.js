import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class CareersView {
  init(){
    document.title = 'Careers'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Careers" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <div class="careers-header">
          <div class="header-info">
            <h1>CAREERS</h1>
            <p>We offer exciting and rewarding careers for talented individuals who wish to help improve Australia’s future through renewable energy.</p>
            <span class="down-arrow">&#8595;</span>
          </div>
        </div>

        <div class="careers-information">
          <h2>Something something something...</h2>
          <div class="careers-boxes-container">

            <div class="careers-box">
              <h3>Meaningful Work</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            </div>

            <div class="careers-box">
              <h3>Meaningful Work</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            </div>

            <div class="careers-box">
              <h3>Meaningful Work</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            </div>
            
            <div class="careers-box">
              <h3>Meaningful Work</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            </div>

          </div>
        </div>

        <div class="careers-testimonials">
          <h2>What our employees have to say</h2>
          <hr>
          <div class="testimonials-container">

            <div class="testimonials-boxes border-right ">
              <div class="testimonials-img"></div>
              <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident".</p>
                <h4>David Green</h4>
                <h5>Accounts Manager</h5>
            </div>

            <div class="testimonials-boxes border-right">
            <div class="testimonials-img"></div>
              <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident".</p>
                <h4>David Green</h4>
                <h5>Accounts Manager</h5>
            </div>

            <div class="testimonials-boxes">
            <div class="testimonials-img"></div>
              <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident".</p>
                <h4>David Green</h4>
                <h5>Accounts Manager</h5>
            </div>

          </div>

        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CareersView()