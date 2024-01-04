import React, { useState } from 'react';

const KeysRout = () => {

  const generateRandomKey = () => {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomDigit = Math.floor(Math.random() * 10);
    return `${randomLetter}${randomLetter}${randomDigit}`;
  };

  const [tasks, setTasks] = useState([
    { id: generateRandomKey(), text: 'Купить продукты' },
    { id: generateRandomKey(), text: 'Помыть посуду' },
    { id: generateRandomKey(), text: 'Выгулять собаку' },
  ]);

  const addTask = () => {
    let newTask;
    do {
      const potentialTask = { id: generateRandomKey(), text: 'Новая задача' };
      newTask = tasks.some((task) => task.id === potentialTask.id) ? null : potentialTask;
    } while (!newTask);

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const shuffleTasks = () => {
    setTasks((prevTasks) => [...prevTasks].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="contentHome">
      <div className="text">

        <ul>
          <p className='cent'>Список задач</p>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <strong>Ключ: {task.id}</strong>
                <br />
                <span>Текст: {task.text}</span>
              </div>
              <button onClick={() => removeTask(task.id)}>Удалить</button>
            </li>
          ))}
        </ul>
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={shuffleTasks}>Перемешать задачи</button>
      </div>
    </div>
  );
};

export default KeysRout;
