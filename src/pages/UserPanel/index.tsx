import { useState, ReactNode } from 'react';
import { Profile } from './components/Profile';
import { Order } from './components/Order';
import { FavoriteProducts } from './components/FavoriteProducts';
import { Store } from './components/Store';
import { Settings } from './components/Settings';
import { Messages } from './components/Messages';
import s from './UserPanel.module.scss';
import { userLogout } from '../../store/userSettings/userSettingsThunks';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { useNavigate } from 'react-router';

const buttonData = [
  { id: '1', label: 'Профіль', content: <Profile /> },
  { id: '2', label: 'Ваші замовлення', content: <Order /> },
  { id: '3', label: 'Повідомлення', content: <Messages /> },
  { id: '4', label: 'Обрані товари', content: <FavoriteProducts /> },
  { id: '5', label: 'Мій магазин', content: <Store /> },
  { id: '6', label: 'Налаштування', content: <Settings /> },
];

export const UserPanel = () => {
  const [selectedComponent, setSelectedComponent] = useState<ReactNode>(buttonData[0].content);

  const handleButtonClick = (content: ReactNode) => {
    setSelectedComponent(content);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.auth);

  const logoutUser = () => {
    dispatch(userLogout());
    if (!isAuth) {
      navigate('/signin');
    }
  };

  return (
    <section className={s.panel}>
      <div className={s.wrap}>
        {buttonData.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.content)}
            className={`${s.btn} ${selectedComponent === button.content ? s.active : ''}`}
          >
            {button.label}
          </button>
        ))}
        <span className={s.line}></span>
        <button className={s.btn} onClick={logoutUser}>
          Вийти
        </button>
      </div>
      {selectedComponent}
    </section>
  );
};
