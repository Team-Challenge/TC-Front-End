import { useNavigate } from 'react-router-dom';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/auth/AuthButton';
import s from './SignUp.module.scss';

export const RegistrationSuccessMessage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.message}>
      <AuthHeader text='Вітаємо!' />
      <div className={s.message_buttons}>
        <AuthButton
          text='Повернутись на головну'
          variant='secondary'
          // className='w-[156px] text-black text-xs bg-white font-light border-black'
          onClick={() => navigate(`/`)}
        />
        <AuthButton
          text='Увійти'
          // className='w-[156px] text-white text-xs font-light border-black'
          onClick={() => navigate(`/signin`)}
        />
      </div>
    </div>
  );
};
