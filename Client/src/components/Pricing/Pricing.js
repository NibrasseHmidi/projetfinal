import React, { useEffect} from "react";
import { Button, Heading, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import {  Link, useHistory } from "react-router-dom";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,

  PricingCard,
  ProfileBanner,
  PricingImg,
  ImgProf,
  LabelConv,
  FigureCov,
  FigCaption,
  PictureProfile,
  
  Addb,
  Editp,
  ImgAvatar,
  
  DivcardProfil,Profilp,Profillabel,FlexcardProfil, CardProfilRigth, CardWarrap, CardProfilLeft
} from "./PricingStyles";

import {  AiFillFolderAdd, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../JS/actions/authActions";
import { getProduct } from "../../JS/actions/annonceActions";

function Pricing() {
  const dispatch = useDispatch();
   let history = useHistory();
  //get user profile

  const userLogin = useSelector((state) => state.authReducer.user);
  
  const productUser = useSelector((state) => state.annonceReducer.product);
  const loading = useSelector((state) => state.authReducer.isLoading);
  
  
  useEffect(() => {
   dispatch(getAuthUser())
   }, [])

   useEffect(() => {
   dispatch(getProduct())
   }, [])

    if (loading) {
    return <h1> Loaading ......</h1>;
  }  


 
  return (
 
       

    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
     <PricingWrapper>
          <Heading> Welcome {userLogin.name}</Heading>

          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
          >
            Create, maintain and store your data with Delta.
          </TextWrapper>

          <ProfileBanner>
            <ImgProf
              src="https://fbcouv.com/wp-content/uploads/2015/09/couverture-facebook-chat-poisson-repas.jpg"
              alt=""
            />
            <LabelConv>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none", cursor: "pointer" }}
              />
              <FigureCov>
                <FigCaption>
                  
                </FigCaption>
              </FigureCov>
            </LabelConv>
          </ProfileBanner>
          <PictureProfile>
          <Link to="/updateprofil">
            <Editp>Edit Profile <AiFillEdit /></Editp>
            </Link>
            <Link to="/addproduct">
            <Addb>
              {" "}
              Add Product <AiFillFolderAdd />
            </Addb>
            </Link>
            
            <ImgAvatar
              src={userLogin.pic}
              alt="avatar"
            />

      <CardWarrap>
            <CardProfilLeft>
        
            <DivcardProfil>
                <FlexcardProfil>
            <Profillabel>Name:</Profillabel>
            <Profilp>{userLogin.name}</Profilp>
</FlexcardProfil>
         <FlexcardProfil>
            <Profillabel>LastName:</Profillabel>
            <Profilp>{userLogin.lastname}</Profilp>
</FlexcardProfil>
  <FlexcardProfil>
                <Profillabel>E-mail:</Profillabel>
            <Profilp>{userLogin.email}</Profilp>
            </FlexcardProfil>
            </DivcardProfil>
            
            </CardProfilLeft>
         
           <CardProfilRigth>
        
            <DivcardProfil>
                <FlexcardProfil>
            <Profillabel>Téléphone:</Profillabel>
            <Profilp>{userLogin.name}</Profilp>
</FlexcardProfil>
         <FlexcardProfil>
            <Profillabel>Address:</Profillabel>
            <Profilp>{userLogin.lastname}</Profilp>
</FlexcardProfil>
  <FlexcardProfil>
                <Profillabel>Ville:</Profillabel>
            <Profilp>{userLogin.email}</Profilp>
            </FlexcardProfil>
            </DivcardProfil>
            
            </CardProfilRigth>
         </CardWarrap>
   </PictureProfile>


   {productUser ?  <PricingContainer>
         
            {  
              
              productUser.map((item, i) => {
               return(
              <PricingCard key={i}>
                <PricingCardInfo>
                  <PricingCardPlan>{item.name}</PricingCardPlan>
                  <PricingCardCost>{item.tarifJ}</PricingCardCost>
                  <PricingCardText>{item.tarifM}</PricingCardText>
                  <PricingImg src={`/${item.pic}`} />
                  <PricingCardFeatures>
                  </PricingCardFeatures>
                 
                  <Button onClick={() => { history.push(`/edit/${item._id}`) }}>Edit Product</Button>
                 
                </PricingCardInfo>
              </PricingCard>
            )})}
          </PricingContainer> : <h1>Hello</h1>
         }
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
