import React from 'react';

import styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className="container-fluid px-0" id="list-home">
      <div className={`${styles.banner} position-relative`}>
        <div className="py-3 w-100" id="top-nav">
          <div className="container d-flex justify-content-between">
            <div className="align-self-center text-white wow flipInX">
              <h2 className={styles.logoBox}>
                <span className="text-info">MR</span> SHAJAD
              </h2>
            </div>
            <div className={`${styles.humburger} wow flipInX}`}>
              <div className={styles.humburgerLine}></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={`${styles.centerItem} px-2 "}`}>
            <div
              className="text-white display-md wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <span className="text-white-75">HI, I AM</span>
              <h5 className=" display-md">SHAJAD SHEIKH</h5>
              <p className="text-info">
                Front end Engineer <span className="text-light">at</span>{' '}
                <a href="https://www.oneistox.com" target="_blank">
                  oneistox
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
