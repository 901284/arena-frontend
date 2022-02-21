import App from './../../App'
import Auth from './../../Auth'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Utils from './../../Utils'

class SignUpView{
   
  init(){      
    document.title = 'Sign In'    
    this.render()
    Utils.pageIntroAnim()
  }

  signUpSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    formData.append("bio", "User has not yet completed their bio.")
   
    // sign up using Auth
    Auth.signUp(formData, () => {
      submitBtn.removeAttribute('loading')
    })   
  }

  render(){
    const template = html`      
      <div class="page-content page-centered">      
        <div class="signinup-box">
        <img class="signinup-logo" src="/images/logo.svg">
          <h1>Sign Up</h1>
          <sl-form class="form-signup" @sl-submit=${this.signUpSubmitHandler}>
            <div class="input-group">
              <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div>            
            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>
          </sl-form>
          <p>Have an account? <a href="/signin" @click=${anchorRoute}>Sign In</a></p>
        </div>
      </div>
      <app-footer></app-footer>

    `
    render(template, App.rootEl)
  }
}


export default new SignUpView()