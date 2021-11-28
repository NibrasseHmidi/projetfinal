import React, { useEffect, useRef, useState } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline';
import Conversation from '../Conversations/Conversation';
import Message from '../Message/Message';
import {  ButtonChat, ChatBox, ChatBoxBottom, ChatBoxTextarea, ChatBoxTop, ChatBoxWrapper, ChatMenu, ChatMenuInput, ChatMenuWrapper,  ChatOnlineMessanger, ChatOnlineWrapper, MeessangerContent, MessangerSection, MessangerWrapper, SpanChat } from './MessangerStyles';
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
import { detailsProduct } from '../../JS/actions/annonceActions';
import { useParams } from 'react-router-dom';
const Messanger = () => {
   const { id } = useParams();
 const dispatch = useDispatch();
//    const user = useSelector((state) => state.authReducer.user);
// console.log(user);
//      useEffect(() => {
//    dispatch(getAuthUser())
//    }, [])

const user = useSelector((state) => state.annonceReducer.product.user);
console.log(user);

 

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

 const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const scrollRef = useRef()
   useEffect(() => {
    const getConversations = async() => {
      try {
         const res = await axios.get("/conversation/" + user?._id)
         console.log(res);
        setConversations(res.data)
      } catch (error) {
        console.log(error);
      }
     
    }
    getConversations()
   }, [user?._id])


  useEffect(() => {
    const getMessages = async () => {
      try {
         const res = await axios.get("/message/"+currentChat?._id)
         console.log(res);
         setMessages(res.data)
      } catch (error) {
        console.log(error);
      }
     
    }
    getMessages()
  }, [currentChat])
  console.log(messages);

const handleSubmit= async (e)=>{
e.preventDefault()
const message={
  sender:user._id,
  text:newMessage,
  conversationId: currentChat._id
}
try {
  const res = await axios.post("/message/newmsg",message);
  setMessages([...messages,res.data])
  setNewMessage("")
} catch (error) {
  console.log(error);
}
}


useEffect(() => {
 scrollRef.current?.scrollIntoView({behavior:"smooth"})
}, [messages])
    return (
    <MessangerSection id="pricing">
     <MessangerWrapper>
     <MeessangerContent>
       <ChatMenu>
       
       <ChatMenuWrapper>
     
       {conversations.map(c=>(
         <div onClick={()=>setCurrentChat(c)}><Conversation conversation={c} currentUser={user}/></div>

       ))}
       
       
       </ChatMenuWrapper>
       </ChatMenu>


        <ChatBox>
         
       <ChatBoxWrapper>
{
currentChat ?
<>
       <ChatBoxTop>

       {messages.map(m=>(

        <div ref={scrollRef}> <Message message={m} own={m.sender === user._id}/></div>
    
       ))}
  

       </ChatBoxTop>



       <ChatBoxBottom>
       
       <ChatBoxTextarea placeholder="ikteb 7aja" 
       onChange={(e)=>setNewMessage(e.target.value)}
       value={newMessage}
       ></ChatBoxTextarea>
       <ButtonChat onClick={handleSubmit}>send</ButtonChat>
       </ChatBoxBottom>
       </> : <SpanChat>Open a Conversation to start a chat</SpanChat>

}

       </ChatBoxWrapper>
        
        </ChatBox>
         <ChatOnlineMessanger>
          
       <ChatOnlineWrapper>
  <ChatOnline/>
       </ChatOnlineWrapper>
       
       </ChatOnlineMessanger>
         </MeessangerContent>
      </MessangerWrapper>
      </MessangerSection>
    )
}

export default Messanger
