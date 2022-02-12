import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";


class ReferencesView {
  
  init(){      
    document.title = "References"  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
        
  } 


  setListeners(){
    // init any evenet listeners for click, swipe, key press etc.
        
  }

  render(){
    const template = html`
      <va-app-header title="References" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content references">
        <h1 class='anim-in'>References</h1>

        <div class='table-wrapper'>
          <table>
            <tr>
              <th>#</th>
              <th>Source</th>
              <th>Link</th>
              <th>Use case</th>
            </tr>
            <tr>
              <td>1</td>
              <td>greensock.com</td>
              <td><a href='https://greensock.com/docs/v3/GSAP/gsap.timeline()'>https://greensock.com/docs/v3/GSAP/gsap.timeline()</a></td>
              <td>Page element animations</td>
            </tr>
            <tr>
              <td>2</td>
              <td>JS vanilla framework</td>
              <td>Curtin Uni, UX3 / DIG31 2021</td>
              <td>Used as a fewference point to build on for the basic API backend/frontend structure</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shoelace web components</td>
              <td><a href='https://shoelace.style/'>https://shoelace.style/</a></td>
              <td>Buttons and various components.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Google fonts CDN</td>
              <td><a href='https://fonts.google.com/'>https://fonts.google.com/</a></td>
              <td>Headings and body fonts</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Asana.com</td>
              <td><a href='https://app.asana.com'>https://app.asana.com</a></td>
              <td>Collabotation and project management</td>
            </tr>
            
          </table> 
        </div>
      </div>
      <app-footer></app-footer>

    `
    render(template, App.rootEl)
  }

}

export default new ReferencesView()