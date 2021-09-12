import { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AuthProvider from './components/Auth/auth.provider';
import './App.css';

const Auth = lazy(() => import('./components/Auth'));
const Tasks = lazy(() => import('./components/Tasks'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route component={Auth} path={'/'} exact />
            <Route component={Tasks} path={'/tasks'} exact />
          </Switch>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
