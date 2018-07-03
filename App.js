import React from 'react'

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

      </React.Fragment>
    )

  }
}