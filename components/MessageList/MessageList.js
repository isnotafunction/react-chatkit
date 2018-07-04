import React from 'react'
import styled from 'styled-components'

import Message from './../Message/Message'

const StyledMessageList = styled.div`
border: 1px solid #313e54;
border-radius: 5px;
grid-column: 2 / span 2;
grid-row: 2 / 4;
`


export default class MessageList extends React.Component{
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