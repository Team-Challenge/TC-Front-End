import { useState } from 'react';
import { RegistrationBenefits } from '../../components/auth/RegistrationBenefits';
import { SignUpWithEmail } from './SignUpWithEmail';
import Modal from '../../components/auth/Modal';
import { RegistrationSuccessMessage } from './RegistrationSuccessMessage';
import { SignUpOptions } from './SignUpOptions';

export const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCongratulations, setIsCongratulations] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSignUpEmail(false);
    setIsCongratulations(true);
  };

  const handleSignUpEmail = () => {
    setSignUpEmail(true);
  };

  return (
    <div className='h-screen grid grid-cols-[50%_50%]'>
      <RegistrationBenefits />
      {!signUpEmail && !isCongratulations && (
        <SignUpOptions handleSignUpEmail={handleSignUpEmail} />
      )}
      {signUpEmail && <SignUpWithEmail openModal={openModal} />}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} buttonText='start work'>
          <h2 className='text-2xl font-medium leading-[120%] mb-4'>
            Congratulations, your company has become part of the `Name` marketplace in Ukraine!
          </h2>
          <p className='font-light leading-[120%]'>Potential customers are waiting for you!</p>
          <p className='font-light leading-[120%] mt-2 mb-8'>
            We have prepared everything so that you can sell on the Internet right now.
          </p>
          <h2 className='text-2xl font-medium leading-[120%]'>We will contact you.</h2>
          <p className='font-light leading-[120%] mt-4 mb-10'>
            Our manager will contact you at the specified phone number. Expect a call during
            business hours: 9:00 a.m. to 6:00 p.m.
          </p>
        </Modal>
      )}
      {isCongratulations && <RegistrationSuccessMessage />}
    </div>
  );
};
