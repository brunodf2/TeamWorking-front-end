import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  signed: false,
  token: null,
});

export const success = (state, { token }) => {
  console.log(token);
  return state.merge({ signed: true, token });
};


export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
