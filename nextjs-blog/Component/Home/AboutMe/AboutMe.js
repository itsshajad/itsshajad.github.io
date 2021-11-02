import React from 'react';

const AboutMe = (props) => {
  return (
    <>
      <div class="text-center p-3 p-md-5 mt-5 container" id="list-About-me">
        <div class="text-white wow fadeIn" data-wow-duration="2s">
          <i class="fas fa-user display-5 p-3"></i>
          <h4 class="font-weight-bold">ABOUT ME</h4>
          <img
            src="images/line-design-01.svg"
            width="130"
            class="img-fluid mt-3"
          />
        </div>
        <div class="text-left wow slideInRight">
          <i class="my-f-size3 col-8 align-self-center">
            <h2>I’m Shajad</h2>
            web designer & developer I design responsive and beautiful web
            pages. I've complete knowledge of Web Designing and I designed this
            site so you can get to know me on a personal level. My portfolio, my
            resume, and so much more. So please sit back and enjoy!
          </i>
        </div>
      </div>

      <div class="mt-5 bg-img-service text-center container-fluid py-5">
        <div class="container">
          <p class="font-weight-bolder text-white wow lightSpeedIn">SERVICES</p>
          <div class="row justify-content-around my-f-size2 mt-4">
            <div
              class="font-weight-normal col-md-5 col-lg-3 mt-4 p-0 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <div class="py-3 mybrdr">
                <i class="fas fa-desktop display-5 text-white"></i>
              </div>
              <div class="service p-2 px-3">
                <p class="my-f-size3 mt-3 mb-2 text-white">Web Design</p>
                <p class="text-left">
                  Our website templates work for all devices, so you only have
                  to design your website once. Stand out with website design by
                  imagination design.
                </p>
              </div>
            </div>
            <div
              class="col-md-5 col-lg-3 mt-4 p-0 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <div class="py-3 mybrdr">
                <i class="fas fa-mobile-alt text-white display-5"></i>
              </div>
              <div class="service p-2 px-3">
                <p class="my-f-size3 mt-3 mb-2 text-white">Responsive Site</p>
                <p class="text-left">
                  Responsive web design is an approach to web design that makes
                  web pages render well on a variety of devices and window or
                  screen sizes.
                </p>
              </div>
            </div>
            <div
              class="col-md-5 col-lg-3 mt-4 p-0 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <div class="py-3 mybrdr">
                <i class="fas fa-shopping-cart text-white display-5"></i>
              </div>
              <div class="service p-2 px-3">
                <p class="my-f-size3 mt-3 mb-2 text-white">E-Commerce Site</p>
                <p class="text-left">
                  Creating an eCommerce website with Imagination Design Online
                  Store is simple, Our fully hosted shopping cart software lets
                  you sell products online.
                </p>
              </div>
            </div>
            <div
              class="col-md-5 col-lg-3 p-0 wow mt-4 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <div class="py-3 mybrdr">
                <i class="fas fa-pen-fancy text-white display-5"></i>
              </div>
              <div class="service p-2 px-3">
                <p class="my-f-size3 mt-3 mb-2 text-white">Graphic Design</p>
                <p class="text-left">
                  If you are looking for graphic design inspiration, You can
                  discover top graphic design ideas & concepts created with
                  imagination design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
