import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EyeIcon } from '../../components/icons/EyeIcon';
import { Link } from 'react-router-dom';
import { SignInType } from '../../types';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignInType>({
    mode: 'onChange',
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit: SubmitHandler<SignInType> = (data) => {
    console.log(data);
  };

  const emailValidation = errors.email && (
    <p className='text-red-500 text-xs italic'>
      {errors?.email.message || 'This field is required'}
    </p>
  );

  const passwordValidation = errors.password && (
    <p className='text-red-500 text-xs italic'>
      {errors?.password?.message || 'Your password must contain 8 characters'}
    </p>
  );

  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
        <h2 className='text-black text-center text-[40px] font-medium leading-[24.6px] mb-[32px]'>
          Sign in
        </h2>
        <p className='text-black font-normal leading-[24.6px] mb-16'>
          Lorem ipsum dolor sit amet, consectetur acing adipiscing elit adipisc
        </p>
        <form id='form' className='w-[400px] flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
          <div className='relative'>
            <input
              type='email'
              placeholder='Email'
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'The email should be in the format "email@mail.com" ',
                },
              })}
              className='input-style w-full'
            />
            {emailValidation}
          </div>
          <div className='relative'>
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder='Pass'
              {...register('password', {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message: 'Your password must contain at least one capital letter and a number',
                },
                required: true,
                minLength: {
                  value: 8,
                  message: 'Minimum of 8 characters',
                },
              })}
              className='input-style w-full'
            />
            {passwordValidation}
            <i onClick={togglePasswordVisiblity} className='absolute right-[3%] top-[35%]'>
              <EyeIcon />
            </i>
          </div>
          <button
            className={`text-xs font-light leading-[120%] uppercase px-4 py-3 rounded-md text-white mt-6 ${
              !isValid ? 'bg-[#818181]' : 'bg-black'
            }`}
            disabled={!isValid}
          >
            Continue
          </button>
        </form>
        <button className='w-[400px] text-black text-xs font-light leading-[120%] uppercase px-4 py-3 rounded-md bg-white border rounded-md border-solid border-black my-4'>
          Sign in with Google
        </button>
        <div className='text-[10px] font-light leading-[120%] self-center flex gap-2'>
          <p>Don&apos;t have an account yet?</p>
          <Link to='/'>Sign up now</Link>
        </div>
      </div>
    </section>
  );
};
