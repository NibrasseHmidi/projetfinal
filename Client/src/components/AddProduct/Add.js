import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  Textarea,
  FormMessage,
  FormButton,
  FormTitle,
  ImgSvg,
  Select,
  Option,
  SelectItem,
  InputFile,
} from "./AddStyles";
import { addproduct, getProduct } from "../../JS/actions/annonceActions";
import { Container } from "../../globalStyles";
import validateForm from "./validateAdd";
import { addSvg } from "../../data/FormData";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Add = () => {
   const history = useHistory();
const [name, setName] = useState('')
const [numero, setNumero] = useState('')
const [address, setAddress] = useState('')
const [tarifJ, setTarifJ] = useState('')
const [tarifS, setTarifS] = useState('')
const [tarifM,setTarifM] = useState('')
const [caution, setCaution] = useState('') 
const [ville, setVille] = useState('') 
const [category, setCategory] = useState('') 
const [message, setMessage] = useState('') 
const [pic, setPic] = useState('') 

  


  const AddData = [
    {
      label: "Name de product",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },

    {
      label: "Numéro du Téléphone",
      value: numero,
      onChange: (e) => setNumero(e.target.value),
      type: "number",
    },
    {
      label: "Address",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      type: "text",
    },
    {
      label: "Tarif par Jour",
      value: tarifJ,
      onChange: (e) => setTarifJ(e.target.value),
      type: "number",
    },
    {
      label: "Tarif par Semaine",
      value: tarifS,
      onChange: (e) => setTarifS(e.target.value),
      type: "number",
    },
    {
      label: "Tarif par Moin",
      value: tarifM,
      onChange: (e) => setTarifM(e.target.value),
      type: "number",
    },
    {
      label: "Caution",
      value: caution,
      onChange: (e) => setCaution(e.target.value),
      type: "number",
    },
  ];
const dispatch = useDispatch()
const handlechange = (e) => {
  setPic(e.target.files[0])
}

const handleSubmit = (e) =>{
  e.preventDefault()
  const formData = new FormData ()
    formData.append('name', name);
    formData.append('numero',numero);
    formData.append('address',address)
    formData.append('tarifJ',tarifJ)
    formData.append('tarifS',tarifS)
    formData.append('tarifM',tarifM)
    formData.append('caution',caution)
    formData.append('ville',ville)
    formData.append('category',category)
    formData.append('message',message)
    formData.append('pic',pic) 
    dispatch(addproduct(formData,history))
    history.push("/profil")

  
}


  return (
    <FormSection>
      <ImgSvg src={addSvg.img} alt="" />
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Ajouter un annonce</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {AddData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>

                  <FormInput
                    type={el.type}
                    placeholder={`Entez Votre ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <SelectItem>
                <Select value={ville} onChange={(e) => setVille(e.target.value)} name="ville">
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
                <Select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
                  <Option >Tous les Catégories</Option>
                  <Option>Véhicules</Option>
                   <Option>pour la maison et jardin</Option>
                    <Option>Emploi et Services</Option>
                     <Option>Entreprises</Option>
                      <Option>Informatique et Multimedia</Option>
                       <Option>Emploi et Services</Option>
                       <Option>Entreprises</Option>
                       <Option>Habillement et Bien Etre</Option>
                       <Option>Loisirs</Option>
                       <Option>AUtres</Option>
                </Select>
              </SelectItem>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Entez Votre Description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                {" "}
              </Textarea>

              <InputFile accept="image/*" multiple
             
            onChange={handlechange}
              type="file" 
              />

              <FormButton type="submit" >Ajouter</FormButton>
           
            </FormWrapper>
          
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Add;
