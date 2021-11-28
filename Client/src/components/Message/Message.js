import React from 'react'
import styled from 'styled-components';
import { MessageBottom, MessageImg, MessageTop,  } from './MessageStyles';
import { format } from 'timeago.js';
const Message = ({message,own}) => {
    const MessageWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;

    align-items: ${props => (own ? `flex-end` : `flex-start`)};


`
const MessageText = styled.p`

padding: 10px;
border-radius: 20px;
background-color:${props => (own ? `orange` : `gray`)};
color:${props => (own ? `white` : `black`)}; ;
max-width: 300px;

`
    return (
        <MessageWrapper className="own">
            <MessageTop>
            <MessageImg src="https://media-exp1.licdn.com/dms/image/C4D03AQEKoZVzmv4Y3g/profile-displayphoto-shrink_200_200/0/1613330015847?e=1639612800&v=beta&t=SpCtcYfvYEmBQ_xx2e-mZ9xWvuM9KYl1rvHYrwOsB4s" alt="" />

            <MessageText>{message.text}</MessageText>
            
            </MessageTop>
             <MessageBottom >{format(message.createdAt)}</MessageBottom>
        </MessageWrapper>
    )
}

export default Message
