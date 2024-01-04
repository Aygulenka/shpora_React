import React, { useState } from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css'
import FormModal from './FormModal';

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (data) => {
    // Обработка данных после отправки формы
    console.log('Отправленные данные:', data);
  };
  const prim1 = `
import React, { useState } from 'react';

const MyForm = () => {
  // Состояния для хранения значений полей формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Обработчик изменения значения в поле "Имя"
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Обработчик изменения значения в поле "Email"
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно добавить логику для обработки отправки формы, например, отправку данных на сервер
    console.log('Отправлено: ', { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;
`
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Form</h1>
          <p>Чтобы создать форму в React, вы можете использовать компонент form вместе с различными элементами ввода, такими как input, textarea, и button. Вот пример простой формы в React:</p>
          <div className='code'>
            <pre><code>{prim1}</code></pre>
          </div>
          <p>
            Этот компонент MyForm содержит форму с двумя полями ввода (для имени и электронной почты) и кнопкой отправки. Значения полей формы хранятся в состоянии с использованием хука useState. Когда форма отправляется, вызывается обработчик handleSubmit, который предотвращает стандартное поведение отправки формы и выводит значения в консоль.</p>
          <FormModal />
        </div>
      </div>
    </Layout>
  );
}

export default Form;