import React, { useState } from 'react';
import Modal from 'react-modal';

const FormModal = () => {
  const [firstName, setFirstName] = useState('your name');
  const [lastName, setLastName] = useState('your lastName');
  const [age, setAge] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация данных, например, возраст должен быть числом
    if (!isNaN(age)) {
      setIsModalOpen(true);
    } else {
      alert('Введите корректный возраст');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Фамилия:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Возраст:
          <input
            type="text" // Изменено на text, чтобы вводить возраст вручную
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="ModalContent"
        contentLabel="Form Modal"
      >
        <h2>Уважаемый {lastName} {firstName},  поздравляю, вы прошли эту шпору</h2>

      </Modal>
    </div>
  );
};

export default FormModal;

