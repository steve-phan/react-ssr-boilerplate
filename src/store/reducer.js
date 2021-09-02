export const appReducer = (state = { text: '' }, action) => {
  if (action.type === 'hello') {
    return {
      ...state,
      text: 'Hello World!',
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