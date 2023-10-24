import { useState, ReactNode } from 'react';
import { Profile, Order, FavoriteProducts, Store, Settings, Messages } from '../../components';
import s from './UserPanel.module.scss';

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
        <button className={s.btn}>Вийти</button>
      </div>
      {selectedComponent}
    </section>
  );
};
