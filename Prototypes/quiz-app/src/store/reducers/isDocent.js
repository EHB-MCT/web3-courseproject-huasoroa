const docentReducer = (state = false, action) => {
  switch (action.type) {
    case 'DOCENT':
      state = true;
      break;
    case 'STUDENT':
      state = false;
      break;
    default:
      return state;
  }

  return state;
};

export default docentReducer;
