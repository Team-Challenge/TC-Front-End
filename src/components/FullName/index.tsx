import { useFormContext } from 'react-hook-form';
import { TextInput } from '../UI/TextInput';
import s from './FullName.module.scss';

export const FullName = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
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
      {errors.full_name && <p className={`${s.error}`}>{errors.full_name.message as string}</p>}
    </>
  );
};
