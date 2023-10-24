import { useState } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Modal } from '../../Modal';
import { ButtonUI } from '../../UI/ButtonUI';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { changePassword, changePhoneNumber } from '../../../store/userSettings/userSettingsThunks';
import s from './Settings.module.scss';
import { useAccountInfo } from '../../../hooks/useAccountInfo';
import { SettingsFromData } from '../../../types';
import { UserPassword } from './UserPassword';
import { UserPhoneNumber } from './UserPhoneNumber';

export const Settings = () => {
  const [message, setMessage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const accountInfo = useAccountInfo();
  const dispatch = useAppDispatch();

  const methods = useForm<SettingsFromData>({
    mode: 'onChange',
  });

  const newPassword = methods.watch('new_password');
  const phoneNumber = methods.watch('phoneNumber');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = (data: SettingsFromData) => {
    if (phoneNumber) {
      dispatch(changePhoneNumber(data.phoneNumber)).then((response) => {
        if (response.payload) {
          setMessage('Ваші дані успішно оновлено');
        } else {
          setMessage('Виникла помилка, спробуйте ще раз');
        }
      });
    }

    if (newPassword) {
      dispatch(
        changePassword({ currentPassword: data.current_password, newPassword: data.new_password }),
      ).then((response) => {
        if (response.payload) {
          setMessage('Ваші дані успішно оновлено');
        } else {
          setMessage('Виникла помилка, спробуйте ще раз');
        }
      });
    }
    console.log(accountInfo);
    setIsModalOpen(true);
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
          <UserPassword />
          <UserPhoneNumber />
          <ButtonUI label='Зберігти' className={s.form_btn} />
        </form>
      </FormProvider>

      <ButtonUI label='Видалити профіль' variant='secondary' className={s.btn_delete} />

      {isModalOpen && message !== '' && (
        <Modal isOpen={isModalOpen}>
          <div className={s.modal}>
            <div className={s.modal_subtitle}>{message}</div>
            <button className={s.modal_close} onClick={toggleModal}>
              X
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
