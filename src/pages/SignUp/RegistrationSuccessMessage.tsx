import { useNavigate } from 'react-router-dom';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/auth/AuthButton';

export const RegistrationSuccessMessage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
      <AuthHeader text='Congratulations' />
      <div className='flex gap-6'>
        <AuthButton
          text='Go to main page'
          className='w-[156px] text-black text-xs bg-white font-light border-black'
          onClick={() => navigate(`/`)}
        />
        <AuthButton
          text='Sign in'
          className='w-[156px] text-white text-xs font-light border-black'
          onClick={() => navigate(`/signin`)}
        />
      </div>
    </div>
  );
};
