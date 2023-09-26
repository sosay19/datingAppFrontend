import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="container mx-auto mt-8">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
