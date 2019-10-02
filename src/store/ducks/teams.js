import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
  selectTeam: ['team'],
});

export const TeamsTypes = Types;
export default Creators;


export const INITIAL_STATE = Immutable({
  data: [],
  active: null,
});

export const getSuccess = (state, { data }) => state.merge({ data });

export const selectTeam = (state, { team }) => {
  localStorage.setItem('@Team:team', JSON.stringify(team));

  return state.marge({ active: team });
};


export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeam,
});
