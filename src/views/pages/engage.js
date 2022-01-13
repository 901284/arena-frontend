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
        <img src="images/astronautincloud.png" alt="Cartoon astronaut in cloud">
        <p>Are you keen on learning more about Renewable Energy and having a positive impact on the Earth's Environment?</p>
        <p>This official energy website has fun educational resources for students from year one to year twelve:<br><a href="https://www.energy.gov/diversity/student-educational-resources-stem">https://www.energy.gov/diversity/student-educational-resources-stem</a></p>
        <p>And if you are eager to get more actively engaged, you may want to have a look at The SDG7 Youth Constituency website:<br><a href="https://www.unmgcy.org/sustainable-energy">https://www.unmgcy.org/sustainable-energy</a></p>
        <!-- dont know what else to add to this yet? -->
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new EngageView()