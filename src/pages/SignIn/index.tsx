import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthForm } from '../../components/auth/AuthForm';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthLink } from '../../components/auth/AuthLinks'; 
import { RegistrationBenefits } from '../../components/RegistrationBenefits';
import s from './SignIn.module.scss';

export const SignIn = () => {
  return (
    <section className={s.section}>
      <RegistrationBenefits />
      <div className={s.wrap}>
        <AuthHeader text='Вхід' />
        <AuthForm />
        <AuthButton
          text='Sign in with Google'
          className={s.btn}
          variant='secondary'
        />
        <AuthLink />
      </div>
    </section>
  );
};
