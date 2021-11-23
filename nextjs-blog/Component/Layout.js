import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta name="theme-color" content="#163149" />
      <meta name="msapplication-navbutton-color" content="#163149" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#163149" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700&display=swap"
        rel="stylesheet"
      />
      <Navbar />

      {props.children}

      <Footer />
      <div id="go-top">
        <i className="fas fa-arrow-alt-circle-up"></i>
      </div>
    </Head>
  );
};

export default Layout;
