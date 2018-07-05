import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
grid-column: 1 / 2;
grid-row: 2 / 4;
padding:0;
margin:0;
border: 1px solid #313e54; 
`
const StyledLink = styled.a`
 color: #fff;
 text-decoration: none;
 .active {
  opacity: 1;
 }
 .non-active{
   opacity:0.6;
 }
`
const StyledLi = styled.li`
 list-style: none;
`

const Rooms = ({rooms, subscribeToRoom, roomId}) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id) 
  return (
   <StyledUl>
     <h4>rooms: </h4>
     {orderedRooms.map((room, i) => {
      return(
       <StyledLi key={`index${i}`}>
         <StyledLink 
           href="#" 
           onClick={() => subscribeToRoom(room.id)}>
           <span className={room.id === roomId ? 'active' : 'non-active'}>#{room.name}</span>
         </StyledLink>
       </StyledLi>
      ) 
     })}
   </StyledUl>
  )
}

export default Rooms