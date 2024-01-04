import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css'

const Frag = () => {
  const prim1 = `
import React from 'react';

const MyComponent = () => {
  return (
    <React.Fragment>
      <h1>Заголовок</h1>
      <p>Параграф 1</p>
      <p>Параграф 2</p>
    </React.Fragment>
  );
};

export default MyComponent;
`
  const prim2 = `
import React from 'react';

const MyComponent = () => {
  return (
    <>
      <h1>Заголовок</h1>
      <p>Параграф 1</p>
      <p>Параграф 2</p>
    </>
  );
};

export default MyComponent;
`;
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Fragment</h1>
          <p>
            React.Fragment - это компонент React, который позволяет группировать несколько дочерних элементов без необходимости создавать дополнительные уровни в DOM.
          </p>
          <p>
            Прежде чем появления React.Fragment, если вы хотели группировать элементы, но не создавать лишних DOM-узлов, вы использовали обертывающие теги (например, `div`). Однако, это могло привести к проблемам, особенно в ситуациях, когда дополнительный уровень DOM-элементов не требовался.

            React.Fragment решает эту проблему, предоставляя способ группировки элементов без введения дополнительного уровня в DOM. Это особенно полезно, например, при возвращении списка элементов из компонента или при компоновке компонентов, не добавляя лишние обертывающие теги.
          </p>
          <p className='centTxt'>
            Пример использования React.Fragment:
          </p>
          <div className="code">
            <pre>
              <code>
                {prim1}
              </code>
            </pre>
          </div>
          <p className='centTxt'>
            Или его сокращенный синтаксис с использованием пустых угловых скобок <> и </>:
          </p>
          <div className="code">
            <pre>
              <code>
                {prim2}
              </code>
            </pre>
          </div>
          <p>
            Оба варианта делают то же самое - группируют несколько элементов без введения дополнительных уровней в DOM.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Frag;