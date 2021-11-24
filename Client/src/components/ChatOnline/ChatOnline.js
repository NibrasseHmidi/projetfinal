import React from 'react'
import { ChatOnlineBadge, ChatOnlineContent, ChatOnlineFriend, ChatOnlineImgContainer, ChatOnlineName, ImgChat } from './ChatOnlineStyles';
const ChatOnline = () => {
    return (
        <ChatOnlineContent>
            <ChatOnlineFriend>
             <ChatOnlineImgContainer>
            <ImgChat src="https://media-exp1.licdn.com/dms/image/C4D03AQEKoZVzmv4Y3g/profile-displayphoto-shrink_200_200/0/1613330015847?e=1639612800&v=beta&t=SpCtcYfvYEmBQ_xx2e-mZ9xWvuM9KYl1rvHYrwOsB4s"alt="" />

            <ChatOnlineBadge></ChatOnlineBadge>
        </ChatOnlineImgContainer>

        <ChatOnlineName> joen doen</ChatOnlineName>
        </ChatOnlineFriend>
        </ChatOnlineContent>
    )
}

export default ChatOnline
