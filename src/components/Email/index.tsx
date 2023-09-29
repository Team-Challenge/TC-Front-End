import { TextInput } from '../UI/TextInput';

export const Email = () => {
  return (
    <TextInput
      type='email'
      id='email'
      placeholder='Email'
      required={true}
      regex={/^[\p{L}\p{N}_.-]+@([\p{L}\p{N}-]+\.)+[\p{L}\p{N}-]{2,}$/gu}
      errorMessage='The email should be in the format "email@mail.com"'
    />
  );
};
