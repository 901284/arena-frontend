// Author:        Team Rose
// Filename:      App.js
// Created:       December 2021
// Description:   Root js application instance

import Router from './Router'
import Auth from './Auth'
import Toast from './Toast'
import ChatView from './views/pages/chat'

class App {
  constructor(){
    this.name = "ARENA"
    this.version = "1.1"
    this.apiBase = 'https://arenaapi-v2.herokuapp.com'
    // this.apiBase = 'http://localhost:3000'
    this.rootEl = document.getElementById("root")    
    this.chatEl = document.getElementById("chat")
  }
  
  init() { 
        
    // Toast init
    Toast.init()   
    
    // Authentication check    
    Auth.check(() => {
      // authenticated! init Router
      Router.init()
      ChatView.init()
    })    
  }
}

export default new App()