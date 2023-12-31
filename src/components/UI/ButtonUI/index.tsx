import s from './ButtonUI.module.scss';

interface ButtonUIProps {
  label: string;
  variant?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonUI = ({
  label,
  variant = 'main',
  className,
  onClick,
  disabled = false,
}: ButtonUIProps) => {
  const btnStyle = `${s.btn} ${className}
  ${variant === 'main' ? s.main : s.secondary}`;

  return (
    <button className={btnStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
