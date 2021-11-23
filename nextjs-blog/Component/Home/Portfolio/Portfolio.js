import React from 'react';

const Portfolio = (props) => {
  return (
    <div className="text-center container p-3 p-md-5" id="list-portfolio">
      <div className="wow bounceInUp">
        <i className="fas fa-briefcase display-5 p-3 text-white"></i>
        <h4 className=" text-white">PORTFOLIO</h4>
        <img
          src="images/line-design-01.svg"
          width="130"
          className="img-fluid mt-3"
        />
      </div>
      <div className="mt-6">
        <h5 className="text-white wow lightSpeedIn">My Work</h5>

        <div
          className="
            mt-5
            mb-5
            rounded
            pt-1
            shadow
            col-md-6
            my-f-size2
            d-inline-flex
            justify-content-center
            wow
            shake
          "
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
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-web-tab"
                data-toggle="pill"
                href="#pills-web"
                role="tab"
                aria-selected="false"
              >
                Web
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-graphic-tab"
                data-toggle="pill"
                href="#pills-graphic"
                role="tab"
                aria-selected="false"
              >
                Graphic
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane show active bg-transparent" id="pills-all">
            <div className="row">
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a href="http://oneistox.in" target="_blank">
                  <div
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/oneistox.png" />
                    <div
                      className="overlap"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a href="index-demo2.html" target="_blank">
                  <div
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/demo2.jpg" />
                    <div
                      className="overlap"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <a href="http://sunbeam.0fees.us/" target="_blank">
                  <div
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage0.jpg" />
                    <div
                      className="overlap"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
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
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage3.jpg" />
                    <div className="overlap">
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
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
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage1.jpg" />
                    <div className="overlap">
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
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
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage2.jpg" />
                    <div className="overlap">
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g1.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g2.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g6.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g7.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2 wow rotateIn">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g8.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pill all */}

          <div className="tab-pane fade bg-transparent" id="pills-web">
            <div className="row justify-content-between">
              <div className="col-md-4 mt-1 p-2">
                <a
                  href="https://https://imaginationdesigns.000webhostapp.com/"
                  target="_blank"
                >
                  <div
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage3ld.jpg" />
                    <div className="overlap">
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
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
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage1ld.jpg" />
                    <div className="overlap">
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
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
                    className="
                      shadow2
                      position-relative
                      overflow-hidden
                      p-1
                      bg-shades1
                    "
                  >
                    <img src="images/webpage2ld.jpg" />
                    <div className="overlap">
                      <span className="overlap-content">
                        <i className="fas fa-search-plus"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* pill web  */}

          <div className="tab-pane fade bg-transparent" id="pills-graphic">
            <div className="row justify-content-between">
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g1.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g6.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g7.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-1 p-2">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/g8.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1 p-2">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/menu.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1 p-2 p-md-3">
                <div
                  className="
                    myImg
                    shadow2
                    position-relative
                    overflow-hidden
                    p-1
                    bg-shades1
                  "
                >
                  <img src="images/Travel-pemplate.jpg" />
                  <div className="overlap">
                    <span className="overlap-content">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
