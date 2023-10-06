import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useAppSelector } from '../../hooks/reduxHook';
import { checkAuth } from '../../store/auth/authActions';
import { SignIn, SignUp, UserPanel } from '../../pages';

const App: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <Routes>
        {!isAuth ? (
          <>
            <Route path='/' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </>
        ) : (
          <>
            {['/', '/userpanel', '/signin'].map((path) => (
              <Route key={path} path={path} element={<UserPanel />} />
            ))}
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
