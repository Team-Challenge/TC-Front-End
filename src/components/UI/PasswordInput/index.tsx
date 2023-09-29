import { useFormContext } from 'react-hook-form';
import s from './PasswordInput.module.scss';
import { useState } from 'react';
import { EyeIcon } from '../../icons/EyeIcon';

interface PasswordInputProps {
  id: string;
  placeholder: string;
  validate?: any;
}

export const PasswordInput = ({ id, placeholder, validate }: PasswordInputProps) => {
  const { register } = useFormContext();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={s.wrap}>
      <input
        type={passwordShown ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(id, {
          validate: validate,
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            message:
              'Your password must contain at least one uppercase letter, one lowercase letter, and a number',
          },
          required: true,
          minLength: {
            value: 8,
            message: 'Minimum of 8 characters',
          },
        })}
        className={s.input}
      />
      <i onClick={togglePasswordVisiblity} className={s.icon}>
        <EyeIcon />
      </i>
    </div>
  );
};
