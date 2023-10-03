import { useForm, SubmitHandler, FormProvider, FieldValues } from 'react-hook-form';
import { IUserAuth } from '../../../types';
import { AuthButton } from '../AuthButton';
import { PasswordInput } from '../../UI/PasswordInput';
import s from './AuthForm.module.scss';
import { Email } from '../../Email';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { login } from '../../../store/auth/authThunks';

export const LoginForm = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const dispatch = useAppDispatch();

  const {
    formState: { errors, isValid },
  } = methods;

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

        <PasswordInput id='password' placeholder='Pass' />
        {errors.password && <p className={`${s.error}`}>{errors.password.message as string}</p>}

        <AuthButton
          text='Далі'
          variant='main'
          disabled={!isValid}
          // onClick={}
        />
      </form>
    </FormProvider>
  );
};
