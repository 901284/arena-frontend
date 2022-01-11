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

          <div class="careers-flex">

            <div class="careers-flex-left">
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
               quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et 
               aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
               Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
               quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et 
               aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div>

            <div class="careers-flex-right">
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
               quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et 
               aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
               Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
               quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et 
               aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div>

          </div>

        <div class="careers-information">
          <h2>A meaningful impact</h2>
          <div class="careers-boxes-container">

            <div class="careers-box">
              <h3>Expertise</h3>
              <p>Our deep understanding of the renewable energy sector as well as our willingness to fund ground breaking projects means
                 we provide a pathway to commercialisation for many new technologies and businesses that would otherwise struggle.
              </p>
            </div>

            <div class="careers-box">
              <h3>Innovation</h3>
              <p>Always learning fast, we stand at the brink of cutting edge energy innovation, working to shape an energy market that
                is fit for purpose and in which renewable energy is available when and where it is needed.
              </p>
            </div>

            <div class="careers-box">
              <h3>Collaboration</h3>
              <p>We bring together people from across the globe to undertake research and inform policy decisions - from the energy sector
                to the government, startups and universities - we collaborate with everyone.
              </p>
            </div>
            
            <div class="careers-box">
              <h3>Sustainability</h3>
              <p>We're always working to ensuring that businesses in the private sector always have the right tools, technology options
                and business models to deliver and secure and reliable energy, because that's how our impact is measured.
              </p>
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
        <!-- <img src="/images/turbines.jpeg" class="banner-img" />       -->
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CareersView()