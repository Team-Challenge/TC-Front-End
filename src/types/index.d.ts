declare module '*.jpg';
declare module '*.png';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  buttonText: string;
}

export interface SignUpOptionsProps {
  handleSignUpEmail: () => void;
}

export interface IUserAuth {
  full_name?: string;
  email: string;
  checkbox?: boolean;
  password: string;
  passwordRepeat?: string;
}

export interface SignUpEmailProps {
  openModal: () => void;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: SignUpEmailType;
}

export interface AuthHeaderProps {
  text: string;
}

export interface AuthData {
  openModal?: () => void;
  isRegistration?: boolean;
}

export interface AuthButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: string;
  disabled?: boolean;
}


