import { SignUpEmailProps } from '../../types';
import { AuthForm } from '../../components/auth/AuthForm';
import { AuthHeader } from '../../components/auth/AuthHeader';
import s from './SignUp.module.scss';

export const SignUpWithEmail = ({ openModal }: SignUpEmailProps) => {
  return (
    <div className={s.email}>
      <div className={s.email_form}>
        <AuthHeader text='Реєстрація' />
        <AuthForm isRegistration openModal={openModal} />
      </div>
    </div>
  );
};
