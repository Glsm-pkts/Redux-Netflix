import { createStore, combineReducers, applyMiddleware } from "redux";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";

//conbineReducersle birleştirip rootReducere gönderdik
const rootReducer = combineReducers({
    genres:genreReducer,
    movies:movieReducer,
    
});

//applymiddle bize thunk yapısını veriyo
export default createStore( rootReducer, applyMiddleware(thunk));