import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { sliderSettings } from '../../data/CarouselData';
  
  
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';
import {  getallproduct } from '../../JS/actions/annonceActions';
import { useDispatch, useSelector } from 'react-redux';
  import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
     toast.configure();
const Carousel = () => {
	 
	
	const dispatch = useDispatch();
	const [sliderRef, setSliderRef] = useState(null);

	const allProduct = useSelector((state) => state.annonceReducer.product);

useEffect(() => {
dispatch(getallproduct())
}, [])



 

let history = useHistory();
	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
				Les derniers annonce
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
{allProduct ? <ReviewSlider {...sliderSettings} ref={setSliderRef}>

				{allProduct.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.pic} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.name}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.message}
						</TextWrapper>
						
						<CardButton onClick={() => { history.push(`/details/${el._id}`) }}>Learn More</CardButton>

					</ImageWrapper>
				))}
			</ReviewSlider> :  <h1>Hello</h1> }
			
		</Section>
	);
};

export default Carousel;
