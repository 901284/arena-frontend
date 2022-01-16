import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">


        <!-- page1  -->
        <div class='home-section'>

      
          <h1 class='anim-in'>Section 1</h1>

        </div>  

        <!-- page2  -->
        <div class='home-section'>
          <h1 class='anim-in'>Section 2.</h1>
        </div>

        <!-- page3  -->
        <div class='home-section'>
          <h1 class='anim-in'>Section 3</h1>

        </div>




      </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()