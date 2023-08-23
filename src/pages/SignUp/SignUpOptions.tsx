import { SignUpOptionsProps } from '../../types';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/auth/AuthButton';
import { AuthLink } from '../../components/auth/AuthLinks';

export const SignUpOptions = ({ handleSignUpEmail }: SignUpOptionsProps) => {
  return (
    <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
      <AuthHeader text='Sign up' />
      <div className='flex flex-col items-center gap-4 mb-6'>
        <AuthButton
          text='Sign up with Google'
          variant='main'
          className='w-[400px] border-[#818181] bg-white text-black'
        />
        <span className='before:bg-[black] before:h-[0.1px] before:inline-block before:w-[65.5px] before:mr-4 after:bg-[black] after:h-[0.1px] after:inline-block after:w-[65.5px] after:ml-4 flex justify-center items-center text-[10px] font-normal leading-[24.6px]'>
          or
        </span>
        <AuthButton
          text='Continue with Email'
          className='w-[400px] bg-black text-white'
          variant='main'
          onClick={handleSignUpEmail}
        />
      </div>
      <p className='text-center text-[10px] font-light leading-[120%] mb-4'>
        By creating an account you agree with our Terms of Service, Privacy Policy, and our default
        Notification Settings.
      </p>
      <AuthLink isRegistration />
    </div>
  );
};
