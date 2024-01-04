import React, { useState } from 'react';
import Layout from '../Layout';
import './PagesCss/Pages.css';
import element from '../element.png';

const Events = () => {
  const [eventInfo, setEventInfo] = useState('');
  const [inputText, setInputText] = useState('');
  const [eventStatus, setEventStatus] = useState({
    click: null,
    submit: null,
    keyDown: null,
    focus: null,
    blur: null,
  });


  const handleEvent = (eventName) => {
    setEventInfo(`Действия: ${eventName}`);
    setEventStatus((prevStatus) => ({ ...prevStatus, [eventName]: true }));
    setTimeout(() => {
      setEventStatus((prevStatus) => ({ ...prevStatus, [eventName]: false }));
    }, 2000);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnClick = () => {
    handleEvent('click');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleEvent('submit');
  };

  const handleOnKeyDown = () => {
    handleEvent('keyDown');
  };

  const handleOnFocus = () => {
    handleEvent('focus');
  };

  const handleOnBlur = () => {
    handleEvent('blur');
  };

  const renderStatusIcon = (status) => {
    if (status === null) return null;
    return status ? '✔️' : '❌';
  };


  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Events</h1>
          <p>
            <span className="cent">События</span> (Events) в веб-разработке представляют собой действия или изменения, происходящие в браузере пользователя. Они могут быть инициированы различными элементами веб-страницы или самим браузером. JavaScript позволяет разработчикам реагировать на эти события, определять обработчики событий и выполнять соответствующие действия в ответ.
          </p>
          <p className="centTxt">вот несколько событий</p>
          <div className="cent">
            <img
              src={element}
              alt="element"
              className="events-img"
              onClick={handleOnClick}
              onKeyDown={handleOnKeyDown}
              onSubmit={handleOnSubmit}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              tabIndex="0"
            />
            <div>
              <form onSubmit={handleOnSubmit}>
                <label>
                  Текст в инпут:
                  <input type="text" value={inputText} onChange={handleInputChange} />
                </label>
                <button type="submit" className="btn">Отправить</button>
              </form>
              <ul className="events-list">
                <li className="events-item">
                  Событие onClick:  По картинке было кликнуто: {renderStatusIcon(eventStatus.click)}
                </li>
                <li className="events-item">
                  Событие onSubmit: Информация введённая в инпут была отправлена: {renderStatusIcon(eventStatus.submit)}
                </li>
                <li className="events-item">
                  Событие onKeyDown: Клавиша на картинке нажата: {renderStatusIcon(eventStatus.keyDown)}
                </li>
                <li className="events-item">
                  Событие onFocus: Получен фокус на картинке: {renderStatusIcon(eventStatus.focus)}
                </li>
                <li className="events-item">
                  Событие onBlur:  Потерян фокус: {renderStatusIcon(eventStatus.blur)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;