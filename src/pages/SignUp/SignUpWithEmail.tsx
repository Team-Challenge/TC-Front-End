import { SignUpEmailProps } from '../../types';
import { AuthForm } from '../../components/auth/AuthForm';
import { AuthHeader } from '../../components/auth/AuthHeader';

export const SignUpWithEmail = ({ openModal }: SignUpEmailProps) => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
        <AuthHeader text='Sign up' />
        <AuthForm isRegistration openModal={openModal} />
      </div>
    </div>
  );
};
