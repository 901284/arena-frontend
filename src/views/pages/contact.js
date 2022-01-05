import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class ContactView {
  init(){
    document.title = 'Contact'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Contact" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
        <div class="contact-wrapper">
          <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624007.58460168!2d115.22979863156776!3d-24.992915938390176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sau!4v1641304069768!5m2!1sen!2sau"style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="contact-form">
          <h1>Contact Us</h1>
              <div class="input-group">
                <sl-form class="input-validation-type">
                  <sl-input variant="email" label="Name" placeholder="Name" required></sl-input>
                  <br>
                  <sl-input variant="email" label="Subject" placeholder="Subject" required></sl-input>
                  <br>
                  <sl-input variant="email" label="Email" placeholder="you@example.com" required></sl-input>
                  <br>
                  <sl-textarea name="comment" label="Comment" placeholder="Write a message here.." required></sl-textarea>
                  <br>
                  <sl-checkbox required>Check me before submitting</sl-checkbox>
                  <br><br>
                  <sl-button variant="primary" submit>Submit</sl-button>
                </sl-form>

              </div> 
          </div>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
    
  }
}


export default new ContactView()