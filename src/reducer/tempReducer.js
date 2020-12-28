const initialState = {
  temperature: "",
};

function tempReducer(state = initialState, action) {
  if (action.type === "SET_TEMP") {
    return Object.assign({}, state, {
      temperature: action.payload,
    });
  } else {
    return state;
  }
}

export default tempReducer;
