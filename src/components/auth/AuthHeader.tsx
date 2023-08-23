import { AuthHeaderProps } from '../../types';

export const AuthHeader = ({ text }: AuthHeaderProps) => {
  return (
    <>
      <h2 className='text-black text-center text-[40px] font-medium leading-[24.6px] mb-[32px]'>
        {text}
      </h2>
      <p className='text-black font-normal leading-[24.6px] mb-16'>
        Lorem ipsum dolor sit amet, consectetur acing adipiscing elit adipisc
      </p>
    </>
  );
};
