
import styled from 'styled-components';
export const ConversationSection = styled.div`
	padding: 160px 0;
	
	
	background: #101522;
`;
/*********/
export const ConversationWrapper = styled.div`

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		
	}
`;

export const ConversationContent = styled.div`
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
margin-top: 20px;
&:hover{
background-color: gray;
}
`
export const ConversationImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`
export const ConversationName = styled.span`
font-weight: 500;
color: white;

`