import React from 'react';

interface UserState {
  isLogin?: boolean,
  user?: object,
  setUser: (user: any) => void,
}

const UserContext = React.createContext({} as UserState);

export default UserContext;