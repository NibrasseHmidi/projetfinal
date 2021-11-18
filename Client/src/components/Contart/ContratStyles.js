import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	/* color: #fff; */
	padding: 160px 0;
	/* background: ${({ inverse }) => (inverse ? '#101522' : '#fff')}; */
	background: #101522;
`;

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 50px;
	background: white;
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const Textarea = styled.textarea`
display: block;
	padding-left: 10px;
  
	outline: none;
	border-radius: 2px;
	height: 100px;
	width: 100%;
	border: none;
    margin-top: 20px;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`

export const SelectItem = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 20px;
`
export const Select= styled.select`
	padding-left: 10px;

	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 300px;
	border: none;
    margin-top: 20px;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`

export const Option= styled.option``

export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	/* color: #fff; */
	outline: none;
	width: 100%;
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
export const ImgSvg =styled.img`
position: absolute;
margin:-10px 290px;
	width: 1000px;
	height: 1000px;
	transform: scale(.6);


	
`
export const InputFile = styled.input`
margin: 30px 0 ;
padding-left: 10px;

	outline: none;
	border-radius: 5px;
	height: 40px;
	width: 300px;

   

`



export const ContratSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;
/*********/
export const ContratWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const ContratContainer=styled.div`
background-color: white;
width: 700px;
height: 700px;


`
export const H1Contrat=styled.h1`

text-align: center;
font-weight: 100;
margin:50px 150px;
padding: 10px;
  box-shadow: 5px 10px 18px #888888;

border: 1px solid black;
`
export const ButtonContart = styled.button`border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: orange;
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
				margin: 50px;
				
				`
export const PContart = styled.p`
margin:5px 20px;
padding: 10px;


`
export const ContartLocation=styled.div`
margin: 50px;
border: 5px double black;

`

