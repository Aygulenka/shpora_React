import React from 'react';
import Layout from '../Layout';
import './PagesCss/Pages.css'

const ReactMemo = () => {

  const prim1 = `
  import React from 'react';

// Обычный функциональный компонент
const MyComponent = ({ name }) => {
  console.log('Rendering MyComponent');
  return <div>{name}</div>;
};

// Оптимизированный компонент с использованием React.memo
const MemoizedMyComponent = React.memo(MyComponent);

// Использование в приложении
const App = () => {
  const data = 'Hello, React!';

  return (
    <div>
      {/* Обычный MyComponent */}
      <MyComponent name={data} />

      {/* Оптимизированный MemoizedMyComponent */}
      <MemoizedMyComponent name={data} />
    </div>
  );
};

export default App;

  `

  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">React.memo</h1>
          <p>
            React.memo - это функция высшего порядка (HOC) в React, которая позволяет оптимизировать производительность функциональных компонентов путем предотвращения их лишнего повторного рендеринга.
          </p>
          <p>
            Обычно React компоненты перерендериваются при изменении их пропсов или состояния. Однако в некоторых случаях это поведение может быть избыточным, особенно если компонент не зависит от изменений входных данных и не выполняет какой-то дорогостоящей логики внутри функции render.
          </p>
          <p>
            React.memo решает эту проблему, кэшируя результат рендеринга компонента и повторно используя его, если входные данные (пропсы) остаются неизменными.
          </p>
          <p className='centTxt'>
            Пример использования React.memo:
          </p>
          <div className='code'>
            <pre><code>{prim1}</code></pre>
          </div>
          <p>
            В этом примере, если data не изменяется, компонент MemoizedMyComponent не будет повторно рендериться, что может улучшить производительность в случаях, когда это необходимо.
          </p>
        </div>
      </div>
    </Layout>
  );
}
export default ReactMemo;