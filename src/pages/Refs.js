import React, { useState, useRef } from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css';

const Refs = () => {
  const myRef = useRef();
  const [isAnimating, setAnimating] = useState(false);

  const startAnimation = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000); // Продолжительность анимации в миллисекундах
  };
  const prim1 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div ref={this.myRef}>Это мой элемент</div>;
  }
}`
  const prim2 = `const myRef = React.useRef();`
  const prim3 = `const node = this.myRef.current;`
  const prim4 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <ChildComponent ref={this.myRef} />;
  }
}

const ChildComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>Это дочерний компонент</div>
));`
  const prim5 = `class FocusableInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />;
  }
}`
  const prim6 = `const myRef = React.useRef();`
  const prim7 = `const myRef = (node) => {
  // node - ссылка на DOM-элемент
};
return <div ref={myRef}>Это мой элемент</div>;`
  const prim8 = `const Refs = () => {
  const myRef = useRef(); // Создание рефа с использованием хука useRef
  const [isAnimating, setAnimating] = useState(false); // Состояние для управления анимацией

  const startAnimation = () => {
    setAnimating(true); // Установка флага анимации в true
    setTimeout(() => {
      setAnimating(false); // Сброс флага анимации после завершения таймера (через 1 секунду)
    }, 1000); // Продолжительность анимации в миллисекундах
  };

  return (
    <div className="contentHome">
      <div className="text">
        <h1 className="centre">Ref</h1>
        {/* Ваш остальной контент */}
        <div
          ref={myRef} // Привязка рефа к элементу div
          className={animated-element (тут значок доллара){isAnimating ? 'animate' : ''}} 
          // Динамическое присваивание классов для анимации, строка в обратн ковычках
          onClick={startAnimation} // Обработчик клика для запуска анимации
        >
          Это мой элемент
        </div>
      </div>
    </div>
  );
};
`
  return (
    <Layout>
      {/* Ваш контент страницы Page2 здесь */}
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Ref</h1>
          <p>  ref в React представляет собой объект, который ссылается на созданный React-элемент или компонент в дереве виртуального DOM. Он предоставляет способ взаимодействия с этим элементом или компонентом непосредственно. Вот несколько ключевых моментов, связанных с использованием ref:</p>
          <p>ref следует использовать осторожно, поскольку он может нарушить принципы однонаправленного потока данных в React. В большинстве случаев стоит избегать его использования, полагаясь на передачу данных через пропсы. Однако, в определенных сценариях, например, при работе с фокусировкой, анимациями или интеграцией с внешними библиотеками, ref может быть полезным инструментом.</p>
          <p className="cent">Создание Refs:</p>
          <span className="centTxt">С помощью React.createRef(): Этот метод создает объект ref и присваивает его свойству элемента, который вы хотите получить.</span>
          <p className='code'>
            <pre><code>{prim1}</code></pre>
          </p>
          <span className="centTxt">С использованием функции обратного вызова: В функциональных компонентах и начиная с React 16.3, вы также можете использовать функцию обратного вызова ref:</span>
          <p className='code'>
            <pre><code>{prim2}</code></pre>
          </p>
          <p className="cent">Использование Refs:</p>
          <span className="centTxt">Чтение значения: После создания ref вы можете обратиться к свойству current, чтобы получить доступ к соответствующему элементу или компоненту.</span>
          <p className='code'>
            <pre><code>{prim3}</code></pre>
          </p>
          <span className="centTxt">Присваивание ref компоненту:</span>
          <p className='code'>
            <pre><code>{prim4}</code></pre>
          </p>
          <p className="cent">Использование ref для фокусировки:</p>
          <p className='code'>
            <pre><code>{prim5}</code></pre>
          </p>
          <p className="cent">ref в функциональных компонентах:</p>
          <span className="centTxt">С использованием useRef:</span>
          <p className='code'>
            <pre><code>{prim6}</code></pre>
          </p>
          <span className="centTxt">С использованием колбэка:</span>
          <p className='code'>
            <pre><code>{prim7}</code></pre>
          </p>
          <div
            ref={myRef}
            className={`animated-element ${isAnimating ? 'animate' : ''}`}
            onClick={startAnimation}
          > Это мой элемент который при клике меняет цвет благодаря Ref
            и вот код
          </div>
          <p className='code'>
            <pre><code>{prim8}</code></pre>
          </p>
        </div>
      </div>
    </Layout>
  );
}
export default Refs;

// ref в React используется для следующих целей:

// Доступ к DOM-элементам:

// ref позволяет получить доступ к реальному DOM-элементу после того, как компонент был создан и внесен в DOM. Это может быть полезно, например, при необходимости изменить фокус, размер или другие свойства элемента напрямую.
// Управление фокусом:

// ref используется для программного управления фокусом. Вы можете использовать ref для фокусировки на определенном элементе при монтировании компонента или при выполнении определенных действий.
// Интеграция с внешними библиотеками:

// Некоторые библиотеки и инструменты могут требовать прямого доступа к DOM-элементам для своей работы. Используя ref, вы можете предоставить им этот доступ.
// Анимации:

// При использовании некоторых библиотек анимаций или создании своих анимаций с использованием CSS, ref может быть полезным для запуска анимаций или управления ими.
// Измерение размеров элементов:

// ref может использоваться для измерения размеров элементов после их рендеринга. Это может быть полезно, например, при создании адаптивных интерфейсов.
// Интеграция с Legacy-кодом:

// При интеграции React в существующий Legacy-код, где манипуляции с DOM проводятся напрямую, ref может быть полезным для пошаговой миграции.
// Коммуникация между компонентами:

// ref может использоваться для создания связи между родительским и дочерними компонентами, хотя в большинстве случаев рекомендуется использовать проксирующие пропсы.
// Однако, следует помнить, что использование ref может нарушить принципы React и увеличить сложность отслеживания состояния приложения. В большинстве случаев стоит предпочесть передачу данных через пропсы, чтобы сохранить однонаправленный поток данных.