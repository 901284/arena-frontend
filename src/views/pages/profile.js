import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
        
    console.log("render called") 
    console.log(" current user is  ", Auth.currentUser.avatar)
    const template = (Auth.currentUser == null) ? html`
      <sl-spinner></sl-spinner>
    `:html`
      <va-app-header title="Profile" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      <div class="page-content">   

        <div class="profile-wrapper">

          <div class="profile-header">


            <h1>${Auth.currentUser.firstname + " " + Auth.currentUser.lastname }</h1>
            <a href="/"><h2><sl-icon-button name="x"></sl-icon-button></h2></a>

          </div>

          <div class="profile-body">


            <!-- left side -->
            <div class="profile-form">
              
                <table>

                  <tr>
                    <td><h4>Last Updated </h4></td>
                    <td><p>${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p></td>
                  </tr>
                  <tr>
                    <td><h4>Email</h4></td>
                    <td><p>${Auth.currentUser.email}</p></td>
                  </tr>
                  <tr>
                    <td><h4>Bio</h4></td>
                    <td><p>${Auth.currentUser.bio}</p></td>
                  </tr>

                </table>

                <sl-button @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
              
            </div>

            <!-- right side  -->
            <div class="avatar-wrapper">

            ${Auth.currentUser && Auth.currentUser.b64data ? html`
                  <img id='base64image'
                  src="data:image/${Auth.currentUser.filetype};base64, ${Auth.currentUser.b64data}" alt='unable to display base64 image'/> 
                      
                `:html`
                    <sl-avatar style="--size: 250px; margin-bottom: 1em;"></sl-avatar>
                `}

<!--                 
              ${Auth.currentUser && Auth.currentUser.avatar ? html`
                <sl-avatar style="--size: 250px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                `:html`
                <sl-avatar style="--size: 250px; margin-bottom: 1em;"></sl-avatar>
              `} -->
            </div>
                    
          </div> <!-- end of profile body -->
        </div>
      </div>
    `   
  render(template, App.rootEl)  
  }

}


export default new ProfileView()