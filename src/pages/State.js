import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import RoutState from './RoutState.js'
import './PagesCss/Pages.css'

const State = () => {
  const prim1 = `
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
`
  const prim2 = `
import React, { useState } from 'react';

const Counter = () => {
  import React, { useState } from 'react';
  import './RoutState.css'

  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);// тут мы увеличиваем наш счетчик  на один
    };
    const decrement = () => {
      if (count > 0) { // задаем зависимость(счётчик не должен быть меньше 0)
          setCount(count - 1);// если условие выполнено, уменьшаем
        }
    };
  
    return (
  <div className="counter-container">
        <button className="round-button" onClick={decrement}>-1</button>
        <p className="count-display">Счётчик: {count}</p>
        <button className="round-button" onClick={increment}>+1</button>
      </div>
    );
  };
  
  export default Counter;
`
  const prim3 = `
class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = { username: 'johndoe' }
  }
  render() {
      return (
          <div> { this.state.username } </div>
      )
  }
}`
  const prim4 = `
this.setState({username:'Mark'});
`
  const prim5 = `
this.setState(() => ({ username: 'Mark' }))</p>      
      </div>
    </div>
  </Layout>
);
  
}
`
  const prim6 = `
setState(newState, callback);`
  return (
    <Layout>
      {/* Ваш контент страницы Page2 здесь */}
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">State</h1>
          State в React представляет собой объект, который используется для хранения данных внутри компонента. Когда state изменяется, React автоматически перерисовывает компонент, чтобы отобразить обновленное состояние. State играет ключевую роль в создании интерактивных и динамических пользовательских интерфейсов.

          В React-классах state объявляется внутри конструктора с использованием this.state, а в функциональных компонентах можно использовать useState из хука.

          <p className="centTxt">Пример использования state в классовом компоненте:</p>
          <div className='code'>
            <pre><code>{prim1}</code></pre>
          </div>
          <p className="cen"> <RoutState /> </p>
          <p className="centTxt">Пример использования state в функциональном компоненте с хуком useState:</p>
          <div className='code'>
            <pre><code>{prim2}</code></pre>
          </div>

          <p>В этих примерах мы создаем простой счетчик, используя state. Когда кнопка "Increment" нажата, значение счетчика увеличивается, и React автоматически обновляет интерфейс для отображения нового значения. Это демонстрирует основной принцип работы state в React - обновление state приводит к перерисовке компонента.</p>
          <p className="centTxt">Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.
          </p>
          <div className='code'>
            <pre><code>{prim3}</code></pre>
          </div>


          <p className="cent">
            Единственный допустимый способ обновления состояния компонента – через setState().</p>
          <p className="centTxt">
            Так нельзя менять состояние: this.state.username='Mark'</p>
          <p className="cent">
            1-ый способ изменить state:</p>
          <div className='code'>
            <pre><code>{prim4}</code></pre>
          </div>

          <p className="cent">
            2-ой способ изменить state:</p>
          <div className='code'>
            <pre><code>{prim5}</code></pre>
          </div>
          <p className="cent">Параметры setState?</p>
          <p className="cent">setState принимает два параметра: </p>
          <span className="centTxt">новое значение состояния </span>
          и, необязательно,<span className="centTxt"> колбэк-функцию </span>, которая будет вызвана после завершения обновления состояния и рендеринга компонента.

          <div className='code'>
            <pre><code>{prim6}</code></pre>
          </div>
          <span className="cent">newState:</span> Новое значение состояния, которое нужно установить. Может быть объектом или функцией.
          <p><span className="cent"> callback (необязательно): Функция, которая будет вызвана после завершения обновления состояния и рендеринга компонента. Это может быть полезно, если вам нужно выполнить какой-то код после того, как состояние было успешно обновлено.
          </span></p>
          <p className="cent">Что происходит, когда вы вызываете setState?</p>
          <span className="cent">Когда </span>setState вызывается, React планирует обновление состояния компонента и перерисовку. Обновление состояния может быть асинхронным, и React может объединять несколько вызовов setState в одно обновление для оптимизации производительности.
        </div></div>
    </Layout>)
}

export default State;