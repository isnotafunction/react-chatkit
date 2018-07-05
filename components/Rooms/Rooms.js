import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
 color: #fff;
 text-decoration: none;
`
const StyledLi = styled.li`
 list-style: none;
`


const Rooms = ({rooms, subscribeToRoom}) => {
  return (
   <ul>
     <h4>rooms: </h4>
     {rooms.map((room, i) => {
      return(
       <StyledLi key={`index${i}`}>
         <StyledLink 
           href="#" 
           onClick={() => subscribeToRoom(room.id)}>#{room.name}
         </StyledLink>
       </StyledLi>
      ) 
     })}
   </ul>
  )
}

export default Rooms