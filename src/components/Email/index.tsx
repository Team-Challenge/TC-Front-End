import { useFormContext } from 'react-hook-form';
import { TextInput } from '../UI/TextInput';
import s from './Email.module.scss';

export const Email = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextInput
        type='email'
        id='email'
        placeholder='Email'
        required={true}
        regex={/^[\p{L}\p{N}_.-]+@([\p{L}\p{N}-]+\.)+[\p{L}\p{N}-]{2,}$/gu}
        errorMessage='The email should be in the format "email@mail.com"'
      />

      {errors.email && <p className={`${s.error}`}>{errors.email.message as string}</p>}
    </>
  );
};
