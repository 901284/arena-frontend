import { LitElement, html, css } from '@polymer/lit-element'
import App from './../App'
import {anchorRoute, gotoRoute} from '../Router'


customElements.define('app-footer', class AppFooter extends LitElement {
  constructor(){
    super()    
  }

  init(){    
    this.render()       
  } 
  
  render(){    
    return html`
      
    <style>

      .app-footer {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          height: 7vh;
          color: black;
          display: flex;
          z-index: 9;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-grow: 1;
          padding: 1em;
          color: darkgrey;
          background-color: #55555511;
      }

      .app-footer a {
        color: grey;
      }
        

      .footer-container {
          width: fit-content;
          text-align: center;
          align-items: center;
          vertical-align: middle;
          margin-left: 1em;
          margin-right: 1em;

      }

      .footer-container img {
        height: 5vh;
        object-fit: contain;
        margin: 1em;
        
      }

      .arena-logo {
        height: 7vh;
        margin-bottom: 1em;

        transition: all 0.5s ease-out;
        
        transform: scale(1.5);
      }

      /* responsive to mobile ------------------- */
      @media all and (max-width: 768px){       

        /* hide the footer to save screen realestate */

       .app-footer  {
          display: none;
        }
            
      }

    </style>


    <footer class="app-footer">

      

      <div class="footer-container ">
        <img class='arena-logo' src="/images/footer-logo.png" alt="ARENA education logo"/>  
      </div>

      <div class="footer-container">
          <h3>ARENA EDUCATION 2022</h3>
      </div>

      <div class="footer-container">  
        <a href='#'><img src='/images/instagram-logo.png' alt="instagram icon clickable link"/></a>
        <a href='#'><img src='/images/youtube-logo.png' alt="youtube icon clickable link"/></a>    

      </div>

      <div class="footer-container">
        <a href='#'><h3>PRIVACY POLICY</h3></a>
      </div> 
      
    </footer>
    `
  }
})

