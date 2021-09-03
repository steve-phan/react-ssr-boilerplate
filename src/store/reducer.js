export const initalState = {
  text: 'Hello World',
};
export const appReducer = (state = { ...initalState }, action) => {
  if (action.type === 'hello') {
    return {
      ...state,
      text: 'Hello World',
    };
  }
  if (action.type === 'goodbye') {
    return {
      ...state,
      text: 'Good Bye!',
    };
  }
  return state;
};
