import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class EngageView {
  init(){
    document.title = 'Engage'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Engage" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Engage</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new EngageView()