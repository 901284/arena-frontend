import App from './App'
import Auth from './Auth'
import Toast from './Toast'

class UserAPI {
  
  async updateUser(userEmail, userData, dataType = 'form'){
    // validate
    if(!userEmail || !userData) return
    let responseHeader
    // form data
    if(dataType == 'form'){
      // fetch response header normal (form data)
      responseHeader = {
        method: "PUT",        
        headers: { "Authorization": `Bearer ${localStorage.accessToken}`},
        body: userData
      }
      
    // json data
    }else if(dataType == 'json'){
      responseHeader = {
        method: "PUT",        
        headers: { "Authorization": `Bearer ${localStorage.accessToken}`, "Content-Type" : "application/json"},
        body: JSON.stringify(userData)
      }
    }
   
    // make fetch request to backend
    const response = await fetch(`${App.apiBase}/user/${userEmail}`, responseHeader)
    // console.log("got response")

    // if response not ok
    if(!response.ok){
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem updating user')
    }

    // convert response payload into json - store as data
    const data = await response.json()
    
    // return data
    return data
  }

  async getUser(userEmail){
    // validate
    if(!userEmail) throw new Error('Unable to get a user without referencing their email address')
    
    // fetch the json data
    const response  = await fetch(`${App.apiBase}/user/${userEmail}`, {
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`}
    })

    // console.log("response: ", response)

        // if response not ok
    if(!response.ok){ 
      // console log error
      const err = response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem getting user')
    }
    
    // convert response payload into json - store as data
    const data = response.json()

    // console.log("data: ", data)
    
    // return data
    return data
  }
}

export default new UserAPI()