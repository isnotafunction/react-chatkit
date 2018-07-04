import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList/MessageList'
import SendMessage from './components/SendMessage/SendMessage'
import Rooms from './components/Rooms/Rooms'
import AddRoom from './components/AddRoom/AddRoom'

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