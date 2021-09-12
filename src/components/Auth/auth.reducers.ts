export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

type ACTION_TYPE = { type: typeof SET_USER; payload: any } | { type: typeof LOGOUT };
export const initState = {
  isLogin: false,
  user: Object,
};

function authReducer(state: typeof initState, action: ACTION_TYPE) {
  switch(action.type) {
    case SET_USER: 
      return { isLogin: true, user: action.payload };
    default: 
      return state;
  }
}
export default authReducer;