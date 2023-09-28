import { useForm, SubmitHandler, FormProvider, FieldValues } from 'react-hook-form';
import { IUserAuth } from '../../../types';
import { AuthButton } from '../AuthButton';
import { PasswordInput } from '../../UI/PasswordInput';
import s from './AuthForm.module.scss';
import { Email } from '../../Email';

export const LoginForm = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<IUserAuth> = (data) => {
    console.log(data);
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
