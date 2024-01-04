import React from 'react';
import Layout from '../Layout';
import './PagesCss/Pages.css'

const Cont = () => {
  const prim1 = `
  import React, { createContext, useContext, useState } from 'react';

// Создаем объект контекста
const MyContext = createContext();

// Компонент-поставщик, оборачивающий все дочерние компоненты
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('Информация из контекста');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

// Компонент, использующий данные из контекста
const MyComponent = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData('Новая информация')}>Обновить данные</button>
    </div>
  );
};

// Оборачиваем все в компонент-поставщик
const App = () => {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
};

export default App;

  `
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Context</h1>
          <p>
            Контекст (Context) в React представляет собой механизм передачи данных через дерево компонентов без явной передачи пропсов от компонента к компоненту. Это особенно полезно, когда несколько компонентов должны иметь доступ к одним и тем же данным. </p>
          <p>Context состоит из двух частей:<span className='CentTxt'> Provider (поставщик)</span>и <span className='CentTxt'> Consumer (потребитель).</span></p>
          <p className='centTxt'>Пример использования Context:</p>
          <div className='code'>
            <pre><code>{prim1}</code></pre>
          </div>
          <p>В этом примере<span className='CentTxt'>MyContextProvider </span>является поставщиком контекста, который оборачивает все дочерние компоненты.<span className='CentTxt'> MyComponent</span> использует данные из контекста с помощью<span className='CentTxt'> useContext(MyContext)</span> и отображает их, а также предоставляет кнопку для обновления данных.</p>
          <p>Обратите внимание, что компоненты, использующие контекст, должны быть вложены в компонент-поставщик контекста.</p>
        </div>
      </div>
    </Layout>
  );
}

export default Cont;