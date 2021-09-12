import { FC, memo, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './input';
import useHandleChange from '../../hooks/useHandleChange';
import AuthContext from './auth.context';
import css from './Auth.module.scss';

const Auth: FC = () => {
  const userName = useHandleChange('');
  const password = useHandleChange('');

  const { setUser, isLogin } = useContext(AuthContext);

  function onSubmit() {
    setUser({ name: userName.value, password: password.value });
  }

  if (isLogin) return <Redirect to='/tasks' />;
  return (
    <div className={css.auth}>
      <div className={css.form}>
        <h3>Login</h3>
        <Input label={'Username'} value={userName.value} onChange={userName.handleChange} />
        <Input label={'Password'} value={password.value} onChange={password.handleChange} />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
}

export default memo(Auth);