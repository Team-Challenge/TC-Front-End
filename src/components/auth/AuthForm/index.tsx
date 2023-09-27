/* eslint-disable @typescript-eslint/no-empty-function */
import { useForm, SubmitHandler, FormProvider, FieldValues } from 'react-hook-form';
import { IUserAuth, AuthData } from '../../../types';
import { registration } from '../../../store/auth/authThunks';
import { setUser } from '../../../store/auth/authSlice';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { AuthButton } from '../AuthButton';
import { TextInput } from '../../UI/TextInput';
import { PasswordInput } from '../../UI/PasswordInput';
import s from './AuthForm.module.scss';

export const AuthForm = ({ openModal, isRegistration }: AuthData) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = methods;

  const dispatch = useAppDispatch();

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

  return (
    <FormProvider {...methods}>
      <form
        id='form'
        className={s.form}
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        {isRegistration && (
          <>
            <TextInput
              type='text'
              id='full_name'
              placeholder='Full Name'
              required={true}
              regex={/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){3,5}[.]{0,1}$/}
              errorMessage='Only letters'
              maxLength={50}
              maxLengthMessage='The name is too long'
            />
            {errors.full_name && (
              <p className={`${s.error}`}>{errors.full_name.message as string}</p>
            )}
          </>
        )}
        <>
          <TextInput
            type='email'
            id='email'
            placeholder='Email'
            required={true}
            regex={/^[\p{L}\p{N}_.-]+@([\p{L}\p{N}-]+\.)+[\p{L}\p{N}-]{2,}$/gu}
            errorMessage='The email should be in the format "email@mail.com"'
          />
          {errors.email && <p className={`${s.error}`}>{errors.email.message as string}</p>}
        </>
        <>
          <PasswordInput id='password' placeholder='Pass' />
          {errors.password && <p className={`${s.error}`}>{errors.password.message as string}</p>}
        </>
        {!isRegistration && (
          <p className={s.form_pass}>
            <span>Forgot your password?</span>We will send you recovery instructions to your email
          </p>
        )}
        {isRegistration && (
          <>
            <PasswordInput
              id='passwordRepeat'
              placeholder='Repeat Pass'
              validate={(value: string) =>
                value === getValues('password') || 'Passwords do not match'
              }
            />
            {errors.passwordRepeat && <p className={`${s.error}`}>Passwords do not match</p>}
          </>
        )}
        {isRegistration && (
          <div className={s.checkbox}>
            <input
              type='checkbox'
              id='checkbox'
              {...register('checkbox', {
                required: true,
              })}
            />
            <span className={s.checkbox_text}>
              Створюючи обліковий запис, ви погоджуєтеся з нашими Умовами надання послуг, Політикою
              конфіденційності та стандартними налаштуваннями сповіщень.
            </span>
          </div>
        )}
        <AuthButton
          text='Далі'
          variant='main'
          disabled={!isValid}
          onClick={isRegistration ? openModal : () => {}}
        />
      </form>
    </FormProvider>
  );
};
