import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthLink } from '../../components/auth/AuthLinks';
import { LoginForm } from '../../components/auth/AuthForm/LoginForm';
import { RegistrationBenefits } from '../../components/auth/RegistrationBenefits';
import s from './SignIn.module.scss';

export const SignIn = () => {
  return (
    <section className={s.section}>
      <RegistrationBenefits />
      <div className={s.wrap}>
        <AuthHeader text='Вхід' />
        <LoginForm />
        <AuthButton text='Sign in with Google' className={s.btn} variant='secondary' />
        <AuthLink />
      </div>
    </section>
  );
};
