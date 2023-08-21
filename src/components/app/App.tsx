import { useEffect } from 'react';

import { SignUp } from '../../pages/SignUp';
import { checkAuth } from '../../store/Auth/authActions';
import { useAppSelector } from '../../hooks/reduxHook';
const App: React.FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.authSlice);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div className='h-screen w-full'>
      <h1>{isAuth ? `user auth ${user.email}` : 'not auth'}</h1>
      <SignUp />
    </div>
  );
};

export default App;
