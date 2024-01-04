import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Components from './pages/Components';
import Propses from './pages/Propses';
import State from './pages/State';
import LifyCycle from './pages/LifyCycle';
import Events from './pages/Events';
import Key from './pages/Key';
import Refs from './pages/Refs';
import AsynchronousReq from './pages/AsynchrounousReq';
import VirtDom from './pages/VirtDom';
import Frag from './pages/Frag';
import ReactMemo from './pages/ReactMemo';
import UsEf from './pages/UsEf';
import Rout from './pages/Rout';
import Cont from './pages/Cont';
import Form from './pages/Form';
import './layout.css'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/Propses" element={<Propses />} />
        <Route path="/State" element={<State />} />
        <Route path="/LifyCycle" element={<LifyCycle />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Key" element={<Key />} />
        <Route path="/Refs" element={<Refs />} />
        <Route path="/AsynchronousReq" element={<AsynchronousReq />} />
        <Route path="/VirtDom" element={<VirtDom />} />
        <Route path="/Frag" element={<Frag />} />
        <Route path="/ReactMemo" element={<ReactMemo />} />
        <Route path="/UsEf" element={<UsEf />} />
        <Route path="/Rout" element={<Rout />} />
        <Route path="/Cont" element={<Cont />} />
        <Route path="/Form" element={<Form />} />


      </Routes>
    </Router>
  );
};

export default App;