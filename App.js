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
      roomId: null,
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

  subscribeToRoom = (roomId) => {
      this.setState({messages: []})
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
           onNewMessage: message => {
            this.setState({messages: [...this.state.messages, message]})
           }
        }
      }).then(room => {
        this.setState({
          roomId : room.id
        })
        this.getRooms()
      })
      .catch(err=> console.log('error on subscribing to a room: ', err))
     }  
 

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text: text,
      roomId: this.state.roomId
    })
  }

  render(){
    return (
      <React.Fragment>
        <Rooms
         subscribeToRoom={this.subscribeToRoom}
         rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages}/>
        <SendMessage sendMessage={this.sendMessage}/>
      </React.Fragment>
    )

  }
}