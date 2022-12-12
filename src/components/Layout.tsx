import { Link } from 'gatsby';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: ILayoutProps) {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Layout;
