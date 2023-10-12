import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { checkAuth } from '../../store/auth/authActions';
import { SignIn, SignUp, UserPanel, PageNotFound } from '../../pages';
import { setAuth } from '../../store/auth/authSlice';

const App: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
      dispatch(setAuth(true));
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
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
