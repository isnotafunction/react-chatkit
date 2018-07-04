import React from 'react'
import Message from './../Message/Message'

export default class MessageList extends React.Component{
 render(){
   return (
     <div>
       {this.props.messages.map((message, i) => {
         return(
           <Message key={`index${i}`} username={message.senderId} text={message.text}/>
         )
       })}
     </div>
   )
 }
}