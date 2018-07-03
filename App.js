import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList/MessageList'
// import SendMessage from './SendMessage/SendMessage'
// import Rooms from './Rooms/Rooms'
// import AddRoom from './AddRoom/AddRoom'

import {instanceLocator, tokenUrl} from './config'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data: ''
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
              console.log('message.text ', message.text)
            }
         }
       })
     })
  }

  render(){
    return (
      <React.Fragment>
        {/* <Rooms/>
        <AddRoom/> */}
        <MessageList/>
        {/* <SendMessage/> */}
      </React.Fragment>
    )

  }
}