import React, { useEffect, useState } from 'react';
import {  FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
  import 'react-toastify/dist/ReactToastify.css';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	Input,
	ButtonSearch,
	 DropDownLi,
  StyledA,
  DropDownContent,
  SubA,
  StyledUl,
  ImgNav,
  Stylednav,
  Select,
  Option,
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import { BsSearch } from 'react-icons/bs';
import {getAuthUser, logout } from "../../JS/actions/authActions";
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
	const [show, setShow] = useState(false);
  const dispatch = useDispatch();
	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};
const loading = useSelector((state) => state.authReducer.isLoading);
const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userLogin = useSelector((state) => state.authReducer.user);
  useEffect(() => {
   dispatch(getAuthUser())
   }, [])

    if (loading) {
    return <h1> Loaading ......</h1>;
  }  
 
	return (
		<IconContext.Provider value={{ color: '#fff' }}>


			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
				Dipanini

					</NavLogo>
			
        
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
    <Select  name="ville">
                   <Option >Ville</Option>
                  <Option>Ariana</Option>
                  <Option>Béja</Option>
                    <Option>Ben Arous</Option>
                      <Option>Bizerte</Option>
                        <Option>Gabes</Option>
                          <Option>Gafsa</Option>
                            <Option>Jendouba</Option>
                              <Option>Kairouan</Option>
                                <Option>Kasserine</Option>
                                  <Option>Kebili</Option>
                                    <Option>La Manouba</Option>
                                      <Option>Le Kef</Option>
                                        <Option>Mahdia</Option>
                                          <Option>Médenine</Option>
                                            <Option>Monastir</Option>
                                              <Option>Nabeul</Option>
                                                <Option>Sfax</Option>
                                                  <Option>Sidi Bouzid</Option>
                                                    <Option>Siliana</Option>
                                                      <Option>Sousse</Option>
                                                        <Option>Tataouine</Option>
                                                          <Option>Tozeur</Option>
                                                            <Option>Tunis</Option>
                                                              <Option>Zaghouan</Option>
                </Select>
						<Input type="text" placeholder="Produit à chercher" />
						<ButtonSearch> <BsSearch style={{marginTop:-10}}/></ButtonSearch>


						{isAuth ?  <StyledUl show={show}>
						<ImgNav
              src={userLogin.pic}
              alt="avatar"/> 
       <DropDownLi>
<Stylednav>   
	
  <StyledA >{userLogin.name + " " + userLogin.lastname} </StyledA>
				
			</Stylednav>

              
                    <DropDownContent>
					
                        {" "}
                        <SubA onClick={() => { dispatch(getAuthUser()); history.push("/profil") }}>
                            My Profile 
                        </SubA>
                        <SubA onClick={() => { dispatch(logout()); history.push("/") }} >
                            Logout
                        </SubA>
                      
                    </DropDownContent>
                </DropDownLi>
                </StyledUl> : <NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						
					</NavMenu> }
					
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
