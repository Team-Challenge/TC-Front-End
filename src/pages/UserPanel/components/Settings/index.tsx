import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from '../../../../components/UI/TextInput';
import s from './Settings.module.scss';
import { PasswordInput } from '../../../../components/UI/PasswordInput';
import { Email } from '../../../../components/Email';
import { ButtonUI } from '../../../../components/UI/ButtonUI';

interface SettingsFromData {
  oldPassword?: string;
  newPassword?: string;
  newPasswordRepeat?: string;
  email?: string;
  phoneNumber?: string;
}

export const Settings = () => {
  const methods = useForm<SettingsFromData>({
    mode: 'onChange',
  });

  const {
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit = (data: SettingsFromData) => {
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
            <PasswordInput id='oldPassword' placeholder='Старий пароль' />
            {/* {errors.oldPassword && (
              <p className={`${s.form_error}`}>Невірний старий пароль</p>
            )} */}

            <PasswordInput id='newPassword' placeholder='Новий пароль' />
            {errors.newPassword && (
              <p className={`${s.form_error}`}>{errors.newPassword.message as string}</p>
            )}

            <PasswordInput
              id='newPasswordRepeat'
              placeholder='Повторіть пароль'
              validate={(value: string) =>
                value === getValues('newPassword') || 'Passwords do not match'
              }
            />
            {errors.newPasswordRepeat && (
              <p className={`${s.form_error}`}>Passwords do not match</p>
            )}
          </label>

          <label className={s.form_label}>
            Сповіщення
            <p className={s.form_hints}>Введіть пошту на яку ви хочете отримувати сповіщення</p>
            <Email />
          </label>

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
