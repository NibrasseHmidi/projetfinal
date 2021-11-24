import styled from "styled-components";

export const ChatOnlineContent = styled.div`` 
export const ChatOnlineFriend = styled.div`
display: flex;
align-items: center;
font-weight: 500;
cursor: pointer;
margin-top: 10px;
` 
export const ChatOnlineImgContainer = styled.div`
position: relative;

`
export const ImgChat = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
border: 1px solid white;
margin-right: 15px;

`
export const ChatOnlineBadge = styled.div`
position: absolute;
width: 10px;
height: 10px;
border-radius: 50px;
background-color: limegreen;
margin:0 15px;
top: 0;
right: 0;
`
export const ChatOnlineName = styled.span`
color: white;
`