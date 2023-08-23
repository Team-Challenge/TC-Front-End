import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthForm } from '../../components/auth/AuthForm';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthLink } from '../../components/auth/AuthLinks'; 

export const SignIn = () => {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
        <AuthHeader text='Sign in' />
        <AuthForm />
        <AuthButton
          text='Sign in with Google'
          className='w-[400px] text-black text-xs font-light bg-white border-black my-4'
        />
        <AuthLink />
      </div>
    </section>
  );
};
