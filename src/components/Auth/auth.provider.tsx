import React, { useReducer, memo, useCallback } from 'react';
import UserContext from './auth.context';
import UserReducer, { initState, SET_USER } from './auth.reducers';

type AuthProviderProps = {
  children: React.ReactElement
}

const AuthProvider = (props: AuthProviderProps) => {
  const [auth, dispatch] = useReducer(UserReducer, initState);
  const setUser = useCallback((user: any) => { dispatch({ type: SET_USER, payload: user }) }, []);

  return (
    <UserContext.Provider value={{ 
      setUser: setUser, 
      isLogin: auth.isLogin, 
      user: auth.user 
    }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default memo(AuthProvider);