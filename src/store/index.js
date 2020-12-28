import { createStore } from "redux";
import tempReducer from "../reducer/tempReducer";

const store = createStore(tempReducer);

export default store;
