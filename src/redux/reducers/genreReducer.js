import { ActionTypes } from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    genres: [],
};


const genreReducer = (state=initialState, {type, payload} ) => {
    
 switch(type) {
  case
   ActionTypes.GENRES_LOADING:
  return{
    ...state,
    isLoading:true,
    }

 case
    ActionTypes.GENRES_SUCCESS:
 return {
        ...state,
        genres: payload,
        isLoading: false,
        error: null,
    }

    case
    ActionTypes.GENRES_ERROR:
    return{
        ...state,
        error: payload,
        isLoading: false,
        
    }

}
    
  
    return state;

};

export default genreReducer;