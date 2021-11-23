import React from 'react';

const Achievement = (props) => {
  return (
    <div className="container-fluid bg-img-service">
      <div className="container">
        <div className="p-md-4 mt-6">
          <h5 className="text-center text-white mt-5 wow lightSpeedIn">
            Skills
          </h5>
          <div className="row" id="skillsContainer">
            <div className="col-md-6">
              <div className="position-relative mt-5-5">
                <p
                  className="
                    css-value
                    anim
                    my-f-size
                    text-1
                    position-absolute
                    text-right
                  "
                >
                  <span className="bg-info skills-value">85</span>
                </p>

                <div className="skills bg-shades2 position-relative">
                  <div className="anim position-absolute bg-info skills-css"></div>
                </div>

                <small className="float-left ml-1">Photoshop</small>
              </div>

              <div className="position-relative mt-5-5">
                <p className="html-value anim my-f-size position-absolute text-right">
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

            {/* <!-- skill right --> */}
            <div className="col-md-6">
              <div className="position-relative bg-dark mt-5-5">
                <p className="jq-value anim my-f-size position-absolute text-right">
                  <span className="bg-info skills-value">81</span>
                </p>
                <div className="skills bg-shades2 overflow-hidden position-relative">
                  <div className="skills-jq anim bg-info position-absolute"></div>
                </div>
                <small className="float-left ml-1">Illustrator</small>
              </div>
              <div className="position-relative mt-5-5">
                <p className="css-value anim my-f-size position-absolute text-right">
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
                <p className="seo-value anim my-f-size position-absolute text-right">
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
            >
              <i className="fas text-info fa-download"></i> Download Resume
            </a>
          </div>
        </div>

        {/* <!-- ACHIEVEMENT --> */}

        <div className="model">
          <span className="close2">&times;</span>
          <img className="model-content p-1 bg-shades1" id="modelImg" />
        </div>

        <div className="container mt-6" id="achievement">
          <h5 className="text-white text-center mb-5 wow lightSpeedIn">
            Achievement
          </h5>
          <div className="row shadow bg-black justify-content-around wow fadeIn">
            {/* <!-- Button trigger modal --> */}
            <div className="col-md-5 py-5 wow zoomIn" data-wow-delay="0.7s">
              <p className="text-center text-white">
                WON 1<sup>st</sup> PRIZE
              </p>
              <div className="myImg position-relative p-1 shadow3 bg-shades1">
                <img src="images/1st.jpg" />
                <div className="overlap">
                  <span className="overlap-content">
                    <i className="fas fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-5 py-5 wow zoomIn" data-wow-delay="0.7s">
              <p className="text-center text-white">
                WON 2 <sup>nd</sup> PRIZE
              </p>
              <div className="myImg position-relative p-1 shadow3 bg-shades1">
                <img src="images/2nd.jpg" />
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
  );
};

export default Achievement;
