import React from 'react';
import { Helmet } from 'react-helmet';
import './Code.css';
import Sidenav from '../sidenav/Sidenav';
import A11yLint from '../content/A11yLint';
import Helmetcomponent from '../content/Helmetcomponent';

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
            <Helmetcomponent />
            <A11yLint />
            </span>
            <br />
        </div>
    );
    }

export default Code;
