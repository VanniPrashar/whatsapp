import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

import Loader from './components/loader/Loader';
import AccountPovider from './context/AccountProvider';
import UserProvider from './context/UserProvider';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

const clientId = '518990233792-qj5poso5k99u17a33rg5ge5agkrjja63.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <AccountPovider >
        <Suspense fallback={<Loader />}>
    <Messenger />
    </Suspense>
    </AccountPovider>
    </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
