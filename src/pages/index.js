import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import { InfoData } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';
import Projects from '../components/Projects';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
    return (
        <>
           <Hero slides={SliderData} />
           <InfoSection {...InfoData} />
           <Projects />
           <Features /> 
        </>
    );
};

export default Home;
