import { SignUp } from '../../pages/SignUp';
import { Routes, Route } from 'react-router';
import { SignIn } from '../../pages/SignIn';
import { RegistrationBenefits } from '../auth/RegistrationBenefits';

const App: React.FC = () => {
  return (
    <div className='h-screen w-full grid grid-cols-[50%_50%]'>
      <RegistrationBenefits />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
