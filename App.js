import React from 'react'
import MessageList from './MessageList/MessageList'
import SendMessage from './SendMessage/SendMessage'
import Rooms from './Rooms/Rooms'
import AddRoom from './AddRoom/AddRoom'


export default class App extends React.Component{
  state = {
   data: ''
  }

  async componentDidMount(){
   const data = await fetch()
   this.setState({data:data})
  }

  render(){
    return (
      <React.Fragment>
        <Rooms/>
        <AddRoom/>
        <MessageList/>
        <SendMessage/>
      </React.Fragment>
    )

  }
}