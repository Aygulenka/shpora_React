import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css'

const UsEf = () => {
  const prim1 = `
  import React, { useEffect } from 'react';

const MyComponent = () => {
  // useEffect принимает два аргумента: функцию (эффект) и массив зависимостей
  useEffect(() => {
    // Код для выполнения побочного эффекта
    console.log('Effect is running');

    // Возвращаем функцию очистки, которая будет вызвана при размонтировании компонента
    return () => {
      console.log('Effect cleanup');
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только при монтировании и размонтировании компонента

  return <div>My Component</div>;
};

export default MyComponent;

  `
  const prim2 = `
  // Пример с загрузкой данных при монтировании компонента
useEffect(() => {
  const fetchData = async () => {
    const result = await api.getData();
    setData(result);
  };

  fetchData();
}, []); // Пустой массив - эффект будет выполнен при монтировании компонента

// Пример с обновлением данных при изменении пропсов
useEffect(() => {
  setData(props.data);
}, [props.data]); // Зависимость от переменной props.data
  `
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">useEffect</h1>
          <p>

            useEffect - это хук в React, который предоставляет возможность выполнять побочные эффекты в функциональных компонентах. Побочные эффекты могут быть, например, запросы к API, подписки на события, изменения в DOM и т. д.
          </p>
          <p className='centTxt'>
            Синтаксис useEffect следующий:
          </p>
          <div className='code'>
            <pre><code>{prim1}</code></pre>
          </div>
          <p className='cent'>
            Основные моменты:
          </p>
          <p>
            <span className='centTxt'> 1.Функция эффекта: </span>Первый аргумент useEffect - это функция, которая содержит код для выполнения побочного эффекта.
          </p>
          <p>
            <span className='centTxt'> 2.Массив зависимостей:  </span>  Второй аргумент - массив зависимостей. Если массив пуст, эффект будет выполняться только при монтировании и размонтировании компонента. Если в массиве есть зависимости (например, переменные из контекста
          </p>
          <p>
            <span className='centTxt'> 3.Функция очистки:  </span>Если возвращается функция из функции эффекта, она будет вызвана при размонтировании компонента. Это место для выполнения необходимых действий по очистке, таких как отмена подписок или очистка ресурсов.
          </p>
          <p className='cent'>
            Примеры использования:
          </p>
          <div className='code'>
            <pre><code>{prim2}</code></pre>
          </div>
          <p>
            useEffect предоставляет удобный способ управления побочными эффектами в функциональных компонентах и заменяет жизненные циклы в классовых компонентах.
          </p>
          {/* Ваш контент страницы */}
        </div>
      </div>
    </Layout>
  );
}
export default UsEf;