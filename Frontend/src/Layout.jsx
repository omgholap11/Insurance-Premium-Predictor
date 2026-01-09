import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-white">
            <Navbar />
            <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
