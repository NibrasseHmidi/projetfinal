import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Heading } from '../../globalStyles'
import { updateProduct } from '../../JS/actions/annonceActions';
import {  InputFile, Option,  Textarea } from '../AddProduct/AddStyles';
import { FormInput, FormInputRow, FormLabel, FormWrapper } from '../Form/FormStyles';
import { EditSection, EditWrapper, UpdateContent, UpdateForm, UpdateImg,FormButton,SelectItem, Select} from './EditStyles'

const EditProduct = ({match}) => {
const { id } = useParams();
const ProductDetail = useSelector((state) => state.annonceReducer.product);
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

// useEffect(() => {
//     const fetching = async (id) => {
//       const { data } = await axios.get(`/product/${id}`);

      
//     };

//     fetching();
//   }, [id]);


 const EditData = [
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
    dispatch(updateProduct(id,formData,history))
    history.push("/profil")

  
}

    return (
          <EditSection id="pricing">
     <EditWrapper>
 <Heading> Edit Product</Heading>
    <UpdateContent>
      <UpdateForm>
      <FormWrapper  onSubmit={handleSubmit}>

  {EditData.map((el, index) => (
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
      </UpdateForm>
    


       <UpdateImg></UpdateImg>
    </UpdateContent>


     </EditWrapper>
     </EditSection>
    )
}

export default EditProduct
