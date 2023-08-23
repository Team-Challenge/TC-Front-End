import { Link } from 'react-router-dom';
import { AuthData } from '../../types';

export const AuthLink = ({ isRegistration }: AuthData) => {
  return (
    <div className='text-[10px] font-light leading-[120%] self-center flex gap-2'>
      <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account yet?'}</p>
      <Link to={isRegistration ? '/signin' : '/'}>
        {isRegistration ? 'Sign in' : 'Sign up now'}
      </Link>
    </div>
  );
};
