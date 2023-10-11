import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from '../../../../components/UI/TextInput';
import s from './Settings.module.scss';
import { PasswordInput } from '../../../../components/UI/PasswordInput';
// import { Email } from '../../../../components/Email';
import { ButtonUI } from '../../../../components/UI/ButtonUI';
import { useAppDispatch } from '../../../../hooks/reduxHook';
import { changePhoneNumber } from '../../../../store/userSettings/userSettingsThunks';

interface SettingsFromData {
  current_password?: string;
  new_password?: string;
  new_password_repeat?: string;
  email?: string;
  phoneNumber?: string;
}

export const Settings = () => {
  const methods = useForm<SettingsFromData>({
    mode: 'onChange',
  });

  const dispatch = useAppDispatch();

  const {
    getValues,
    watch,
    formState: { errors },
  } = methods;

  const oldPassword = watch('current_password');
  const newPassword = watch('new_password');
  const newPasswordRepeat = watch('new_password_repeat');

  const isAnyPasswordFilled = Boolean(newPassword || newPasswordRepeat || oldPassword);

  const onSubmit = (data: SettingsFromData) => {
    dispatch(changePhoneNumber(data.phoneNumber));
    console.log(data);
  };

  return (
    <div className={s.settings}>
      <h1 className='user-panel-title'>Налаштування входу</h1>
      <FormProvider {...methods}>
        <form
          id='settings'
          className={s.form}
          onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        >
          <label className={s.form_label}>
            Зміна паролю
            <PasswordInput
              id='current_password'
              placeholder='Старий пароль'
              required={isAnyPasswordFilled}
            />
            {/* {errors.oldPassword && (
              <p className={`${s.form_error}`}>Невірний старий пароль</p>
            )} */}
            <PasswordInput
              id='new_password'
              placeholder='Новий пароль'
              required={isAnyPasswordFilled}
            />
            {errors.new_password && (
              <p className={`${s.form_error}`}>{errors.new_password.message as string}</p>
            )}
            <PasswordInput
              id='new_password_repeat'
              placeholder='Повторіть пароль'
              required={isAnyPasswordFilled}
              validate={(value: string) =>
                value === getValues('new_password') || 'Passwords do not match'
              }
            />
            {errors.new_password_repeat && (
              <p className={`${s.form_error}`}>Passwords do not match</p>
            )}
          </label>

          {/* <label className={s.form_label}>
            Сповіщення
            <p className={s.form_hints}>Введіть пошту на яку ви хочете отримувати сповіщення</p>
            <Email required={false} />
          </label> */}

          <label className={s.form_label}>
            Особисті дані
            <p className={s.form_hints}>Додати номер телефону</p>
            <TextInput
              type='text'
              id='phoneNumber'
              placeholder='Новий номер'
              regex={/^\+380\d{9}$/}
              errorMessage='Будь ласка, введіть справний український номер телефону, який розпочинається з +380'
            />
          </label>

          <ButtonUI label='Зберігти' className={s.form_btn} />
        </form>
      </FormProvider>
      <ButtonUI label='Видалити профіль' variant='secondary' className={s.btn_delete} />
    </div>
  );
};
