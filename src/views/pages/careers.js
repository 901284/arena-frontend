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
            </div>
          </div>
          <!-- <p>There are a gazillion career opportunities in the renewable energy sector. Whether your interested in solar, wind, bio or other renewable energy forms and wonder what pathways and options you will have to land a job in the renewable energy sector in the future, have a look at the website below. It has a cool tool which helps you to map a career in clean energy. 
          <br><a href="https://www.energy.gov/eere/education/map-career-clean-energy">https://www.energy.gov/eere/education/map-career-clean-energy</a></p> -->

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

              <div class="testimonials-boxes">
                <div class="testimonials-img dipesh-img"></div>
                <p>"I once worked with a company that wanted solutions in minutes. Now I work for a company that makes me proud,
                  empowers me and allows me to follow my passion in providing sustainable, renewable energy."</p>
                  <h4>David Green</h4>
                  <h5>Senior Engineer</h5>
              </div>

              <div class="testimonials-boxes border">
              <div class="testimonials-img david-img"></div>
                <p>"I started here as an intern straight out of university, and immediately felt welcomed throughout
                  the entire office. Upon graduating, I found myself working with an amazing company, and even more amazing people".</p>
                  <h4>David Green</h4>
                  <h5>Energy Analyst</h5>
              </div>

              <div class="testimonials-boxes">
              <div class="testimonials-img georgia-img"></div>
                <p>"ARENA has been a truly authentic, inclusive experience that empowers me to bring my best ideas
                  and self forward to share with the world. I never stop learning and having fun in a workplace like this."</p>
                  <h4>Georgia Sutton</h4>
                  <h5>Bookkeeper</h5>
              </div>
            </div>

          </div>

          <div class="careers-jobs">
            <h2>Career Opportunities</h2>
            <div class="jobs-flex">
              <div class="jobs-box">
                <h3>Installations Manager</h3>
                <div class="location">
                  <sl-icon name="geo-alt-fill" style="color: var(--brand-grey);" class="pin"></sl-icon>
                  <h4>Perth</h4>
                </div>
              </div>

              <div class="jobs-box">
                <h3>Project Manager</h3>
                <div class="location">
                  <sl-icon name="geo-alt-fill" style="color: var(--brand-grey);" class="pin"></sl-icon>
                  <h4>Sydney</h4>
                </div>
              </div>

              <div class="jobs-box">
                <h3>PV Battery Engineer</h3>
                <div class="location">
                  <sl-icon name="geo-alt-fill" style="color: var(--brand-grey);" class="pin"></sl-icon>
                  <h4>Sydney</h4>
                </div>
              </div>

              <div class="jobs-box">
                <h3>Sales Consultant</h3>
                <div class="location">
                  <sl-icon name="geo-alt-fill" style="color: var(--brand-grey);" class="pin"></sl-icon>
                  <h4>Melbourne</h4>
                </div>
              </div>

              <div class="jobs-box">
                <h3>Hardware Technician</h3>
                <div class="location">
                  <sl-icon name="geo-alt-fill" style="color: var(--brand-grey);" class="pin"></sl-icon>
                  <h4>Brisbane</h4>
                </div>
              </div>

              <div class="jobs-box">
                <h3>Analysis Engineer</h3>
                <div class="location">
                  <sl-icon name="geo-alt-fill" style="color: var(--brand-grey);" class="pin"></sl-icon>
                  <h4>Perth</h4>
                </div>
              </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CareersView()