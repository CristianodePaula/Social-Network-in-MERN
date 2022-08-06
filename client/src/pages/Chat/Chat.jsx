import React, { useRef, useState } from "react"
import ChatBox from "../../components/Chat/ChatBox/ChatBox"
import Conversation from "../../components/Chat/Coversation/Conversation"
import "./Chat.css";
import { useEffect } from "react"
import { userChats } from "../../redux/api/ChatRequests"
import { useSelector } from "react-redux"
import { io } from "socket.io-client"
import styled from 'styled-components'
import Topbar from "../../components/Bars/Topbar/Topbar"

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 22% auto;
`
export const LeftSideChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--cardColor);
  border-radius: 1rem;
  padding: 1rem;
  height: auto;
  min-height: 80vh;
  overflow: scroll;
`
export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
` 
export const RightSideChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Chat = () => {
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

  return (
    <>
    <Topbar />
    <Container>
      <LeftSideChat>
        <ChatContainer>
          <h2>Amigos</h2>
          <ChatList>
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </ChatList>
        </ChatContainer>
      </LeftSideChat>
      <RightSideChat>
        <div style={{ width: "10rem", alignSelf: "flex-end" }}>
       
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </RightSideChat>
    </Container>
    </>
  )
}

export default Chat