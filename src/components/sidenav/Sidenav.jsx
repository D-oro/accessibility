import React from 'react';
import './Sidenav.css';

function Sidenav() {
  return (
    <aside className="sidenav-wrapper">
        <nav aria-label="Content sections">
            <ul>
                <li><a href="#section-2">Helmets</a></li>
                <li><a href="#section-1">eslint a11y</a></li>
            </ul>
        </nav>
    </aside>
  );
}

export default Sidenav;
