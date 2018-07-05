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
      messages: [],
      joinableRooms: [],
      joinedRooms: []
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
       this.currentUser = currentUser
       this.getRooms()
       this.subscribeToRoom()
     }).catch(err => console.log('Error on connecting: ', err))
    }
  
  getRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    }).catch(err => console.log('error on joinableRooms: ', err))
  }  

  subscribeToRoom = () => {
      this.currentUser.subscribeToRoom({
        roomId: 10857405,
        hooks: {
           onNewMessage: message => {
            this.setState({messages: [...this.state.messages, message]})
           }
        }
      })
     }  
 

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text: text,
      roomId: 10857405
    })
  }

  render(){
    return (
      <React.Fragment>
        <Rooms rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages}/>
        <SendMessage sendMessage={this.sendMessage}/>
      </React.Fragment>
    )

  }
}