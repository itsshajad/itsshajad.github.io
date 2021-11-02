import React from 'react';

const Banner = (props) => {
  return (
    <div class="container-fluid px-0" id="list-home">
      <div class="position-relative banner">
        <div class="py-3 w-100" id="top-nav">
          <div class="container d-flex justify-content-between">
            <div class="align-self-center text-white wow flipInX">
              <h2>
                <span class="text-info">MR</span> SHAJAD
              </h2>
            </div>
            <div id="humburger" class="wow flipInX">
              <div class="humburger-line"></div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="px-2 font-weight-bold position-absolute-center">
            <div
              class="text-white display-md wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <span class="text-white-75">HI, I AM</span>
              <h5 class="font-weight-bold display-md">SHAJAD SHEIKH</h5>
              <p class="text-info">Web Designer & Developer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
