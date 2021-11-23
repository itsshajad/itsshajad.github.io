import React from 'react';

const Testimonial = (props) => {
  return (
    <div className="mt-6 container">
      <p className="er text-white text-center wow lightSpeedIn">TESTIMONIALS</p>
      <div className="row justify-content-around mt-5 p-2 text-left wow fadeIn">
        <div
          className="
            font-weight-normal
            col-md-6
            px-0 px-md-3
            col-lg-4
            mt-5 mt-sm-6
            wow
            slideInLeft
          "
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
                >
                  Nashim Akhtar
                </a>
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
                >
                  Sonu Bhatt
                </a>
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
          className="
            col-md-6
            px-0 px-md-3
            col-lg-4
            mt-5 mt-sm-6
            float-md-left
            wow
            slideInRight
          "
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
                <a href="" target="_blank" className="text-info">
                  Harish
                </a>
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
  );
};

export default Testimonial;
