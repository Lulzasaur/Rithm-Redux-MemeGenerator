const INITIAL_STATE = { };

function rootReducer(state=INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  if (action.type === "CREATE") {
    return { ...state, [action.newMeme.id]: action.newMeme  };
  }

  if (action.type === "DELETE") {
      let newState = {...state}
      delete newState[action.id]
    return newState;
  }

  return state;
}

export default rootReducer