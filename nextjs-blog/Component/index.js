import React from 'react';

const index = (props) => {
  return <div>  {/* 'left section' */}

   //  "slide navigation"
   

    <div className="container-fluid px-0" id="list-home">
      <!-- home -->
      <div className="position-relative banner">
        <!-- header -->
        <div className="py-3 w-100" id="top-nav" style="z-index: 1">
          <div className="container d-flex justify-content-between">
            <div
              className="align-self-center text-white wow flipInX"
              style="font-family: serif"
            >
              <h2><span className="text-info">MR</span> SHAJAD</h2>
            </div>
            <div id="humburger" className="wow flipInX">
              <div className="humburger-line"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="px-2 font-weight-bold position-absolute-center">
            <div
              className="text-white display-md wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <span className="text-white-75">HI, I AM</span>
              <h5 className="font-weight-bold display-md">SHAJAD SHEIKH</h5>
              <p className="text-info">Web Designer & Developer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- About --> */}
    <div className="text-center p-3 p-md-5 mt-5 container" id="list-About-me">
      <div className="text-white wow fadeIn" data-wow-duration="2s">
        <i className="fas fa-user display-5 p-3"></i>
        <h4 className="font-weight-bold">ABOUT ME</h4>
        <img
          src="images/line-design-01.svg"
          width="130"
          className="img-fluid mt-3"
        />
      </div>
      <div className="text-left wow slideInRight">
        <i className="my-f-size3 col-8 align-self-center">
          <h2>I’m Shajad</h2>
          web designer & developer I design responsive and beautiful web pages.
          I've complete knowledge of Web Designing and I designed this site so
          you can get to know me on a personal level. My portfolio, my resume,
          and so much more. So please sit back and enjoy!
        </i>
      </div>
    </div>

    <div className="mt-5 bg-img-service text-center container-fluid py-5">
      <div className="container">
        <p className="font-weight-bolder text-white wow lightSpeedIn">SERVICES</p>
        <div className="row justify-content-around my-f-size2 mt-4">
          <div
            className="font-weight-normal col-md-5 col-lg-3 mt-4 p-0 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <div className="py-3 mybrdr">
              <i className="fas fa-desktop display-5 text-white"></i>
            </div>
            <div className="service p-2 px-3">
              <p className="my-f-size3 mt-3 mb-2 text-white">Web Design</p>
              <p className="text-left">
                Our website templates work for all devices, so you only have to
                design your website once. Stand out with website design by
                imagination design.
              </p>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-3 mt-4 p-0 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <div className="py-3 mybrdr">
              <i className="fas fa-mobile-alt text-white display-5"></i>
            </div>
            <div className="service p-2 px-3">
              <p className="my-f-size3 mt-3 mb-2 text-white">Responsive Site</p>
              <p className="text-left">
                Responsive web design is an approach to web design that makes
                web pages render well on a variety of devices and window or
                screen sizes.
              </p>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-3 mt-4 p-0 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <div className="py-3 mybrdr">
              <i className="fas fa-shopping-cart text-white display-5"></i>
            </div>
            <div className="service p-2 px-3">
              <p className="my-f-size3 mt-3 mb-2 text-white">E-Commerce Site</p>
              <p className="text-left">
                Creating an eCommerce website with Imagination Design Online
                Store is simple, Our fully hosted shopping cart software lets
                you sell products online.
              </p>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-3 p-0 wow mt-4 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <div className="py-3 mybrdr">
              <i className="fas fa-pen-fancy text-white display-5"></i>
            </div>
            <div className="service p-2 px-3">
              <p className="my-f-size3 mt-3 mb-2 text-white">Graphic Design</p>
              <p className="text-left">
                If you are looking for graphic design inspiration, You can
                discover top graphic design ideas & concepts created with
                imagination design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- RESUME --> */}
    <div
      className="text-center mt-6 p-3 p-md-5 text-white container"
      id="list-resume"
    >
      <div className="wow bounceInUp">
        <i className="fas fa-file-alt display-5 p-3"></i>
        <h4 className="font-weight-bold text-white">RESUME</h4>
        <img
          src="images/line-design-01.svg"
          width="130"
          className="img-fluid mt-3"
        />
      </div>
      <div className="mt-5">
        <h4 className="text-white wow flash" data-wow-delay="0.3s">Education</h4>
        <div className="row text-left justify-content-around">
          <div className="col-md-5 mt-5">
            <p className="wow slideInLeft">
              <i className="fas text-info fa-graduation-cap ml-n1 mr-2"></i>
              Academic Qualifications
            </p>
            <div
              className="pl-1 border-info border bg-shades1 text-info h-100 float-left position-relative rounded wow fadeInUpBig"
            >
              <i className="fas qlfc-icn fa-circle" style="top: 2.3rem"></i>
              <i className="fas qlfc-icn fa-circle" style="top: 7.4rem"></i>
              <i className="fas qlfc-icn fa-circle" style="bottom: 5.5rem"></i>
            </div>

            <div className="ml-md-5 ml-2 col-11 mt-5">
              <div className="my-f-size2">
                <p className="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  Bachelor of Arts
                </p>
                <p className="mb-1 text-white-75">Delhi University</p>
                <p className="text-white-75">2014-2017</p>
              </div>

              <div className="my-f-size">
                <p className="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  12th Standard
                </p>
                <p className="mb-1 text-white-75">CBSE</p>
                <p className="text-white-75">2013-2014</p>
              </div>
              <div className="my-f-size">
                <p className="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  10th Standard
                </p>
                <p className="mb-1 text-white-75">CBSE</p>
                <p className="mb-0 text-white-75">2011-2012</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <p className="wow slideInRight">
              <i className="fas fa-graduation-cap text-info ml-n1 mr-2"></i>
              Professional Qualifications
            </p>
            <div
              className="pl-1 border-info border bg-shades1 text-info h-100 float-left position-relative rounded wow fadeInUpBig"
            >
              <i className="fas qlfc-icn fa-circle" style="top: 2.3rem"></i>
              <i className="fas qlfc-icn fa-circle" style="top: 8rem"></i>
            </div>

            <div className="ml-md-5 ml-2 col-11 mt-5">
              <div className="my-f-size2">
                <p className="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  Diploma in Computer Applications (DCA)
                </p>
                <p className="mb-1 text-white-75">NIC</p>
                <p className="text-white-75">2015</p>
              </div>

              <div className="my-f-size2">
                <p className="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  Web Designing & Development (WDD)
                </p>
                <p className="mb-1 text-white-75">
                  Arena Animation South Ex Delhi.
                </p>
                <p className="text-white-75">Pursuing</p>
              </div>
            </div>
          </div>

          <!-- <div className="col-md-11 mt-6">
      <p className=" wow slideInLeft"><i className="fas fa-briefcase ml-n1 text-info mr-2"></i> Work Experience</p>      
      <div className="pl-1 border bg-shades1 border-info text-info h-100 float-left position-relative rounded wow fadeInUpBig">
        <i className="fas fa-circle qlfc-icn" style="top: 2.3rem;"></i>
      </div>
      
      <div className="ml-md-5 ml-2 col-11 mt-5">
      <div className="my-f-size">
      <p className="my-f-size3 mb-2 text-white-75">Fresher</p>
      </div>
    </div>
  </div> -->
        </div>
        <!-- row -->
      </div>
      <!-- skills -->
    </div>
    <!-- RESUME -->

    <!-- skills -->
    <div className="container-fluid bg-img-service">
      <div className="container">
        <div className="p-md-4 mt-6">
          <h5 className="text-center text-white mt-5 wow lightSpeedIn">Skills</h5>
          <div className="row" id="skillsContainer">
            <div className="col-md-6">
              <div className="position-relative mt-5-5">
                <p
                  className="css-value anim my-f-size text-1 position-absolute text-right"
                >
                  <span className="bg-info skills-value">85</span>
                </p>

                <div className="skills bg-shades2 position-relative">
                  <div className="anim position-absolute bg-info skills-css"></div>
                </div>

                <small className="float-left ml-1">Photoshop</small>
              </div>

              <div className="position-relative mt-5-5">
                <p
                  className="html-value anim my-f-size position-absolute text-right"
                >
                  <span className="bg-info skills-value">90</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-html anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">HTML</small>
              </div>
              <div className="position-relative mt-5-5">
                <p className="js-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">70</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-js anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">JavaScript</small>
              </div>
              <div className="position-relative mt-5-5">
                <p className="jq-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">81</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-jq anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">jQuery</small>
              </div>
              <div className="position-relative mt-5-5">
                <p className="js-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">70</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-js anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">Material Ui</small>
              </div>
            </div>

            <!-- skill right -->
            <div className="col-md-6">
              <div className="position-relative bg-dark mt-5-5">
                <p className="jq-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">81</span>
                </p>
                <div
                  className="skills bg-shades2 overflow-hidden position-relative"
                >
                  <div className="skills-jq anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">Illustrator</small>
              </div>
              <div className="position-relative mt-5-5">
                <p
                  className="css-value anim my-f-size position-absolute text-right"
                >
                  <span className="bg-info skills-value">85</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-css anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">CSS</small>
              </div>
              <div className="position-relative mt-5-5">
                <p className="bs-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">85</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-bs anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">Bootstrap</small>
              </div>
              <div className="position-relative mt-5-5">
                <p className="wp-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">52</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-wp anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">React Js</small>
              </div>
              <div className="position-relative mt-5-5">
                <p
                  className="seo-value anim my-f-size position-absolute text-right"
                >
                  <span className="bg-info skills-value">52</span>
                </p>
                <div className="skills bg-shades2 position-relative">
                  <div className="skills-seo anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">Next Js</small>
              </div>
            </div>
          </div>

          <div
            className="text-center wow tada"
            data-wow-duration="1.4s"
            data-wow-delay="1s"
            data-wow-iteration="10"
          >
            <a
              href="shajad_resume.pdf"
              target="_blank"
              className="btn shadow rounded-0 mt-5"
              ><i className="fas text-info fa-download"></i> Download Resume</a
            >
          </div>
        </div>

        <!-- ACHIEVEMENT -->

        <div className="model">
          <span className="close2">&times;</span>
          <img className="model-content p-1 bg-shades1" id="modelImg" />
        </div>

        <div className="container mt-6" id="achievement">
          <h5 className="text-white text-center mb-5 wow lightSpeedIn">
            Achievement
          </h5>
          <div className="row shadow bg-black justify-content-around wow fadeIn">
            <!-- Button trigger modal -->
            <div className="col-md-5 py-5 wow zoomIn" data-wow-delay="0.7s">
              <p className="text-center text-white">WON 1<sup>st</sup> PRIZE</p>
              <div className="myImg position-relative p-1 shadow3 bg-shades1">
                <img src="images/1st.jpg" />
                <div className="overlap">
                  <span className="overlap-content"
                    ><i className="fas fa-search-plus"></i
                  ></span>
                </div>
              </div>
            </div>
            <div className="col-md-5 py-5 wow zoomIn" data-wow-delay="0.7s">
              <p className="text-center text-white">WON 2 <sup>nd</sup> PRIZE</p>
              <div className="myImg position-relative p-1 shadow3 bg-shades1">
                <img src="images/2nd.jpg" />
                <div className="overlap">
                  <span className="overlap-content"
                    ><i className="fas fa-search-plus"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PORTFOLIO -->
    <div className="text-center container p-3 p-md-5" id="list-portfolio">
      <div className="wow bounceInUp">
        <i className="fas fa-briefcase display-5 p-3 text-white"></i>
        <h4 className="font-weight-bold text-white">PORTFOLIO</h4>
        <img
          src="images/line-design-01.svg"
          width="130"
          className="img-fluid mt-3"
        />
      </div>
      <div className="mt-6">
        <h5 className="text-white wow lightSpeedIn">My Work</h5>

        <div
          className="mt-5 mb-5 rounded pt-1 shadow col-md-6 my-f-size2 d-inline-flex justify-content-center wow shake"
        >
          <ul className="nav nav-pills" id="pills-tab">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-all-tab"
                data-toggle="pill"
                href="#pills-all"
                role="tab"
                aria-selected="true"
                >All</a
              >
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-web-tab"
                data-toggle="pill"
                href="#pills-web"
                role="tab"
                aria-selected="false"
                >Web</a
              >
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-graphic-tab"
                data-toggle="pill"
                href="#pills-graphic"
                role="tab"
                aria-selected="false"
                >Graphic</a
              >
            </li>
          </ul>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane show active bg-transparent" id="pills-all">
            <div className="row">
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a href="http://oneistox.in" target="_blank">
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/oneistox.png" />
                    <div
                      className="overlap"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a href="index-demo2.html" target="_blank">
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/demo2.jpg" />
                    <div
                      className="overlap"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a href="http://sunbeam.0fees.us/" target="_blank">
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage0.jpg" />
                    <div
                      className="overlap"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a
                  href="https://imaginationdesigns.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage3.jpg" />
                    <div className="overlap">
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a
                  href="https://travelfireflies.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage1.jpg" />
                    <div className="overlap">
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a
                  href="https://express-courier-service.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage2.jpg" />
                    <div className="overlap">
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g1.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g2.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g6.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g7.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g8.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- pill all -->

          <div className="tab-pane fade bg-transparent" id="pills-web">
            <div className="row justify-content-between">
              <div className="col-md-4 mt-1 p-2">
                <a
                  href="https://https://imaginationdesigns.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage3ld.jpg" />
                    <div className="overlap">
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4 mt-1 p-2">
                <a
                  href="https://travelfireflies.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage1ld.jpg" />
                    <div className="overlap">
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4 mt-1 p-2">
                <a
                  href="https://express-courier-service.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="shadow2 position-relative overflow-hidden p-1 bg-shades1"
                  >
                    <img src="images/webpage2ld.jpg" />
                    <div className="overlap">
                      <span className="overlap-content"
                        ><i className="fas fa-search-plus"></i
                      ></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- pill web -->

          <div className="tab-pane fade bg-transparent" id="pills-graphic">
            <div className="row justify-content-between">
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g1.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g6.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g7.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/g8.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1 p-2">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/menu.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1 p-2 p-md-3">
                <div
                  className="myImg shadow2 position-relative overflow-hidden p-1 bg-shades1"
                >
                  <img src="images/Travel-pemplate.jpg" />
                  <div className="overlap">
                    <span className="overlap-content"
                      ><i className="fas fa-search-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- pill graphic -->
        </div>
        <!-- pills tab Content -->
      </div>
    </div>
    <!-- PORTFOLIO -->
    <div className="mt-6 container">
      <p className="font-weight-bolder text-white text-center wow lightSpeedIn">
        TESTIMONIALS
      </p>
      <div className="row justify-content-around mt-5 p-2 text-left wow fadeIn">
        <div
          className="font-weight-normal col-md-6 px-0 px-md-3 col-lg-4 mt-5 mt-sm-6 wow slideInLeft"
        >
          <div className="shadow bg-black rounded px-3 pb-1">
            <div className="text-center">
              <div className="">
                <img
                  src="images/nashim.jpg"
                  className="img-fluid mt-n5 img rounded-circle"
                />
              </div>
              <p className="mb-0 mt-2">
                <a
                  href="http://mdnashim.000webhostapp.com"
                  target="_blank"
                  className="text-info"
                  >Nashim Akhtar</a
                >
              </p>
              <small className="my-f-size2 text-white">Website Designer</small>
            </div>
            <hr className="bg-black" />
            <p className="my-f-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud labotis ullamco et laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="col-md-6 px-0 px-md-3 col-lg-4 mt-5 mt-sm-6 wow slideInUp">
          <div className="shadow bg-black rounded px-3 pb-1">
            <div className="text-center">
              <div className="">
                <img
                  src="images/sonu.jpg"
                  className="img-fluid img mt-n5 rounded-circle"
                />
              </div>
              <p className="mb-0 mt-2">
                <a
                  href="https://itsbhatt.netlify.com"
                  target="_blank"
                  className="text-info"
                  >Sonu Bhatt</a
                >
              </p>
              <small className="my-f-size2 text-white">Website Designer</small>
            </div>
            <hr className="bg-black" />
            <p className="my-f-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud labotis ullamco et laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div
          className="col-md-6 px-0 px-md-3 col-lg-4 mt-5 mt-sm-6 float-md-left wow slideInRight"
        >
          <div className="shadow bg-black rounded px-3 pb-1">
            <div className="text-center">
              <div className="">
                <img
                  src="images/harish.jpg"
                  className="img-fluid img mt-n5 rounded-circle"
                />
              </div>
              <p className="mb-0 mt-2">
                <a href="" target="_blank" className="text-info">Harish</a>
              </p>
              <small className="my-f-size2 text-white">Website Designer</small>
            </div>
            <hr className="bg-black" />
            <p className="my-f-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud labotis ullamco et laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center container p-3 p-md-5" id="list-contact-me">
      <div className="wow bounceInUp">
        <i className="fas fa-paper-plane display-5 text-white p-3"></i>
        <h4 className="font-weight-bold text-white">CONTACT ME</h4>
        <img
          src="images/line-design-01.svg"
          width="130"
          className="img-fluid mt-3"
        />
      </div>
      <div className="mt-6">
        <h5 className="text-white wow lightSpeedIn">Get In Touch</h5>
        <div className="row mt-4 get-in">
          <div className="col-md-4 mt-4 px-2 px-md-3 wow zoomIn">
            <div className="py-3 rounded bg-shades2">
              <div className="py-2 mybrdr">
                <i className="fas text-white fa-mobile-alt display-5 p-1"></i>
              </div>
              <p className="mb-0 mt-2 font">Phone</p>
              <small className="my-f-size">8745990856</small>
            </div>
          </div>

          <div className="col-md-4 mt-4 px-2 px-md-3 wow zoomIn">
            <div className="py-3 rounded bg-shades2">
              <div className="py-2 mybrdr">
                <i className="fas text-white fa-envelope display-5 p-1"></i>
              </div>
              <p className="mb-0 mt-2">Email</p>
              <small className="text-white-75">shajadsheikh32@ gmail.com</small>
            </div>
          </div>

          <div className="col-md-4 mt-4 px-2 px-md-3 wow zoomIn">
            <div className="py-3 rounded bg-shades2">
              <div className="py-2 mybrdr">
                <i className="fas text-white fa-map-marker-alt display-5 p-1"></i>
              </div>
              <p className="mb-0 mt-2">Location</p>
              <small className="text-white-75">New Delhi India</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 bg-img-service container-fluid py-5 wow fadeIn">
      <div className="container wow zoomIn">
        <h5 className="text-white text-center">Send Your Message</h5>
        <form className="needs-validation mt-4" novalidate>
          <div className="form-row">
            <div className="col-md-6 px-0 px-md-2">
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Your Name"
                  required
                />
                <div className="invalid-feedback">Enter Name.</div>
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="Phone No"
                  required
                />
                <div className="invalid-feedback">Phone No.</div>
              </div>

              <input
                type="Email"
                className="form-control"
                id="validationCustom03"
                placeholder="Email"
                required
              />
              <div className="invalid-feedback">Enter Email.</div>
            </div>

            <div className="col-md-6 px-0 px-md-2 mt-3 align-items-stretch">
              <textarea
                className="form-control h-100"
                id="validationCustom04"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="invalid-feedback">Any Message.</div>
            </div>
            <div className="col-md-12 px-0 px-md-2">
              <button className="btn mt-4 w-100" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <footer className="container-fluid shadow py-4 text-center">
      <span>&copy; 2019 / Design By Mr Shajad</span>
    </footer>
    <div id="go-top"><i className="fas fa-arrow-alt-circle-up"></i></div></div>;
};

export default index;
