import React from 'react';

const Resume = (props) => {
  return (
    <div
      class="text-center mt-6 p-3 p-md-5 text-white container"
      id="list-resume"
    >
      <div class="wow bounceInUp">
        <i class="fas fa-file-alt display-5 p-3"></i>
        <h4 class="font-weight-bold text-white">RESUME</h4>
        <img
          src="images/line-design-01.svg"
          width="130"
          class="img-fluid mt-3"
        />
      </div>
      <div class="mt-5">
        <h4 class="text-white wow flash" data-wow-delay="0.3s">
          Education
        </h4>
        <div class="row text-left justify-content-around">
          <div class="col-md-5 mt-5">
            <p class="wow slideInLeft">
              <i class="fas text-info fa-graduation-cap ml-n1 mr-2"></i>
              Academic Qualifications
            </p>
            <div
              class="
                pl-1
                border-info border
                bg-shades1
                text-info
                h-100
                float-left
                position-relative
                rounded
                wow
                fadeInUpBig
              "
            >
              <i class="fas qlfc-icn fa-circle" style={{ top: '2.3rem' }}></i>
              <i class="fas qlfc-icn fa-circle" style={{ top: '7.4rem' }}></i>
              <i
                class="fas qlfc-icn fa-circle"
                style={{ bottom: '5.5rem' }}
              ></i>
            </div>

            <div class="ml-md-5 ml-2 col-11 mt-5">
              <div class="my-f-size2">
                <p class="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  Bachelor of Arts
                </p>
                <p class="mb-1 text-white-75">Delhi University</p>
                <p class="text-white-75">2014-2017</p>
              </div>

              <div class="my-f-size">
                <p class="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  12th Standard
                </p>
                <p class="mb-1 text-white-75">CBSE</p>
                <p class="text-white-75">2013-2014</p>
              </div>
              <div class="my-f-size">
                <p class="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  10th Standard
                </p>
                <p class="mb-1 text-white-75">CBSE</p>
                <p class="mb-0 text-white-75">2011-2012</p>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-5">
            <p class="wow slideInRight">
              <i class="fas fa-graduation-cap text-info ml-n1 mr-2"></i>
              Professional Qualifications
            </p>
            <div
              class="
                pl-1
                border-info border
                bg-shades1
                text-info
                h-100
                float-left
                position-relative
                rounded
                wow
                fadeInUpBig
              "
            >
              <i class="fas qlfc-icn fa-circle" style={{ top: '2.3rem' }}></i>
              <i class="fas qlfc-icn fa-circle" style={{ top: '8rem' }}></i>
            </div>

            <div class="ml-md-5 ml-2 col-11 mt-5">
              <div class="my-f-size2">
                <p class="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  Diploma in Computer Applications (DCA)
                </p>
                <p class="mb-1 text-white-75">NIC</p>
                <p class="text-white-75">2015</p>
              </div>

              <div class="my-f-size2">
                <p class="my-f-size3 mb-2 wow pulse" data-wow-delay="0.9s">
                  Web Designing & Development (WDD)
                </p>
                <p class="mb-1 text-white-75">
                  Arena Animation South Ex Delhi.
                </p>
                <p class="text-white-75">Pursuing</p>
              </div>
            </div>
          </div>

          <div class="col-md-11 mt-6">
            <p class=" wow slideInLeft">
              <i class="fas fa-briefcase ml-n1 text-info mr-2"></i> Work
              Experience
            </p>
            <div class="pl-1 border bg-shades1 border-info text-info h-100 float-left position-relative rounded wow fadeInUpBig">
              <i class="fas fa-circle qlfc-icn" style={{ top: '2.3rem' }}></i>
            </div>

            <div class="ml-md-5 ml-2 col-11 mt-5">
              <div class="my-f-size">
                <p class="my-f-size3 mb-2 text-white-75">Fresher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
