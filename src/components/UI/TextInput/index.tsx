import { useFormContext } from 'react-hook-form';
import s from './TextInput.module.scss';

interface TextInputProps {
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
  regex?: RegExp;
  errorMessage?: string;
  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  className?: string;
}

export const TextInput = ({
  type = 'text',
  id,
  placeholder,
  required = false,
  regex,
  errorMessage,
  minLength,
  minLengthMessage,
  maxLength,
  maxLengthMessage,
  className,
}: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(id, {
          required: required,
          pattern: {
            value: regex as RegExp,
            message: errorMessage as string,
          },
          maxLength: {
            value: maxLength as number,
            message: maxLengthMessage as string,
          },
          minLength: {
            value: minLength as number,
            message: minLengthMessage as string,
          },
        })}
        className={`${s.input} ${className}`}
      />
      {errors[id] && <p className={`${s.error}`}>{errors[id]?.message as string}</p>}
    </>
  );
};
