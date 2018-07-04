import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
border-radius: 5px;
background-color: #313e54;
height: 2rem;
border: none;
color: #fff;
width: 100%;
`

const StyledForm = styled.form`
display: block;
grid-column: 2 / span 2;
grid-row: 4 / 5;
`

export default class SendMessage extends React.Component{
 constructor(props){
   super(props)
   this.state = {
     input: ''
   }
 }
  
 handleChange = e => {
  this.setState({
    input: e.target.value
  });
};

handleSubmit = e => {
  e.preventDefault()
  this.props.sendMessage(this.state.input)
  this.setState({
    input: ""
  })
}

 
 render(){
   return(
    <StyledForm onSubmit={this.handleSubmit}>
    <StyledInput 
    type="text"
    onChange={this.handleChange} 
    value={this.state.input}
    placeholder="type your message and hit ENTER" 
    />
    </StyledForm>
   )
 }

}