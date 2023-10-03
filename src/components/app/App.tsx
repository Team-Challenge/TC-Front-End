import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, UserPanel } from '../../pages';
import { checkAuth } from '../../store/auth/authActions';
import { PageNotFound } from '../../pages/PageNotFound';

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
