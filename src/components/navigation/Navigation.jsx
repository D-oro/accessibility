import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="nav-wrapper" aria-label="Main">
            <ul>
                <CustomLink to="/accessibility">Home</CustomLink>
                <CustomLink to="/code">Code</CustomLink>
                <CustomLink to="/resources">Resources</CustomLink>
            </ul>
        </nav>
      );
}

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to}>{children}</Link>
        </li>
    );
}

export default Navigation;
