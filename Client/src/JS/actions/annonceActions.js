import {
  AJOUT_ANNONCE_SUCCESS,
  AJOUT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,

 
} from "../const/productconst";

import axios from "axios";

export const addproduct =(formData)=>
  async (dispatch) => {
    // dispatch({ type: SET_LOADING });
     const config = {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-type": "application/json",
        }
      };
    try {
    
      let { data } = await axios.post("/product/add",formData,config);
console.log(data) 
      dispatch({
        type: AJOUT_ANNONCE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
  };


  export const getProduct = () => async(dispatch) =>{
        const config = {
            headers: {
                Authorization:localStorage.getItem("token"),
                 "Content-type": "application/json",
            },
        }
        try {
            const {data} = await axios.get("/product/myproduct", config)
         console.log(data)
           
       dispatch({
           type: GET_PRODUCT_SUCCESS,
           payload: data
       })
       
        } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
    }


      export const getallproduct = () => async(dispatch) =>{
      const config = {
            headers: {
                "Content-type": "application/json",
            },
        }
        try {
            
            const {data} = await axios.get("/product/allproduct", config)
         console.log(data)
           
       dispatch({
           type: GET_ALL_PRODUCT_SUCCESS,
           payload: data
       })
       
        } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
    }




export const detailsProduct =(id)=> async (dispatch) => {
const config = {
        headers: {
           Authorization:localStorage.getItem("token"),
          "Content-type": "application/json",
        }
      };
try {
  
   const { data } = await axios.get(`/product/${id}`, config);
console.log(data);
     dispatch({
        type: PRODUCT_DETAIL_SUCCESS,
        payload: data
      });
console.log(data);
}
 catch (error) {
     dispatch({
        type: PRODUCT_DETAIL_FAIL,
        
      });

    }

    }








    export const updateProduct =(id,formData)=> async (dispatch) => {
const config = {
        headers: {
           Authorization:localStorage.getItem("token"),
          "Content-type": "application/json",
        }
      };
try {
  
   const { data } = await axios.put(`/product/${id}`,formData, config);
console.log(data);
     dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data
      });
console.log(data);
}
 catch (error) {
     dispatch({
        type: PRODUCT_UPDATE_FAIL,
        
      });

    }

    }