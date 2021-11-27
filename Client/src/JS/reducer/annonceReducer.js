import { AJOUT_ANNONCE_SUCCESS, AJOUT_FAIL, GET_ALL_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_SUCCESS,PRODUCT_UPDATE_SUCCESS,PRODUCT_UPDATE_FAIL} from "../const/productconst";

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
                    product: payload,
                   
                  };
                   case PRODUCT_DETAIL_SUCCESS:
                return {
                    ...state,
                    product: payload,
                   
                  };
                    case PRODUCT_DETAIL_FAIL:
      return { ...state, product: null };


 case PRODUCT_UPDATE_SUCCESS:
                return {
                    ...state,
                    product: payload,
                   
                  };

 case PRODUCT_UPDATE_FAIL:
      return { ...state, product: null };


    case AJOUT_FAIL:
      return { ...state, product: null };
    default:
      return state;
  }
};