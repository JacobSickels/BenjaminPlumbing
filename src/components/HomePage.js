import React from 'react';
import Welcome from './Welcome';
import ProjectsSlice from './ProjectsSlice';
import About from './About';
import Education from './Education';

const HomePage = () => (
    <div>
        <Welcome />
        <About />
    </div>
);

export default HomePage;