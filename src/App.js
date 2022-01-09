// Author:        Team Rose
// Filename:      App.js
// Created:       
// Description:   Root js application instance

import Router from './Router'
import Auth from './Auth'
import Toast from './Toast'

class App {
  constructor(){
    this.name = "ARENA"
    this.version = "1.0.0"
    this.apiBase = 'https://arenaapi.herokuapp.com'
    // this.apiBase = 'http://localhost:3000'
    this.rootEl = document.getElementById("root")
    this.version = "1.0.0"
  }
  
  init() { 
        
    // Toast init
    Toast.init()   
    
    // Authentication check    
    Auth.check(() => {
      // authenticated! init Router
      Router.init()
    })    
  }
}

export default new App()