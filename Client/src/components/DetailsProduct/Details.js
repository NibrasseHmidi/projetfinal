import  './Details.css';
import { IconContext } from "react-icons/lib";

import {
   PricingSection, PricingWrapper, 
} from './DetailsStyles';

import ReactStars from "react-rating-stars-component";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../../JS/actions/annonceActions';
const Details = () => {
  const { id } = useParams();

console.log(typeof(id));

 const ProductDetail = useSelector((state) => state.annonceReducer.product);



 const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);



  const ratingChanged = (newRating) => {
  console.log(newRating);
};

  
let history = useHistory();
    return (

        <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
     <PricingWrapper>




     <div className = "card-wrapper">
  <div className = "card">
      <div className = "product-imgs">
      <div className = "img-display">
        <div className = "img-showcase">
          <img src = {`/${ProductDetail.pic}`} alt = ""/>
        </div>
      </div>
      <div className = "img-select">
        <div className = "img-item">
         
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = ""/>
         
        </div>
        <div className = "img-item">
         
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = ""/>
          
        </div>
        <div className= "img-item">
          
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = ""/>
        
        </div>
        <div className = "img-item">
         
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = ""/>
         
        </div>
      </div>
    </div>
    <div className = "product-content">
      <h2 className = "product-title">{ProductDetail.name}</h2>
     
      <div className = "product-rating">
       <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        <span>4.7(21)</span>
      </div>

      <div className = "product-price">
       <p className = "new-price">Tarif par jour: <span>{ProductDetail.tarifJ} DT </span></p>
          <p className = "new-price">Tarif par semaine:<span>{ProductDetail.tarifS} DT </span></p>
            <p className = "new-price">Tarif par mois <span>{ProductDetail.tarifM} DT</span></p>
        <p className = "last-price">Cotion: <span>{ProductDetail.caution} DT</span></p>
        
      </div>

      <div className = "product-detail">
        <h2>about this item: </h2>
        <p>{ProductDetail.message}</p>
        <div className="avatar"> 
         <ul>
          <li>Name: <span>Nibrasse</span></li>
          <li>Ville: <span>{ProductDetail.ville}</span></li>
          <li>Address: <span>{ProductDetail.address}</span></li>
          <li>Numéro: <span>{ProductDetail.numero}</span></li>
         
        </ul>
        
        <img src={`/${ProductDetail.pic}`} alt="" /></div>
     
       
      </div>

      <div className = "purchase-info">
       
        <button type = "button" className = "btn" onClick={() => { history.push("/contart") }}>Remplir la contart de location </button>
        <button type = "button" className = "btn" onClick={() => { history.push("/messanger") }}>Contact</button>
      </div>

     
    </div>
    </div>
    </div>

    
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>

    )
}

export default Details
