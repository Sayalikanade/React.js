 import './App.css';
import React from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Dropdown from './Components/Dropdown';
import Collapse from './Components/Collapse';
import Slider from './Components/Slider';
import Button from './Components/Button';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';

function App(){
  return (
    <div>
      <Header />
      <Footer />
      <Section />
      <Card />
      <Dropdown />
      <Collapse />
      <Slider />
      <Button />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
