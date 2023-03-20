import { combineReducers } from "redux";
import auth from "./auth";
import bill from "./bill";
import votings from "./votings";
import user from "./user";

export default combineReducers({
   user,
   auth,
   bill,
   votings,

})