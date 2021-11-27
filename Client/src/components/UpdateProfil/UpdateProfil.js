import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Heading, TextWrapper } from '../../globalStyles'
import { getAuthUser, updateProfile } from '../../JS/actions/authActions';
import { FormButton, FormInput, FormInputRow, FormLabel, FormMessage, FormWrapper } from '../Form/FormStyles';
import { ImgUpdate, UpdateContent, UpdateForm, UpdateImg, UpdateSection, UpdateWrapper } from './UpdateStyles'

const UpdateProfil = () => {
     const history = useHistory();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmpassword] = useState("");
   const [pic, setPic] = useState();
 
  const [picMessage, setPicMessage] = useState(null);
 
  
 const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.authReducer.user);

useEffect(() => {
   dispatch(getAuthUser())
   }, [])

 useEffect(() => {
    if (!userLogin) {
      history.push("/");
    } else {
      setName(userLogin.name);
      setLastname(userLogin.lastname);
      setEmail(userLogin.email);
      setPassword(userLogin.password);
      setPic(userLogin.pic);

     
    }
  }, [history, userLogin]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({name,lastname,email,password,pic},history));
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
  setConfirmpassword("");
  setPic("");
     history.push("/profil")
  };


const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "locationnibrasse");
      data.append("cloud_name", "locationnibrasse");
      fetch(" https://api.cloudinary.com/v1_1/locationnibrasse/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };



   const formupdate = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
      {
      label: "Lastname",
      value: lastname,
      onChange: (e) => setLastname(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPassword,
      onChange: (e) => setConfirmpassword(e.target.value),
      type: "password",
    },
  ];

    return (
      <UpdateSection id="pricing">
     <UpdateWrapper>
        <Heading> Edit Profil</Heading>
          <UpdateContent>
          
          <UpdateForm>
           <FormWrapper  onSubmit={handleSubmit}>
              {formupdate.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
  <FormInputRow >
  
        {picMessage && (
            
              <FormMessage
                // variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {picMessage}
              </FormMessage>
            
          )}
                  <FormLabel>Profile Picture</FormLabel>
                  <FormInput
                   accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
             name="file"
              type="file"
              
                  />
                      

                </FormInputRow>


      
         
              <FormButton type="submit">Edit</FormButton>
            </FormWrapper>
         
          </UpdateForm>


           <UpdateImg>
           <TextWrapper
            mb="1.4rem"
            weight="600"
            size="30px"
            color="orange"
            align="center"
          >
          Change Profile Picture
          </TextWrapper>

<ImgUpdate src= {pic} alt="" />

          </UpdateImg>
          </UpdateContent>
     </UpdateWrapper>
     </UpdateSection>
    )

}

export default UpdateProfil
