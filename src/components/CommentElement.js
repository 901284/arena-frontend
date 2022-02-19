// Author:        Trevor Hall 
// Student:       number: 20522005
// Filename:      CommentElement.js
// Created:       13/2/2022
// Version:       1.1 
// Description:   custom html element for a user chat comment

import moment from 'moment'
import {html, render } from 'lit-html'


class CommentElement {

  init(){
    console.log('')
  }

  // code needed to build and output each comment element (chat bubble) 
  build(comment, isAuthor) {

    // console.log("checking if the user is an author:" , isAuthor)
    let authorClass = (isAuthor) ? 'author':'responder';
    let flexJustification = (isAuthor) ? 'flexend':'flexstart'

    const commentEl = `
    <div class = 'comment-bubble ${authorClass}'>
      <div class='comment-author-details'>
        <div>
          <h4 id='name${comment.name}'>${comment.name}</h4>
          <p class='small-date'>${moment(comment.CreatedOn).format('MMMM Do YYYY, @ h:mm a')}</p>
        </div>
      </div>  
      <div>   
        <p class='comment-body-text' id='comment${comment.email}' >${comment.content}</p>
      </div>
    </div>`
    
    return commentEl;
  }
}


export default new CommentElement()


