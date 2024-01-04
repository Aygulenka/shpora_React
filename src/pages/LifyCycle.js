import React, { useState, useEffect, useRef } from 'react';
import Layout from '../Layout';
import './PagesCss/Pages.css';

const LifeCycle = () => {
  const [showCode, setShowCode] = useState(true);
  const componentRef = useRef(null); // Создание ref

  useEffect(() => {
    console.log("Component is mounted!");

    return () => {
      console.log("Component will unmount!");
      // Очистка ресурсов, отписка от событий, отмена сетевых запросов
    };
  }, []);

  const handleDelete = () => {
    setShowCode(false);
    
    // Размонтирование компонента с использованием ref
    if (componentRef.current) {
      componentRef.current = null;
    }
  };

  const handleRestore = () => {
    setShowCode(true);
  };
  const prim1 =
  `class ExampleComponent extends React.Component {
  componentDidMount() {
    console.log("Component is mounted!");
    // Можно выполнять загрузку данных или другие инициализационные действия
  }

  render() {
    return <div>Example Component</div>;
  }
}
`
const prim2 =
  `class ExampleComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Component is updated!");
    // Можно выполнять действия после обновления компонента
  }

  render() {
    return <div>Example Component</div>;
  }
}

`
const prim3 =
  `  class ExampleComponent extends React.Component {
  componentWillUnmount() {
    console.log("Component will unmount!");
    // Очистка ресурсов, отписка от событий, отмена сетевых запросов
  }

  render() {
    return <div>Example Component</div>;
  }
}


//Функциональная реализация кода
const [showCode, setShowCode] = useState(true);
useEffect(() => {
  return () => {
    console.log("Component will unmount!");
    // Очистка ресурсов, отписка от событий, отмена сетевых запросов
  };
}, []);

const handleDelete = () => {
  setShowCode(false);
};

const handleRestore = () => {
  setShowCode(true);
};
return(
  {showCode && (
    <div>
    </div>
        )}
        <button onClick={handleDelete}>Удалить</button>
        <button onClick={handleRestore}>Вернуть</button>
  
)
`
const prim4 =
  `class ExampleComponent extends React.Component {
  componentWillUnmount() {
    console.log("Component will unmount!");
    // Очистка ресурсов, отписка от событий, отмена сетевых запросов
  }

  render() {
    return <div>Example Component</div>;
  }
}  
`
const prim5 =
  `class ExampleComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Вернуть true, если компонент должен обновиться, и false в противном случае
    return nextProps.someProp !== this.props.someProp;
  }

  render() {
    return <div>Example Component</div>;
  }
}  
`
const prim6 =  `import React, { useEffect } from "react";
const ExampleComponent = () => {
  useEffect(() => {
    console.log("Component is mounted or updated!");
    // Заменяет componentDidMount и componentDidUpdate
    // Можно выполнять побочные эффекты, такие как загрузка данных
  }, []); // Пустой массив зависимостей указывает, что эффект нужно выполнить только при монтировании

  return <div>Example Component</div>;
};`
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
        <h1 className="centre">LifyCycle</h1>
          <p className="cent"> Методы жизненного цикла в классовой компоненте:</p>
          <p className="centTxt">componentDidMount</p>
          <p className='code'>
            <pre><code>{prim1}</code></pre>
          </p>
          <p>
            <span className="centTxt"> Описание: </span> Вызывается сразу после монтирования компонента (то есть, когда компонент впервые добавляется в DOM).
          </p><p>
            <span className="centTxt"> Использование: </span> Здесь можно выполнять загрузку данных, подписываться на внешние события и делать другие инициализационные шаги.
          </p>
          <p className="centTxt">componentDidUpdate</p>
          <p className='code'>
            <pre><code>{prim2}</code></pre>
          </p>
          <p>
            <span className="centTxt"> Описание: </span> Вызывается сразу после обновления компонента. Этот метод вызывается как при обновлении через setState, так и при изменении props.
          </p><p>
            <span className="centTxt"> Использование: </span> Полезен для выполнения действий после обновления компонента, таких как сетевые запросы на основе новых данных.
          </p>
           <p className="centTxt">shouldComponentUpdate</p>
          <p className='code'>
            <pre><code>{prim4}</code></pre>
          </p>
          <p><span className="centTxt"> Описание: </span> Вызывается перед обновлением компонента. Возвращает true или false в зависимости от того, нужно ли компоненту обновиться.
          </p>
          <p><span className="centTxt"> Использование: </span> Позволяет оптимизировать производительность, избегая лишних перерисовок.
          </p>
          <p className="cent">Ограничения в методе render классовой компоненты:</p>
          <p className='code'>
            <pre><code>{prim5}</code></pre>
          </p>
          <p className="centTxt">Не следует изменять состояние (state) напрямую в методе render.</p>
          <p className="centTxt">Не рекомендуется выполнять сетевые запросы напрямую в render.</p>
          <p className="cent">Методы жизненного цикла в функциональной компоненте (с использованием хуков):</p>
          <p className="centTxt">useEffect</p>
          <p className='code'>
            <pre><code>{prim6}</code></pre>
          </p>
          <p><span className="centTxt"> Описание: </span> Позволяет выполнять побочные эффекты в функциональных компонентах.
          </p>
          <p><span className="centTxt"> Использование: </span> Заменяет методы componentDidMount, componentDidUpdate, и componentWillUnmount из классовых компонент.
          </p>
          <p className="centTxt">componentWillUnmount</p>
          <button className="btn" onClick={handleDelete}>Удалить</button>
          <button className="btn" onClick={handleRestore}>Вернуть</button>

          {showCode && (
            <div ref={componentRef}>

<p className='code'>
  <pre><code>{prim3}</code></pre>
</p>
<p><span className="centTxt"> Описание: </span>  Вызывается перед тем, как компонент будет удален из DOM.</p>
<p><span className="centTxt"> Использование: </span>Подходит для очистки ресурсов, отписки от событий или отмены сетевых запросов.
</p>
</div>

          )}
        </div>
      </div>
    </Layout>
  );
};

export default LifeCycle;
