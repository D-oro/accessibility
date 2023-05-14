import React from 'react';
import { Helmet } from 'react-helmet';
import './Code.css';
import Sidenav from '../sidenav/Sidenav';
import A11yLint from '../content/A11yLint';
import Helmetcomponent from '../content/Helmetcomponent';
import Intro from '../content/Intro';

function Code() {
    return (
        <div className="code-wrapper">
            <Helmet>
                <title>
                    inclusive design examples
                </title>
            </Helmet>
            <Sidenav />
            <span className="code-content-wrapper">
            <Intro />
            <A11yLint />
            <Helmetcomponent />
            </span>
            <br />
        </div>
    );
    }

export default Code;
