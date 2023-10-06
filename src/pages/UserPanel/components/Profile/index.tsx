import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FullName } from '../../../../components/FullName';
import { ButtonUI } from '../../../../components/UI/ButtonUI';
import { ProfilePhoto } from './ProfilePhoto';
import s from './Profile.module.scss';

interface changeFullNameFormData {
  full_name: string;
}

export const Profile = () => {
  const methods = useForm();

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: changeFullNameFormData) => {
    console.log(data);
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
