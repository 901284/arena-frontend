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
    this.avatar = null
    this.render() 

    this.getUser().then(()=> {
      // this.getAvatar(this.user.fileid)
      this.render() 
    })
    
    Utils.pageIntroAnim()
   
  }

  async getUser(){
    try {
      this.user = await UserAPI.getUser(Auth.currentUser.email)     
      // console.log("the user: " , this.user) 
       this.render()
    }catch(err){
      console.log(err)
      Toast.show(err, 'error')
    }

  }

  async getAvatar(fileid){

    if (!fileid) {
      console.log("no fileid. unable to fetch the avatar image")
      return
    }
    try {
      this.avatar = await UserAPI.getAvatar(fileid)

      if (!this.avatar) {
        console.log("got no avatar")
        return
      } else {
        console.log("got avatar")
        // console.log("avatar base64Data: ",  this.user.b64Data)      
        
        // this.render()
        var innerHtml = (!this.user.b64data.length < 10) ? 
          `no avatar`: 
          `<p>base64avatar</p>
          <img style='display:block; width:100px;height:100px;' id='base64image'
          src="data:image/${this.user.filetype};base64, ${this.user.b64data}" alt='unable to display base64 image'/> `
        // console.log("inner html: " ,innerHtml)
        document.querySelector('.avatar-wrapper').innerHTML = innerHtml
      }

    } catch (err){     
      console.log("error getting avatar from api")
    }
  }

  async updateProfileSubmitHandler(e){
    console.log("updateProfileSubmitHandler called") 
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')

    const formData = e.detail.formData
    
    // check there is a file 
    let fileInput = document.querySelector('#fileInput');
    let f
    if (fileInput.files) console.log(" have file: ", fileInput.files.avatar)
    if (fileInput.files[0]) {
      //get the fle from the element
      f = fileInput.files[0]

   
      // get file extension (.jpg, .png etc)
      let fileExt = f.name.split('.').pop()
      
      // normalise the filetype to store in the db.
      let fileType;
      fileExt = fileExt.toLowerCase();
      switch (fileExt){
          case "jpg": 
          case "jpeg":
              fileType = 'jpeg';
              break;
          case "png":
              fileType = fileExt;
              break;
          case "gif":
              fileType = fileExt;
              break;
          case "bmp":
              fileType = fileExt;
              break;
      }

      // make the reader read the binary data
      let reader = new FileReader();
      reader.onload = function (e) {
        // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
        var binData = e.target.result
        let buff = Buffer.from(binData, "binary")
        let b64Data = buff.toString("base64")
                 
        // console.log("type is:" , fileType)
        // console.log("fiel as string: " , f.toString())
        // console.log("b64 output: "); 
        // console.log(b64Data); 

        let data = {
          firstname: formData.get('firstname'),
          lastname: formData.get('lastname'),
          email: formData.get('email'),
          bio: formData.get('bio'),
          b64data: b64Data,
          filetype: fileType,
          updatedAt: new Date().toISOString()
        }

        const updatedUser = UserAPI.updateUser(Auth.currentUser.email, data, 'json')   
        this.user = updatedUser     
        Auth.currentUser = updatedUser
                        
      }  
      reader.onerror = function(e) {
        // error occurred
        console.log('Error : ' + e.type);
      };

      // console.log("reading as data url"); 

      // reader.readAsDataURL();
      reader.readAsBinaryString(f)
      submitBtn.removeAttribute('loading')
      this.render()
      Toast.show('profile updated')
    } else {

    const formData = e.detail.formData
    formData.append("updatedAt", new Date().toISOString())
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')
    try {
      // console.log("calling UserAPI.updateUser(Auth.currentUser.email, formData)") 
      const updatedUser = await UserAPI.updateUser(Auth.currentUser.email, formData)    
      // console.log("got updated user : ",updatedUser)   
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
            <a href="javascript:history.back()"><h2><sl-icon-button name="x"></sl-icon-button></h2></a>
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
                  ${(this.user.b64data) ? html`
                    <img class='base64image-thumbnail'
                    src="data:image/${this.user.filetype};base64, ${this.user.b64data}" alt='unable to display base64 image'/> 
                  
                    <input type="file" name="avatar" id='fileInput'/>
                  `: html`
                    <input type="file" name="avatar"  id='fileInput' />
                  `}
                </div>
                <sl-button type="primary" class="submit-btn" submit>Update Profile</sl-button>
              </sl-form>        
            </div>

            <!-- right side  -->
            <div class="avatar-wrapper">
          
              ${Auth.currentUser && Auth.currentUser.b64data ? html`
                  <img id='base64image'
                  src="data:image/${this.user.filetype};base64, ${this.user.b64data}" alt='unable to display base64 image'/> 
                      
                `:html`
                    <sl-avatar style="--size: 250px; margin-bottom: 1em;"></sl-avatar>
                `}
            </div>
                    
          </div> <!-- end of profile body -->
        </div>
      </div>
    `   
  render(template, App.rootEl)  
  }
}

export default new EditProfileView()