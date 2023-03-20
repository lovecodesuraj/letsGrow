import { combineReducers } from "redux";
import auth from "./auth";
import bill from "./bill";
import votings from "./votings";
import user from "./user";
import discussions from "./discussion";

export default combineReducers({
   user,
   auth,
   bill,
   votings,
   discussions,
});