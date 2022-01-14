import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'
import moment from 'moment'

class EditProfileView {
  init(){
    console.log('EditProfileView.init')
    document.title = 'Edit Profile'    
    this.user = null
    this.render()   
    console.log("rendered") 
    Utils.pageIntroAnim()
    console.log("entry animated") 
    this.getUser()    
    console.log("got user") 

  }

  async getUser(){
    try {
      this.user = await UserAPI.getUser(Auth.currentUser.email)     
      console.log("the user: " , this.user) 
 
      this.render()
    }catch(err){
      console.log(err)
      Toast.show(err, 'error')
    }



  }

  async updateProfileSubmitHandler(e){
    console.log("updateProfileSubmitHandler called") 
    e.preventDefault()
    const formData = e.detail.formData
    formData.append("updatedAt", new Date().toISOString())
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')
    try {
      console.log("calling UserAPI.updateUser(Auth.currentUser.email, formData)") 
      const updatedUser = await UserAPI.updateUser(Auth.currentUser.email, formData)    
      console.log("got updated user : ",updatedUser)   
      delete updatedUser.password        
      this.user = updatedUser     
      Auth.currentUser = updatedUser
      this.render()
      Toast.show('profile updated')
    }catch(err){      
      Toast.show(err, 'error')
    }
    submitBtn.removeAttribute('loading')
  }

  render(){
        
    console.log("render called") 
    const template = (this.user == null) ? html`
    <sl-spinner></sl-spinner>
    `:html`
      <va-app-header title="Edit Profile" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      <div class="page-content">   

        <div class="profile-wrapper">

          <div class="profile-header">
            <h1>${this.user.firstname + " " + this.user.lastname }</h1>
            <p><sl-icon-button name="x"></sl-icon-button></p>
          </div>


          <div class="profile-body">

            <!-- left side -->
            <div class="profile-form">
              <sl-form class="page-form input-validation-type" @sl-submit=${this.updateProfileSubmitHandler.bind(this)}>
                <p>Last Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>
                <div class="input-group">
                  <sl-input type="text" name="firstname" value="${this.user.firstname}" placeholder="First Name"></sl-input>
                </div>
                <div class="input-group">
                  <sl-input type="text" name="lastname" value="${this.user.lastname}" placeholder="Last Name"></sl-input>
                </div>
                <div class="input-group">
                  <sl-input type="text" name="email" value="${this.user.email}" placeholder="Email Address"></sl-input>
                </div>     
                <div class="input-group">
                  <sl-textarea type="text" size="medium" name="bio" value="${this.user.bio}" placeholder="Enter some information about yourself"></sl-textarea>
                </div>          
                <div class="input-group">
                  <label>Avatar</label><br>          
                  ${(this.user.avatar) ? html`
                    <sl-avatar image="${App.apiBase}/images/${this.user.avatar}"></sl-avatar>
                    <input type="file" name="avatar" />
                  `: html`
                    <input type="file" name="avatar" />
                  `}
                </div>
                <sl-button type="primary" class="submit-btn" submit>Update Profile</sl-button>
              </sl-form>        
            </div>

            <!-- right side  -->
            <div class="avatar-wrapper">
                <img url="" alt="Profile pictuire">
            </div>
                    
          </div> <!-- end of profile body -->
        </div>
      </div>
    `   
  render(template, App.rootEl)  
  }
}

export default new EditProfileView()