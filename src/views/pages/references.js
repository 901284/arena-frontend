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
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </table> 
        </div>
      </div>
    `
    render(template, App.rootEl)
  }

}

export default new ReferencesView()