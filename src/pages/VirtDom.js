import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Pages.css'

const VirtDom = () => (
  <Layout>
    {/* Ваш контент страницы Page2 здесь */}
    <div className="contentHome">
      <div className="text">
        <h1 className="centre">Virtual Dom</h1>
        <p>
          Virtual DOM (Document Object Model) - это концепция, используемая в библиотеках и фреймворках JavaScript, таких как React. Она представляет собой абстрактное представление реального DOM, которое существует в памяти и является легковесной копией реального DOM. </p>
        <p className="cent">Вот как это работает в контексте React:</p>
        <p>
          <span className='centTxt'>Изменения в состоянии и данных:</span> Когда данные в приложении изменяются или происходит какое-то событие, React создает новое виртуальное представление DOM, которое отражает эти изменения.
        </p>
        <p>
          <span className='centTxt'>Сравнение виртуального DOM:</span>React сравнивает новое виртуальное представление с предыдущим, сохраненным в памяти.</p>
        <p>
          <span className='centTxt'>Выявление различий (Reconciliation):</span>
          React определяет различия между новым и предыдущим виртуальным DOM. Этот процесс называется согласованием (reconciliation).</p>
        <p> <span className='centTxt'>Генерация минимальных изменений:</span>
          React выявляет минимальный набор изменений, необходимых для обновления реального DOM так, чтобы он соответствовал новому виртуальному представлению.</p>
        <p>
          <span className='centTxt'>Обновление реального DOM: </span>Только те части реального DOM, которые действительно изменились, обновляются. Это делает процесс более эффективным по сравнению с обновлением всего DOM.</p>
      </div>
    </div>
  </Layout>
);

export default VirtDom;