import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from './globalStyles';
import {Switch, Route} from 'react-router-dom';
import Home from './pages';
import Footer from './components/Footer';
import Features from './components/Features';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import InfoSection from './components/InfoSection';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            <Projects />
            <Features />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer/>
   </>
  );
}

export default App;
