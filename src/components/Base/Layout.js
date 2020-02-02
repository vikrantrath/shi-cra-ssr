import React from "react";
import PropTypes from "prop-types";
import Header from '../Base/Header';
import Footer from '../Base/Footer';
function Layout({ children }) {
    return (
        <>
            {/* Navigation */}
            <Header />
            {children}
            {/* Footer */}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;