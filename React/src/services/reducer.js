const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  };
  
  export default reducer;