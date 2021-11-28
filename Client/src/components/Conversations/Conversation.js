
import React from 'react'



import {ConversationContent, ConversationImg, ConversationName } from './ConversationStyles';
const Conversation = ({conversation,currentUser}) => {
//     const { id } = useParams();
//  const dispatch = useDispatch();
    // const [user,setUser]=useState(null)
console.log(currentUser);
 console.log(conversation);
  // const ProductDetail = useSelector((state) => state.annonceReducer.product);

// useEffect(() => {
//   const friendInd =conversation.members.find((m) => m !== currentUser?._id);

// // const getUser = async () =>{
// //   try {
// //      const res = await axios("/product?user._id="+friendInd)
// //      console.log(res);
// //   } catch (error) {
// //     console.log(error);
// //   }
        
// //       }
// //       getUser()

//   }, [currentUser, conversation]);

  
  

 

  // useEffect(() => {
  //   dispatch(detailsProduct(id));
  // }, [dispatch, id]);

    return (
      
 <ConversationContent>

<ConversationImg src={currentUser.pic}  alt="" />

<ConversationName> {currentUser.name + " " + currentUser.lastname }</ConversationName>

</ConversationContent>
     
    )
}

export default Conversation
