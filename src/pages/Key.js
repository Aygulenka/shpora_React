import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import KeysRout from './KeysRout'
import './PagesCss/Pages.css'

const Key = () => {
  const prim1 = `
const ToDo = () => {
  const generateRandomKey = () => {//генерируем рандомный ключ
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomDigit = Math.floor(Math.random() * 10);
    return {randomLetter}{randomLetter}{randomDigit};//тут перед каждой { знач $ и вся строка в обратных скобках
  };

  const [tasks, setTasks] = useState([
    { id: generateRandomKey(), text: 'Купить продукты' },
    { id: generateRandomKey(), text: 'Помыть посуду' },
    { id: generateRandomKey(), text: 'Выгулять собаку' },
  ]);

  const addTask = () => {//дополнительная проверка на уникальность
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
        <h2 className='centre'>Список задач</h2>
        <ul>
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
};;
`

  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Keys</h1>
          <span className='cent'>Ключи</span> (keys) в React используются для идентификации уникальных элементов в списке. Они помогают React оптимизировать процесс рендеринга компонентов, обеспечивая более эффективное обновление и перерисовку интерфейса при изменении данных.

          <p>В React, когда вы отображаете массив элементов с помощью метода map, каждый элемент списка должен иметь уникальный ключ. Ключи позволяют React определить, какие элементы были добавлены, изменены или удалены.</p>

          <p className='cent'>Вот несколько ключевых моментов касательно ключей в React:</p>
          <p>
            <span className='centTxt'>Уникальность:</span> Ключи должны быть уникальными в пределах одного списка. Два элемента в одном и том же массиве не могут иметь одинаковые ключи.
          </p><p>
            <span className='centTxt'>Стабильность:</span> Ключи должны оставаться стабильными между рендерингами. Изменение ключей может привести к полному перерендериванию элемента, даже если его данные остаются неизменными.
          </p><p>
            <span className='centTxt'>Использование в качестве хэша:</span> React использует ключи для определения, какие элементы изменились, добавились или удалены. Это делает процесс обновления DOM более эффективным.
          </p>
          <h3>Пример использования ключей в React:</h3>
          <div className='code'>
            <pre>
              <code>
                {prim1}
              </code>
            </pre> </div>
          <KeysRout />
          <p>В этом примере  generateRandomKey создает строку из двух случайных букв и одной случайной цифры. Эта строка используется в качестве уникального ключа для каждой задачи.</p>
        </div>
      </div>


    </Layout>
  );
};

export default Key;