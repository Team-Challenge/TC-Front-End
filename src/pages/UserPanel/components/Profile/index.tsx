import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FullName } from '../../../../components/FullName';
import { ButtonUI } from '../../../../components/UI/ButtonUI';
import { ProfilePhoto } from './ProfilePhoto';
import s from './Profile.module.scss';
import { useAppDispatch } from '../../../../hooks/reduxHook';
import { changeFullName } from '../../../../store/userSettings/userSettingsThunks';

interface changeFullNameFormData {
  full_name: string;
}

export const Profile = () => {
  const methods = useForm();

  const {
    formState: { isValid },
  } = methods;

  const dispatch = useAppDispatch();

  const onSubmit = (data: changeFullNameFormData) => {
    const newName = data.full_name;
    dispatch(changeFullName(newName));
  };

  return (
    <div>
      <h1 className='user-panel-title'>Профіль</h1>
      <ProfilePhoto />
      <h2 className='user-panel-subtitle'>Налаштування профілю</h2>
      <FormProvider {...methods}>
        <form
          id='changeFullName'
          className={s.form}
          onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        >
          <label className={s.form_label}>
            Ім’я та Прізвище
            <FullName />
          </label>
          <ButtonUI label='Зберігти' className={s.form_btn} disabled={!isValid} />
        </form>
      </FormProvider>
    </div>
  );
};
