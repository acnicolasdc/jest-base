import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.styl';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
