import { combineReducers } from "redux";
import auth from "./auth";
import bill from "./bill";
import votings from "./votings";

export default combineReducers({
   auth,
   bill,
   votings,
})