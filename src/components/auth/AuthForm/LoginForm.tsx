import { useForm, SubmitHandler, FormProvider, FieldValues } from 'react-hook-form';
import { IUserAuth } from '../../../types';
import { AuthButton } from '../AuthButton';
import { PasswordInput } from '../../UI/PasswordInput';
import s from './AuthForm.module.scss';
import { Email } from '../../Email';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { login } from '../../../store/auth/authThunks';
import { useNavigate } from 'react-router';

export const LoginForm = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    formState: { errors, isValid },
  } = methods;

  const isUserAuth = () => {
    if (isAuth) {
      navigate('/userpanel');
    }
  };

  const onSubmit: SubmitHandler<IUserAuth> = (data) => {
    dispatch(login(data));
  };

  return (
    <FormProvider {...methods}>
      <form
        id='login'
        className={s.form}
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <Email />

        <PasswordInput id='password' placeholder='Pass' required={true} />
        {errors.password && <p className={`${s.error}`}>{errors.password.message as string}</p>}

        <AuthButton text='Далі' variant='main' disabled={!isValid} onClick={isUserAuth} />
      </form>
    </FormProvider>
  );
};
