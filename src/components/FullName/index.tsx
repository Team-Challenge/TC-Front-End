import { TextInput } from '../UI/TextInput';

export const FullName = () => {
  return (
    <TextInput
      type='text'
      id='full_name'
      placeholder='Full Name'
      required={true}
      regex={/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){1,4}\s[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}$/u}
      errorMessage='Only letters'
      maxLength={50}
      maxLengthMessage='The name is too long'
    />
  );
};
