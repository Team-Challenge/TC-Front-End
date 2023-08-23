/* eslint-disable @typescript-eslint/no-empty-function */
import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EyeIcon } from '../../components/icons/EyeIcon';
import { IUserAuth, AuthData } from '../../types';
import { registration } from '../../store/auth/authThunks';
import { setUser } from '../../store/auth/authSlice';
import { useAppDispatch } from '../../hooks/reduxHook';
import { AuthButton } from './AuthButton';

export const AuthForm = ({ openModal, isRegistration }: AuthData) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IUserAuth>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit: SubmitHandler<IUserAuth> = (data) => {
    if (isRegistration) {
      const postData = {
        full_name: data.full_name,
        email: data.email,
        password: data.password,
      };
      dispatch(registration(postData));
      dispatch(setUser(postData));
      console.log('data', postData);
    }

    console.log(data);
  };

  const fullNameValidations = errors.full_name && (
    <p className='text-red-500 text-xs italic'>
      {errors?.full_name?.message || 'Please type your Full Name'}
    </p>
  );

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

  const passwordRepeatValidation = errors.passwordRepeat && (
    <p className='text-red-500 text-xs italic'>Passwords do not match</p>
  );

  return (
    <form id='form' className='w-[400px] flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
      {isRegistration && (
        <div className='relative'>
          <input
            type='text'
            placeholder='Full Name'
            {...register('full_name', {
              required: true,
              pattern: {
                value: /^[A-Za-zА-Яа-яЁёЄєІіЇїҐґ\s]+$/,
                message: 'Only letters',
              },
            })}
            className='input-style w-full'
          />
          {fullNameValidations}
        </div>
      )}
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
        <i onClick={togglePasswordVisiblity} className='absolute right-[3%] top-[35%]'>
          <EyeIcon />
        </i>
        {passwordValidation}
      </div>
      {isRegistration && (
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
          {passwordRepeatValidation}
        </div>
      )}
      {isRegistration && (
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
      )}
      <AuthButton
        text='Continue'
        className='text-white text-xs font-light mt-6'
        disabled={!isValid}
        onClick={isRegistration ? openModal : () => {}}
      />
    </form>
  );
};
