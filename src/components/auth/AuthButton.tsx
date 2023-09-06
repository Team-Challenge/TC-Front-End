import { AuthButtonProps } from '../../types';

export const AuthButton = ({
  text,
  onClick,
  className,
  variant = 'secondary',
  disabled,
}: AuthButtonProps) => {
  const btnStyle = `text-center leading-[120%] border border-solid
  ${variant === 'main' ? 'font-normal px-5 py-3.5 rounded-xl' : 'uppercase px-4 py-3 rounded-md'}
  ${disabled && variant === 'secondary' ? 'bg-gray-600' : 'bg-black'}
  ${className}`;

  return (
    <button className={btnStyle} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
