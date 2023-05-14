import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
        <Helmet><title>Home Accessibility Practice</title></Helmet>
        <h1>Welcome</h1>
        <p>
            This is where I practice accessible design principles.
        </p>
    </div>
  );
}

export default Home;
