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
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id) 
  return (
   <ul>
     <h4>rooms: </h4>
     {orderedRooms.map((room, i) => {
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