export const RegistrationSuccessMessage = () => {
  return (
    <div className='flex flex-col items-start justify-center w-[450px] ml-[155px] mr-[145px] my-[150px]'>
      <h2 className='text-black text-center text-[40px] font-medium leading-[24.6px] mb-[32px]'>
        Congratulations
      </h2>
      <p className='text-black font-normal leading-[24.6px] mb-16'>
        Lorem ipsum dolor sit amet, consectetur acing adipiscing elit adipisc
      </p>
      <div className='flex gap-6'>
        <button className='w-[156px] border text-black text-xs not-italic font-light leading-[120%] uppercase px-4 py-3 rounded-md border-solid border-black'>
          Go to main page
        </button>
        <button className='w-[156px] bg-black text-white text-xs font-light leading-[120%] uppercase px-4 py-3 rounded-md'>
          Sign in
        </button>
      </div>
    </div>
  );
};
