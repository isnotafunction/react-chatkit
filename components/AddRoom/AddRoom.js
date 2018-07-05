import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
grid-column: 1 / span 1;
grid-row: 4 / 5;
display:flex;
justify-content:center;
`
const StyledInput = styled.input`
text-indent: 10px;
background-color: #313e54;
height: 2rem;
width: 70%;
border: none;
color: #fff;
border-radius: 5px;
&:focus{
  outline:none;
  box-shadow: 0 0 10px #fff;
}
`

const StyledButton = styled.button`
border-radius: 30%;
border: 1px solid #fff;
background-color: #5d6b82;
height: 2rem;
width: 2rem;
color: #fff;
&:hover{
  box-shadow: 0 0 5px #fff;
}
&:active{
  outline:none;
  box-shadow: 0 0 10px #fff;
  transform: scale(1.1)
}
`
export default class AddRoom extends React.Component{
  constructor(){
    super()
    this.state = {
      roomName: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      roomName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRoom(this.state.roomName)
    this.setState({
      roomName : ''
    })
  }

 render(){
   return(
    <StyledForm onSubmit={this.handleSubmit}>
      <StyledInput 
       value={this.state.roomName}
       onChange={this.handleChange}
       type="text" 
       placeholder="new room"
       required/>
      <StyledButton type="submit"> + </StyledButton>
    </StyledForm>
   )
 }
}