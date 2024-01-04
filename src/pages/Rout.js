import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css'

const Rout = () => {
  const prim1 = `
// Home.js
import React from 'react';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page!</p>
  </div>
);

export default Home;


// About.js
import React from 'react';

const About = () => (
  <div>
    <h2>About Us</h2>
    <p>Learn more about our company and mission.</p>
  </div>
);

export default About;


// Contact.js
import React from 'react';

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>Get in touch with us!</p>
  </div>
);

export default Contact;
`
  const prim2 = `npm install react-router-dom`
  const prim3 = `
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
`
  const prim4 = `
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/Propses" element={<Propses />} />
        {/* ... и так далее */}
      </Routes>
    </Router>
  );
};

`
  const prim1_1 = `
<Route path="/example" element={<ExampleComponent />} />
`
  const prim1_2 = `
<Route index element={<Home />} />
`
  const prim1_3 = `
<Route path="/CaseSensitive" element={<CaseSensitiveComponent />} caseSensitive />
`
  const prim1_4 = `
<Route path="/parent" element={<ParentComponent />}>
<Route path="child1" element={<Child1Component />} />
<Route path="child2" element={<Child2Component />} />
</Route>

`
  const prim1_5 = `
<Routes notfound={<NotFoundComponent />} />
`
  const prim1_6 = `
<Route path="/private" element={<PrivateComponent />} access={isUserLoggedIn} />
`
  return (
    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Roter</h1>
          <p>В React, для управления маршрутизацией часто используется библиотека react-router-dom. С её помощью вы можете определить различные маршруты в вашем приложении.</p>
          <p className='cent'>Вот пример использования маршрутизации с помощью react-router-dom:</p>
          <p className='centTxt'>Установливаем библиотеку:</p>
          <div className='code'>
            <pre><code>{prim2}</code></pre>
          </div>
          <p className='centTxt'>Создаём файл с компонентами, которые будут отображаться на различных маршрутах. Например, Home.js, About.js и Contact.js.</p>
          <div className='code'><pre><code>{prim1}</code></pre>
          </div>
          <p className='centTxt'>1.Создаём основной компонент для маршрутизации (App.js):</p>
          <div className='code'><pre><code>{prim3}</code></pre>
          </div>
          <p>
            В этом примере Switch используется для того, чтобы только один Route был сопоставлен. Это особенно полезно, когда у вас есть много маршрутов, и вы хотите, чтобы сопоставился только первый найденный маршрут. Switch останавливает обработку маршрутов, когда найден первый соответствующий.
          </p><p>
            Так что в большинстве случаев можно обойтись без обертывания всего в Switch и использовать Route напрямую. Просто обратив внимание, что порядок маршрутов важен. Более конкретные маршруты должны быть размещены перед более общими, чтобы избежать неправильного сопоставления
          </p>
          <p>
            В новой версии react-router-dom (версии 6 и выше), вместо компонента Switch используется компонент Routes. Routes предоставляет новый способ определения маршрутов, и он является более мощным и гибким по сравнению с Switch.
          </p><p>
            Ранее, в версии 5, могли использовать Switch для того, чтобы обернуть ваши маршруты и гарантировать, что будет выбран только один из них. Однако в версии 6 этот компонент устарел в пользу более универсального Routes, который предоставляет более продвинутые возможности конфигурации.
          </p><p className='centTxt'>
            Итак, в новой версии рекомендуется использовать Routes вместо Switch.
          </p>
          <div className='code'><pre><code>{prim4}</code></pre>
          </div>
          <p>Этот подход более гибок и позволяет вам легко добавлять дополнительные опции и свойства к маршрутам.</p>
          <p className='cent'>Например</p>
          <p>
            <span className='centTxt'>1.element:</span>Определяет элемент React, который будет отображен, когда соответствующий маршрут совпадет. Это заменяет component из предыдущей версии.
          </p>
          <div className='code'><pre><code>{prim1_1}</code></pre>
          </div>
          <p>
            <span className='centTxt'>2.index</span> Определяет дочерний элемент, который будет использоваться в случае, если путь соответствует корневому пути.
          </p>
          <div className='code'><pre><code>{prim1_2}</code></pre>
          </div>
          <p>
            <span className='centTxt'>3.caseSensitive:</span>Устанавливает, является ли маршрут чувствительным к регистру. </p>
          <div className='code'><pre><code>{prim1_3}</code></pre>
          </div>
          <p>
            <span className='centTxt'>4.children:</span>Позволяет определить вложенные маршруты внутри родительского маршрута.</p>
          <div className='code'><pre><code>{prim1_4}</code></pre>
          </div>
          <p>
            <span className='centTxt'>5.notfound:</span> Определяет элемент, который будет отображаться, если ни один из маршрутов не совпадает.</p>
          <div className='code'><pre><code>{prim1_5}</code></pre>
          </div>
          <p>
            <span className='centTxt'>6.access:</span>Позволяет определить условия доступа к маршруту.</p>
          <div className='code'><pre><code>{prim1_6}</code></pre>
          </div>
          <p>Это только небольшой набор возможностей, предоставляемых Routes. Дополнительные опции и свойства позволяют более гибко настраивать поведение маршрутов в вашем приложении.</p>
        </div>
      </div>
    </Layout>
  );
}
export default Rout;