export const increment = (num) => ({
  type: 'INCREMENT',
  payload: num,
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const loggedStatus = () => ({
  type: 'SIGN_IN',
});
