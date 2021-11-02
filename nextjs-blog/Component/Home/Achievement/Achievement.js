import React from 'react';

const Achievement = (props) => {
  return (
    <div class="container-fluid bg-img-service">
      <div class="container">
        <div class="p-md-4 mt-6">
          <h5 class="text-center text-white mt-5 wow lightSpeedIn">Skills</h5>
          <div class="row" id="skillsContainer">
            <div class="col-md-6">
              <div class="position-relative mt-5-5">
                <p
                  class="
                    css-value
                    anim
                    my-f-size
                    text-1
                    position-absolute
                    text-right
                  "
                >
                  <span class="bg-info skills-value">85</span>
                </p>

                <div class="skills bg-shades2 position-relative">
                  <div class="anim position-absolute bg-info skills-css"></div>
                </div>

                <small class="float-left ml-1">Photoshop</small>
              </div>

              <div class="position-relative mt-5-5">
                <p class="html-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">90</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-html anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">HTML</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="js-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">70</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-js anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">JavaScript</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="jq-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">81</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-jq anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">jQuery</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="js-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">70</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-js anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">Material Ui</small>
              </div>
            </div>

            {/* <!-- skill right --> */}
            <div class="col-md-6">
              <div class="position-relative bg-dark mt-5-5">
                <p class="jq-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">81</span>
                </p>
                <div class="skills bg-shades2 overflow-hidden position-relative">
                  <div class="skills-jq anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">Illustrator</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="css-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">85</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-css anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">CSS</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="bs-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">85</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-bs anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">Bootstrap</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="wp-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">52</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-wp anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">React Js</small>
              </div>
              <div class="position-relative mt-5-5">
                <p class="seo-value anim my-f-size position-absolute text-right">
                  <span class="bg-info skills-value">52</span>
                </p>
                <div class="skills bg-shades2 position-relative">
                  <div class="skills-seo anim bg-info position-absolute"></div>
                </div>
                <small class="float-left ml-1">Next Js</small>
              </div>
            </div>
          </div>

          <div
            class="text-center wow tada"
            data-wow-duration="1.4s"
            data-wow-delay="1s"
            data-wow-iteration="10"
          >
            <a
              href="shajad_resume.pdf"
              target="_blank"
              class="btn shadow rounded-0 mt-5"
            >
              <i class="fas text-info fa-download"></i> Download Resume
            </a>
          </div>
        </div>

        {/* <!-- ACHIEVEMENT --> */}

        <div class="model">
          <span class="close2">&times;</span>
          <img class="model-content p-1 bg-shades1" id="modelImg" />
        </div>

        <div class="container mt-6" id="achievement">
          <h5 class="text-white text-center mb-5 wow lightSpeedIn">
            Achievement
          </h5>
          <div class="row shadow bg-black justify-content-around wow fadeIn">
            {/* <!-- Button trigger modal --> */}
            <div class="col-md-5 py-5 wow zoomIn" data-wow-delay="0.7s">
              <p class="text-center text-white">
                WON 1<sup>st</sup> PRIZE
              </p>
              <div class="myImg position-relative p-1 shadow3 bg-shades1">
                <img src="images/1st.jpg" />
                <div class="overlap">
                  <span class="overlap-content">
                    <i class="fas fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-5 py-5 wow zoomIn" data-wow-delay="0.7s">
              <p class="text-center text-white">
                WON 2 <sup>nd</sup> PRIZE
              </p>
              <div class="myImg position-relative p-1 shadow3 bg-shades1">
                <img src="images/2nd.jpg" />
                <div class="overlap">
                  <span class="overlap-content">
                    <i class="fas fa-search-plus"></i>
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
