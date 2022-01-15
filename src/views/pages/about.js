import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class AboutView {
  init(){
    document.title = 'About Us'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="About" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>About</h1>
        <article>
        <p>Hello and welcome to ARENA EDUCATION, We are Ali, Mikayla, Lucas, Trevor and Ryan.. and we are Team Rose. This website is our team work for the DIG33 DigEx Design Studio unit at Curtin University Australia.</p>
        <p>ARENA EDUCATION website is based on a simulated and fictional design brief, as if it was affiliated with the Australian Renewable Energy Agency. It aims to educate young Australians about renewable energy in an easy-to-understand language, and in an interactive and playful manner.</p>
        <p>Have fun and keep exploring renewable energy.</p>
        </article>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new AboutView()