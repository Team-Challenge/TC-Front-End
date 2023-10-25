import s from './Settings.module.scss';
import { TextInput } from '../../UI/TextInput';
import { useAccountInfo } from '../../../hooks/useAccountInfo';

export const UserPhoneNumber = () => {
  const accountInfo = useAccountInfo();

  return (
    <label className={s.form_label}>
      Особисті дані
      {accountInfo && (
        <>
          <p className={s.form_hints}>
            {accountInfo.phone_number
              ? 'Змінити номер телефону'
              : 'Додати номер телефону'
            }
          </p>
          <p>{accountInfo.phone_number}</p>
        </>
      )}
      <TextInput
        type='text'
        id='phoneNumber'
        placeholder='Новий номер'
        regex={/^\+380\d{9}$/}
        errorMessage='Будь ласка, введіть справний український номер телефону, який розпочинається з +380'
      />
    </label>
  );
};
