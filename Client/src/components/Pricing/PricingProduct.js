// import React, { useEffect} from "react";
// import { Button, Heading, TextWrapper } from "../../globalStyles";
// import { IconContext } from "react-icons/lib";
// import {  Link, useHistory } from "react-router-dom";
// import {
//   PricingSection,
//   PricingWrapper,
//   PricingContainer,
//   PricingCardInfo,
//   PricingCardPlan,
//   PricingCardCost,
//   PricingCardFeatures,
//   PricingCardText,

//   PricingCard,
//   ProfileBanner,
//   PricingImg,
//   ImgProf,
//   LabelConv,
//   FigureCov,
//   FigCaption,
//   PictureProfile,
  
//   Addb,
//   Editp,
//   ImgAvatar,
  
//   DivcardProfil,Profilp,Profillabel,FlexcardProfil, CardProfilRigth, CardWarrap, CardProfilLeft
// } from "./PricingStyles";

// import {  AiFillFolderAdd, AiFillEdit } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { getAuthUser } from "../../JS/actions/authActions";
// import { getProduct } from "../../JS/actions/annonceActions";


// const PricingProduct = () => {
    
//        const dispatch = useDispatch();
// const history = useHistory()
//   //get user profile

//   const userLogin = useSelector((state) => state.authReducer.user);
//   const productUser = useSelector((state) => state.annonceReducer.product);
//   const loading = useSelector((state) => state.authReducer.isLoading);
  
//    useEffect(() => {
//    dispatch(getProduct())
//    }, [])

//     if (loading) {
//     return <h1> Loaading ......</h1>;
//   }  

 
 
//   return (
 
       

//   <div>


//    {productUser ?  <PricingContainer>
         
//             {  
              
//               productUser.map((item, i) => {
//                return(
//               <PricingCard key={i}>
//                 <PricingCardInfo>
//                   <PricingCardPlan>{item.name}</PricingCardPlan>
//                   <PricingCardCost>{item.tarifJ}</PricingCardCost>
//                   <PricingCardText>{item.tarifM}</PricingCardText>
//                   <PricingImg src={item.pic} />
//                   <PricingCardFeatures>
//                   </PricingCardFeatures>
//                   <Button>Get Started</Button>
//                 </PricingCardInfo>
//               </PricingCard>
//             )})}
//           </PricingContainer> : <h1>Hello</h1>
//          }
        
//     </div>
//   );
    
// }

// export default PricingProduct
