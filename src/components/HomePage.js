import React from 'react';
import Hero from './HomePartHero';
import Clients from './HomePartClients';
import About from './HomePartAbout';
import Tabs from './HomePartTabs';


const HomePage = () => (
    <React.Fragment>
        <Hero />
        <main id="main">
            <Clients />
            <About />
            <Tabs />
        </main>
    </React.Fragment>
)

export default HomePage