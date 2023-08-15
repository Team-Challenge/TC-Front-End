const benefitsOfRegistration = [
  {
    title: 'Honey never spoils',
    description:
      'Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
  },
  {
    title: 'Octopuses have three hearts',
    description:
      'These fascinating creatures possess three hearts—one main heart that pumps blood through the entire body and two additional hearts that pump blood through the gills.',
  },
  {
    title: 'The shortest war in history',
    description:
      'The Anglo-Zanzibar War, which occurred on August 27, 1896, holds the record for being the shortest war ever recorded.',
  },
];

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
