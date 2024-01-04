import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css'

const Propses = () => {
  const prim1 = `// Родительский компонент
<ChildComponent prop1="Значение1" prop2="Значение2" />`
  const prim2 = `// Дочерний компонент
const ChildComponent = (props) => {
  return (
    <div>
      <p>Проп1: {props.prop1}</p>
      <p>Проп2: {props.prop2}</p>
    </div>
  );
};`
  const prim3 = `// Родительский компонент
class ParentComponent extends React.Component {
  render() {
    return <ChildComponent prop1="Значение1" prop2="Значение2" />;
  }
}

// Дочерний компонент
class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Проп1: {this.props.prop1}</p>
        <p>Проп2: {this.props.prop2}</p>
      </div>
    );
  }
}`
  const prim4 = `// Родительский компонент
const ParentComponent = () => {
  return <ChildComponent prop1="Значение1" prop2="Значение2" />;
};

// Дочерний компонент
const ChildComponent = (props) => {
  return (
    <div>
      <p>Проп1: {props.prop1}</p>
      <p>Проп2: {props.prop2}</p>
    </div>
  );
};`
  const prim5 = `const ChildComponent = ({ prop1, prop2 }) => {
  return (
    <div>
      <p>Проп1: {prop1}</p>
      <p>Проп2: {prop2}</p>
    </div>
  );
};`
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Props</h1>

          Пропсы (props) в React представляют собой механизм передачи данных от родительских компонентов к дочерним компонентам. "Пропсы" - это сокращение от "properties" (свойства). Использование пропсов позволяет вам передавать информацию в компоненты и делает компоненты более конфигурируемыми и переиспользуемыми.
          <p className="cent">Как работают пропсы:</p>
          <p className="centTxt"> 1. Передача пропсов:</p>
          <p>Пропсы передаются как атрибуты в JSX-элементах в момент создания экземпляра компонента. Пример:</p>
          <p className='code'>
            <pre><code>{prim1}</code></pre>
          </p>
          prop1 и prop2 - это пропсы, переданные компоненту ChildComponent.
          <p className="centTxt">2. Использование пропсов:</p>
          <p>Внутри дочернего компонента пропсы доступны через объект props. Пример:</p>

          <p className='code'>
            <pre><code>{prim2}</code></pre>
          </p>
          <p className="cent">Примеры передачи пропсов:</p>
          <p>Классовый компонент:</p>
          <p className='code'>
            <pre><code>{prim3}</code></pre>
          </p>
          Функциональный компонент:
          <p className='code'>
            <pre><code>{prim4}</code></pre>
          </p>
          <p className="cent">Деструктуризация пропсов:</p>
          В функциональных компонентах можно использовать деструктуризацию аргумента props, чтобы избежать повторных обращений к props. Пример:
          <p className='code'>
            <pre><code>{prim5}</code></pre>
          </p>
          <p>
            Такой подход делает код более читаемым и экономит символы.
          </p>
          <p className="cent">
            Преимущества использования пропсов:
          </p> <p className="centTxt">Переиспользование компонентов:</p>
          <p>Пропсы позволяют создавать универсальные компоненты, которые можно использовать в разных частях приложения.</p>
          <p className="centTxt">Конфигурируемость:</p>
          <p> Пропсы предоставляют способ конфигурировать компоненты в зависимости от их использования.</p>
          <p className="centTxt">Динамическое изменение данных:</p>
          <p>Пропсы могут изменяться с течением времени, что позволяет создавать динамичные интерфейсы.</p>
          <p className="centTxt">Пропсы являются ключевой концепцией в React и играют важную роль в разработке компонентов.</p>

          <p className="cent">Какие проблемы могут возникнуть при изменении пропсов внутри компонента?</p><p>
            Изменение пропсов внутри компонента может привести к непредсказуемому поведению и проблемам, таким как:</p>

          <p className="centTxt">Нежелательные эффекты: </p>
          <p>Изменения пропсов могут повлиять на состояние компонента, вызвав нежелательные побочные эффекты.</p>
          <p className="centTxt">Небезопасные обновления:</p>
          <p> Изменение пропсов напрямую может привести к небезопасным обновлениям, если не учитывать методы жизненного цикла компонента.</p>
          <p className="centTxt">Нарушение концепции управляемых компонентов: </p>
          <p>Пропсы должны оставаться неизменяемыми внутри компонента, чтобы следовать принципам управляемых компонентов.</p>




        </div>
      </div>
    </Layout>
  )
}


export default Propses;
