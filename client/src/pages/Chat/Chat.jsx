import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Topbar from '../../components/Topbar/Topbar'
import { userChats } from "../../api/ChatRequests"
import { useDispatch, useSelector } from "react-redux"
import { io } from "socket.io-client"
import Conversation from "../../components/Conversation/Conversation"
//import ChatBoxComponent from '../../components/ChatBox/ChatBox' // <ChatBoxComponent />
import "./ChatBox.css"

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
export const FriendsBox = styled.div`
  flex: 1;
  background: grey;
`
export const ChatBox = styled.div`
  flex: 4;
`
function Chat() {

  const dispatch = useDispatch();
  const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  /*
   // Connect to Socket.io
   useEffect(() => {
     socket.current = io("ws://localhost:8800");
     socket.current.emit("new-user-add", user._id);
     socket.current.on("get-users", (users) => {
       setOnlineUsers(users);
     });
   }, [user]);
  
 
   // Send Message to socket server
   useEffect(() => {
     if (sendMessage!==null) {
       socket.current.emit("send-message", sendMessage);}
   }, [sendMessage]);
 
 
   // Get the message from socket server
   useEffect(() => {
     socket.current.on("recieve-message", (data) => {
       console.log(data)
       setReceivedMessage(data);
     }
 
     );
   }, []);
 
   const checkOnlineStatus = (chat) => {
     const chatMember = chat.members.find((member) => member !== user._id);
     const online = onlineUsers.find((user) => user.userId === chatMember);
     return online ? true : false;
   };
 */

  return (
    <>
      <Topbar />
      <Container>
        <FriendsBox>
          <div className="Chat-list">
            {chats.map((chat) => (
              <Conversation
                data={chat}
                currentUser={user._id}
              />
            ))}
          </div>
        </FriendsBox>
        <ChatBox>
        </ChatBox>
      </Container>
    </>
  )
}

export default Chat


/*
<div
  onClick={() => {
  setCurrentChat(chat);
  }}
>
*/