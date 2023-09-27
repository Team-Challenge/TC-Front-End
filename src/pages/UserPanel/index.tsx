import { useState, ReactNode } from 'react';
import { Profile } from './components/Profile';
import { Order } from './components/Order';
import { FavoriteProducts } from './components/FavoriteProducts';
import { Store } from './components/Store';
import { Settings } from './components/Settings';
// import s from './UserPanel.module.scss';

const buttonData = [
  { id: '1', label: 'Профіль', content: <Profile /> },
  { id: '2', label: 'Ваші замовлення', content: <Order /> },
  { id: '3', label: 'Обрані товари', content: <FavoriteProducts /> },
  { id: '4', label: 'Мій магазин', content: <Store /> },
  { id: '5', label: 'Налаштування', content: <Settings /> },
];

export const UserPanel = () => {
  const [selectedComponent, setSelectedComponent] = useState<ReactNode>(buttonData[0].content);

  const handleButtonClick = (content: ReactNode) => {
    setSelectedComponent(content);
  };

  return (
    <section>
      {buttonData.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.content)}
          // className=`${s.btn}`
        >
          {button.label}
        </button>
      ))}
      {selectedComponent}
    </section>
  );
};
