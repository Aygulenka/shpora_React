import React from 'react';
import shpora from './shpora.jpeg';
import Layout from './Layout';

const HomePage = () => (
  <Layout>
    {/* Ваш контент страницы Page2 здесь */}
    <div className="contentHome">
      <div className="image-container">
        <img src={shpora} alt="Путь странника" />
      </div>
    </div>
  </Layout>
);

export default HomePage;