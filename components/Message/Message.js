import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin:5px;
padding: 5px;
border-radius: 10px;
background-color: #5d6b82;
width: 90%;
`
const StyledUsername = styled.div`
color: #ccf96b;
opacity: 0.8;
font-size: 12px;
`
const Message = ({username, text}) => {
    return (
      <StyledContainer>
           <StyledUsername> {username} </StyledUsername>
           <div> {text} </div>
      </StyledContainer>
    )
  }

export default Message