import React from 'react'
import { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
 
  FormMessage,
  FormButton,
  FormTitle,
 
 
  
} from "./ContratStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateContrat";

import { useDispatch } from "react-redux";
import PDF from './PDF';
const Contrat = () => {
 
  const [nameUser, setNameUser] = useState("");
    const [nameClient, setNameClient] = useState("");
  const [numero, setNumero] = useState("");
  const [address, setAddress] = useState("");
  const [tarif, setTarif] = useState("");
  const [numberJ, setNumberJ] = useState("");
  const [dateD, setDateD] = useState("");
  const [dateF, setDateF] = useState("");
  const [caution, setCaution] = useState("");
 const [show, setHide] = useState(false)


  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
// dispatch(
//       addproduct({nameUser,nameClient,numero,address,tarif,dateD,dateF,caution,message,numberJ
//       })
//     );


    const resultError = validateForm({
      nameUser,
      nameClient,
      numero,
      address,
      tarif,
      dateD,
      dateF,
      caution,
      message,
      numberJ
    
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
//     setNameUser("");
//     setNameClient("");
//     setNumero("");
//     setAddress("");
//     setTarif("");
//     setDateD("");
//     setDateF("");
//     setCaution("");
//     setMessage("");
// setNumberJ("")
setHide(true)
    setError(null);
    setSuccess("Ajouter avec succès!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };



  const ContratData = [
    {
      label: "Name Utilisateur",
      value: nameUser,
      onChange: (e) => setNameUser(e.target.value),
      type: "text",
    },
      {
      label: "Name Client",
      value: nameClient,
      onChange: (e) => setNameClient(e.target.value),
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
      label: "Tarif ",
      value: tarif,
      onChange: (e) => setTarif(e.target.value),
      type: "number",
    },
    {
      label: "Number de jours ",
      value: numberJ,
      onChange: (e) => setNumberJ(e.target.value),
      type: "number",
    },
    {
      label: "Date Debut",
      value: dateD,
      onChange: (e) => setDateD(e.target.value),
      type: "date",
    },
    {
      label: "Date Fin",
      value: dateF,
      onChange: (e) => setDateF(e.target.value),
      type: "date",
    },
    {
      label: "Caution",
      value: caution,
      onChange: (e) => setCaution(e.target.value),
      type: "number",
    },
  ];
  return (

<div>
{!show ? (  <FormSection>

      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Remplir la contrat de location</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {ContratData.map((el, index) => (
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
           

            

              <FormButton type="submit">Remplir</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
):( <PDF nameUser={nameUser} nameClient={nameClient} numero={numero} address={address} tarif={tarif} dateD={dateD} dateF={dateF} caution={caution} numberJ={numberJ}/>)}
 
</div>
    )
}

export default Contrat
