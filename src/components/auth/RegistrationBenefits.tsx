import { benefitsOfRegistration } from '../../constants';

export const RegistrationBenefits = () => {
  return (
    <div className='bg-gray-700 h-screen flex items-center justify-center'>
      <div className='w-[533px] flex flex-col gap-8 ml-[100px] mr-[57px] my-[150px]'>
        <h1 className='text-white text-[40px] font-medium mb-8 leading-[normal]'>
          Benefits of Website Registration
        </h1>
        {benefitsOfRegistration.map((benefit, index) => (
          <div key={index} className=''>
            <h3 className='text-white font-medium'>{benefit.title}</h3>
            <p className='text-white text-sm font-normal'>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
