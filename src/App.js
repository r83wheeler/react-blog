import React, {useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from './globalStyles';
import {Switch, Route, useLocation} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import InfoSection from './components/InfoSection';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  return (
   <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      
     
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={InfoSection} />
        <Route path="/Articles" component={Articles} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer/>
   </>
  );
}

export default App;
