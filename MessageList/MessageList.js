import React from 'react'

const dummyData = [
  {
    sender: 'ivi',
    text:'hi, how are you?'
  },
  {
    sender: 'iva',
    text:'Great, how are you, ivi!'
  },
  {
    sender: 'ivi',
    text:'awesome, thanks!'
  }
]

export default class MessageList extends React.Component{
 render(){
   return (
     <div>
       {dummyData.map((message, i) => {
         return(
           <div key={`index${i}`}> {message.text} </div>
         )
       })}
     </div>
   )
 }
}