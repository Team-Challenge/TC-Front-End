import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { SignIn, SignUp, UserPanel } from '../../pages';
import { checkAuth } from '../../store/auth/authActions';

const App: React.FC = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/userpanel' element={<UserPanel />} />
      </Routes>
    </div>
  );
};

export default App;
