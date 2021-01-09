import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import Reducers from "../Reducers/reducers";


//--- MIDDLEWARE
// add middleware inside this function
const middleware= applyMiddleware(thunk);


//--- STORE
const store= createStore(Reducers, middleware);

export default store;