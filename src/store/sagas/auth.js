import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    localStorage.setItem('@Team:token', response.data.token);

    api.defaults.headers.Authorization = `Bearer ${token}`;


    yield put(AuthActions.signInSuccess(response.data.token));
  } catch (err) {
    console.log(err);
  }
}
