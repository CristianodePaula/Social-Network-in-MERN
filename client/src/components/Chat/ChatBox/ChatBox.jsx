import React, { useEffect, useState } from "react";
import {
  Container,
  BoxUser,
  BoxShare,
  BoxText,
  BoxQuote,
  BoxInputShare,
  Img,
  Span,
  MessageText,
  SendImg,
  Send
} from './ChatBoxStyle'
import { useRef } from "react";
import { addMessage, getMessages } from "../../../redux/api/MessageRequests";
import { getUser } from "../../../redux/api/UserRequests";
import "./ChatBox.css";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'

export default function ChatBox({ chat, currentUser, setSendMessage, receivedMessage }) {

  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])


  const handleSend = async (e) => {
    e.preventDefault()
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    }
    const receiverId = chat.members.find((id) => id !== currentUser);

    setSendMessage({ ...message, receiverId })

    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    }
    catch
    {
      console.log("error")
    }
  }

  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage)
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }

  }, [receivedMessage])

  const scroll = useRef();
  const imageRef = useRef();

  return (
    <Container>
      {chat ? (
        <>
          <BoxUser>
            <Img
              src={
                userData?.profilePicture
                  ? process.env.REACT_APP_PUBLIC_FOLDER +
                  userData.profilePicture
                  : process.env.REACT_APP_PUBLIC_FOLDER +
                  "defaultProfile.png"
              }
              alt="Profile"
            />
            <Span>
              {userData?.firstname} {userData?.lastname}
            </Span>
          </BoxUser>
          <BoxText>
            {messages.map((message) => (
              <>
                <BoxQuote
                  ref={scroll}
                  className={
                    message.senderId === currentUser
                      ? "message own"
                      : "message"
                  }>
                  <MessageText>{message.text}</MessageText>{" "}
                  <span>{format(message.createdAt)}</span>
                </BoxQuote>
              </>
            ))}
          </BoxText>
          <BoxShare>
            <BoxInputShare>
              <SendImg onClick={() => imageRef.current.click()}>+</SendImg>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <Send onClick={handleSend}>Enviar</Send>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </BoxInputShare>{" "}
          </BoxShare>
        </>
      ) : (
        <>
          <Span>Escolha um amigo para conversar</Span>
        </>
      )}
    </Container>
  )
}




/*
<BoxQuote
  ref={scroll}
  className={
    message.senderId === currentUser
      ? "message own"
      : "message"
  }
>
*/

