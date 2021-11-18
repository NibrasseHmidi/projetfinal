import { AJOUT_ANNONCE_SUCCESS, AJOUT_FAIL, GET_ALL_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS } from "../const/productconst";

const initialState = {
  product: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AJOUT_ANNONCE_SUCCESS:
      return { ...state,  product: payload };
      case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: payload.myproduct,
               
              };
               case GET_ALL_PRODUCT_SUCCESS:
                return {
                    ...state,
                    product: payload.products,
                   
                  };
    case AJOUT_FAIL:
      return { ...state, product: null };
    default:
      return state;
  }
};