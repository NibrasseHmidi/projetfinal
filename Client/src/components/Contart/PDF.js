import React from 'react'
import Pdf from 'react-to-pdf'
import { ButtonContart, ContartLocation, ContratContainer, ContratSection, ContratWrapper, H1Contrat, PContart } from './ContratStyles';
const ref = React.createRef();
const PDF = (props) => {
     console.log("pdf props", props);
    return (
        <div>
        <ContratSection id="pricing">
     <ContratWrapper>
        <ContratContainer ref={ref}>
        <H1Contrat>
        Dipanini عقد كراء  
        </H1Contrat>   
        <ContartLocation>
        <PContart dir="rtl">الحمد لله</PContart>
         <PContart dir="rtl">   بين الممضيين أسفله <span style={{fontWeight:"bold"}}>{props.nameUser}</span>  و  <span style={{fontWeight:"bold"}}>{props.nameClient}</span></PContart>
        <PContart dir="rtl">وقع الاتفاق على ما يأتي:</PContart>



<PContart dir="rtl"><span  style={{fontWeight:"bold"}}>الفصل الاول-</span> سوغ السيد(ة) <span style={{fontWeight:"bold"}}> {props.nameUser}</span> للسيد(ة) <span style={{fontWeight:"bold"}}>{props.nameClient}</span> الذي  ارتضى بذللك......</PContart> 

<PContart dir="rtl"><span  style={{fontWeight:"bold"}}>الفصل الثاني-</span> وقع هذا التسويغ لمدة قدرها <span style={{fontWeight:"bold"}}> {props.numberJ} يوم</span> تبتدئ في <span style={{fontWeight:"bold"}}>{props.dateD}</span> و تنتهي في <span style={{fontWeight:"bold"}}>{props.dateF}</span></PContart> 


<PContart dir="rtl"><span  style={{fontWeight:"bold"}}>الفصل الثالث-</span>  انعقد هذا التسويغ بمقدار <span style={{fontWeight:"bold"}}> {props.tarif} دينار</span> لجميع المدة المذكورة وبضمان قدره <span style={{fontWeight:"bold"}}>{props.caution} دينار</span> يقع دفعه في <span style={{fontWeight:"bold"}}>{props.address} </span> </PContart>


<PContart dir="rtl"><span  style={{fontWeight:"bold"}}>الفصل الرابع-</span>  يبطل العمل بهذا العقد بمجرد انتهاء المدة المفروضة  وذالك بدون تنبيه صادر من احد الطرفين على الاخر </PContart> 




<PContart dir="rtl"><span  style={{fontWeight:"bold"}}>الفصل الخامس-</span>  اعترف المتسوغ انه تسلم المسوغ موضوع هذا العقد على حالة حسنة و التزم بارجاعه عقد انتهاء مدة التسوغ مثلما تسلمه منه 
 </PContart> 
        </ContartLocation> 
        </ContratContainer>
        <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <ButtonContart onClick={toPdf}>Capture as PDF</ButtonContart>}
      </Pdf>
      </ContratWrapper>
      </ContratSection>
        </div>
    )
}

export default PDF
