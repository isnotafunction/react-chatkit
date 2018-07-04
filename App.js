import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList/MessageList'
import SendMessage from './SendMessage/SendMessage'
import Rooms from './Rooms/Rooms'
import AddRoom from './AddRoom/AddRoom'

import {instanceLocator, tokenUrl} from './config'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      messages: []
     }
  }
  
  componentDidMount(){
   const chatManager = new Chatkit.ChatManager({
     instanceLocator,
     userId: 'ivi',
     tokenProvider : new Chatkit.TokenProvider({
       url: tokenUrl
     })
    })

     chatManager.connect()
     .then(currentUser => {
       currentUser.subscribeToRoom({
         roomId: 10857405,
         hooks: {
            onNewMessage: message => {
             this.setState({messages: [...this.state.messages, message]})
            }
         }
       })
     })
  }

  render(){
    return (
      <React.Fragment>
        <MessageList messages={this.state.messages}/>
      </React.Fragment>
    )

  }
}