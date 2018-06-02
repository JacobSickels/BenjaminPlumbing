import React from 'react';
import Welcome from './Welcome';
import AwardsSlice from './AwardsSlice';
import ServiceSlice from './ServiceSlice';
import ContactSlice from './ContactSlice';

const HomePage = () => (
    <div>
        <Welcome />
        <ServiceSlice />
        <AwardsSlice />
        <ContactSlice />
    </div>
);

export default HomePage;