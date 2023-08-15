// import { Link } from 'react-router-dom';

interface SignUpOptionsProps {
  handleSignUpEmail: () => void;
}

export const SignUpOptions = ({ handleSignUpEmail }: SignUpOptionsProps) => {
  return (
    <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
      <h2 className='text-black text-center text-[40px] font-medium leading-[24.6px] mb-[32px]'>
        Sign up
      </h2>
      <p className='text-black font-normal leading-[24.6px] mb-16'>
        Lorem ipsum dolor sit amet, consectetur acing adipiscing elit adipisc
      </p>
      <div className='flex flex-col items-center gap-4 mb-6'>
        <button className='w-[400px] text-center font-normal leading-[24.6px] border px-5 py-3.5 rounded-xl border-solid border-[#818181]'>
          Sign up with Google
        </button>
        <span className='before:bg-[black] before:h-[0.1px] before:inline-block before:w-[65.5px] before:mr-4 after:bg-[black] after:h-[0.1px] after:inline-block after:w-[65.5px] after:ml-4 flex justify-center items-center text-[10px] font-normal leading-[24.6px]'>
          or
        </span>
        <button
          className='w-[400px] bg-black text-white text-center font-normal leading-[24.6px] px-5 py-3.5 rounded-xl'
          onClick={handleSignUpEmail}
        >
          Continue with Email
        </button>
      </div>
      <p className='text-center text-[10px] font-light leading-[120%] mb-4'>
        By creating an account you agree with our Terms of Service, Privacy Policy, and our default
        Notification Settings.
      </p>
      <div className='text-[10px] font-light leading-[120%] self-center'>
        <p>Already have an account?</p>
        {/* <Link to=''>
          Sign in
        </Link> */}
      </div>
    </div>
  );
};
