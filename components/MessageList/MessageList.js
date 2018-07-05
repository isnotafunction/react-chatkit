import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Message from './../Message/Message'

const StyledMessageList = styled.div`
border: 1px solid #313e54;
border-radius: 5px;
grid-column: 2 / span 2;
grid-row: 2 / 4;
overflow: scroll;
max-height: 100%;
`

export default class MessageList extends React.Component{
  
  getSnapshotBeforeUpdate(){
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate(){
    if(this.shouldScrollToBottom){
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

 render(){
   return (
     <StyledMessageList>
       {this.props.messages.map((message, i) => {
         return(
           <Message key={`index${i}`} username={message.senderId} text={message.text}/>
         )
       })}
     </StyledMessageList>
   )
 }
}
