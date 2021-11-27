import styled from 'styled-components';

export const EditSection = styled.div`
		padding: 160px ;
	
	
	background: #101522;
`;
export const EditWrapper = styled.div`
@media screen and (max-width: 960px) {
		margin: 0 30px;
		
	}
`;
export const UpdateContent = styled.div`
margin-top: 80px;
height: 100% ;
display: flex;`

export const UpdateForm = styled.div`
flex:5.5;
`
export const UpdateImg = styled.div`
flex:3.5;
`
export const ImgUpdate = styled.img`
margin-top: 50px;
width: 350px;
height: 350px;
border-radius: 50%;

`

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	/* color: #fff; */
	outline: none;
	width: 50%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: black;
	}
`;

export const SelectItem = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 20px;
`
export const Select= styled.select`
	

	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 150px;
	border: none;
    margin-top: 20px;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`

export const Textarea = styled.textarea`
display: block;

  
	outline: none;
	border-radius: 2px;
	height: 100px;
	width: 50%;
	border: none;
    margin-top: 20px;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`