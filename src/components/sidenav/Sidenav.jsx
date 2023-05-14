import React from 'react';
import './Sidenav.css';

function Sidenav() {
  return (
    <aside className="sidenav-wrapper">
        <nav aria-label="Content sections">
            <ul>
                <li><a href="#section-1">Intro</a></li>
                <li><a href="#section-2">eslint A11y</a></li>
                <li><a href="#section-3">Helmets</a></li>
            </ul>
        </nav>
    </aside>
  );
}

export default Sidenav;
