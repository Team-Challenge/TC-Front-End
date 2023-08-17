import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EyeIcon } from '../../components/icons/EyeIcon';
import { SignUpEmailType, SignUpEmailProps } from '../../types';

export const SignUpWithEmail = ({ openModal }: SignUpEmailProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpEmailType>({
    mode: 'onChange',
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit: SubmitHandler<SignUpEmailType> = (data) => {
    console.log(data);
  };

  const fullNameValidations = errors.fullname && (
    <p className='text-red-500 text-xs italic'>
      {errors?.fullname?.message || 'Please type your Full Name'}
    </p>
  );

  const emailValidation = errors.email && (
    <p className='text-red-500 text-xs italic'>
      {errors?.email.message || 'This field is required'}
    </p>
  );

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
        <h2 className='text-black text-center text-[40px] font-medium leading-[24.6px] mb-[32px]'>
          Sign up
        </h2>
        <p className='text-black font-normal leading-[24.6px] mb-16'>
          Lorem ipsum dolor sit amet, consectetur acing adipiscing elit adipisc
        </p>
        <form id='form' className='w-[400px] flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
          <div className='relative'>
            <input
              type='text'
              placeholder='Full Name'
              {...register('fullname', {
                required: true,
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                  message: 'Only letters',
                },
              })}
              className='input-style w-full'
            />
            {fullNameValidations}
          </div>
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
                required: true,
                minLength: 8,
              })}
              className='input-style w-full'
            />
            <i onClick={togglePasswordVisiblity} className='absolute right-[3%] top-[35%]'>
              <EyeIcon />
            </i>
            {errors.password && (
              <p className='text-red-500 text-xs italic'>Your password must contain 8 characters</p>
            )}
          </div>
          <div className='relative'>
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder='Repeat Pass'
              {...register('passwordRepeat', {
                required: true,
                validate: (value) => value === password.current || 'Passwords do not match',
              })}
              className='input-style w-full'
            />
            <i onClick={togglePasswordVisiblity} className='absolute right-[3%] top-[35%]'>
              <EyeIcon />
            </i>
            {errors.passwordRepeat && (
              <p className='text-red-500 text-xs italic'>Passwords do not match</p>
            )}
          </div>
          <div className='flex gap-2 self-stretch'>
            <input
              type='checkbox'
              id='checkbox'
              {...register('checkbox', {
                required: true,
              })}
            />
            <span className='text-[#818181] text-[8px]  font-light leading-[120%]'>
              By creating an account you agree with our Terms of Service, Privacy Policy, and our
              default Notification Settings.
            </span>
          </div>
          <button
            className={`text-xs font-light leading-[120%] uppercase px-4 py-3 rounded-md text-white mt-6 ${
              !isValid ? 'bg-gray-600' : 'bg-black'
            }`}
            disabled={!isValid}
            onClick={openModal}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
