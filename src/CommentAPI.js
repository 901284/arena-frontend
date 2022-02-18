import App from './App'
import Auth from './Auth'
import Toast from './Toast'

class CommentAPI {
  
  async newComment(data){  

    const response = await fetch(`${App.apiBase}/comment`, {
      method: 'POST',      
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`},
      body: data
    })

    // if response not ok
    if(!response.ok){      
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // show error      
      Toast.show(`Problem posting the comment.  ${response.status}`)   
    }else {
      console.log("comment insertion ok")
    }
    console.log("new comment response: ", response)
    return response;
  }
    
 
  
  // get all comments
  async getComments(){
    const response= await fetch(`${App.apiBase}/comment`, {
      method: 'GET',
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`},
    })

    // if response is not OK
    if(!response.ok){ 
      // console log the error
      const err = response.json()
      if(err) console.log(err)
      
      throw new Error('Problem getting the comments')
    }
    
    // convert response payload into json - store as data
    const data = response.json()

    console.log("data: ", data)
    
    // return data
    return data
  }
}

export default new CommentAPI()