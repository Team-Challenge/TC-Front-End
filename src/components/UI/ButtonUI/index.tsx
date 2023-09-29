import s from './ButtonUI.module.scss';

interface ButtonUIProps {
  label: string;
  variant?: string;
  className?: string;
  onClick?: () => void;
}

export const ButtonUI = ({ label, variant = 'main', className, onClick }: ButtonUIProps) => {
  const btnStyle = `${s.btn} ${className}
  ${variant === 'main' ? s.main : s.secondary}`;

  return (
    <button className={btnStyle} onClick={onClick}>
      {label}
    </button>
  );
};
