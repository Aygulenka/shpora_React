// Page1.js
import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Components.css'

const Components = () => {
  const codePrim1 =
    `import React, { Component } from 'react';
    class Container extends Component {
      render() {
        return (
          <div>
            <h2>Container Component</h2>
            <MyComponent />
         </div>
        );
    }
    }
    export default Container;`

  const codePrim2 = `import React, { Component } from 'react';

  class Form extends Component {
   render() {
     return (
       <form>
         <InputField />
         <SubmitButton />
       </form>
     );
   }
  }
  
  export default Form;`
  const codePrim1_2 = `import React from 'react';
  const Container = () => {
    return (
      <div>
      <h2>Container Component</h2>
      <MyComponent />
    </div>
    )
  }`
  const codePrim2_2 = `
  import React from 'react';
  const Form = () =>{
    return(
      <form>
         <InputField />
         <SubmitButton />
       </form>
    )
  }`
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Component</h1>
          Component в React представляет собой переиспользуемый строительный блок для создания интерфейса приложения. Он может содержать свой собственный состояние, методы жизненного цикла и стили, делая код более модульным и легко поддерживаемым. Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране. Компоненты могут быть классовыми или функциональными.
        </div>
        <div className="table-container">
          <table>
            <tbody>
              <tr className="centre">
                <td colSpan="2">Классовый компонент</td>
                <td colSpan="2">Функциональный компонент</td>
              </tr>
              <tr className="centre">
                <td colSpan="4">Контейнер для Компонентов:</td>
              </tr>
              <tr>
                <td colSpan="2"><pre>
                  <code>{codePrim1}</code></pre></td>
                <td colSpan="2"><pre>
                  <code>{codePrim1_2}</code></pre></td>
              </tr>
              <tr className="centre">
                <td colSpan="2">Классовый компонент</td>
                <td colSpan="2">Функциональный компонент</td>
              </tr>
              <tr className="centre">
                <td colSpan="4">Форма с Вложенными Компонентами</td>
              </tr>
              <tr>
                <td colSpan="2"><pre>
                  <code>{codePrim2}</code></pre></td>
                <td colSpan="2"><pre>
                  <code>{codePrim2_2}</code></pre></td>
              </tr>
            </tbody>
          </table>
          <div className="text">
            Компонента должна себя вести как чистая функция.“Чистой” называется функция, которая:
            <p>1. Для одинаковых входных данных всегда возвращает один результат.</p>
            <p>2. Не имеет побочных эффектов (то есть не изменяет внешние состояния).</p>
            <p>3. Не зависит от внешних состояний. </p></div>
        </div>
      </div>
    </Layout>
  );

}



export default Components;