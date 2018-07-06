# React chat app with Pusher's Chatkit

Learning to build a chat app with React and Pusher's ChatKit, following
[Per Borgen's Scrimba course](https://scrimba.com/playlist/pbNpTv)

As a user:
- I can join a particular room and see messages only from that chat room
- I can see which room I joined
- I can create a new chat room
- I can send a message within a room
- When there is a new message the message list scrolls down automatically if I am near the bottom of the page (not reading older messages)

Notes:
- Since 'componentWillUpdate' is categorised as 'unsafe' in 16.3 release of React, I used 'getSnapshotBeforeUpdate' instead
- I used arrow functions so I didn't have to bind 'this'
- For styling I used styled components and css grid