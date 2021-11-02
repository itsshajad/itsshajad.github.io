import React from 'react';

const Testimonial = (props) => {
  return (
    <div class="mt-6 container">
      <p class="font-weight-bolder text-white text-center wow lightSpeedIn">
        TESTIMONIALS
      </p>
      <div class="row justify-content-around mt-5 p-2 text-left wow fadeIn">
        <div
          class="
            font-weight-normal
            col-md-6
            px-0 px-md-3
            col-lg-4
            mt-5 mt-sm-6
            wow
            slideInLeft
          "
        >
          <div class="shadow bg-black rounded px-3 pb-1">
            <div class="text-center">
              <div class="">
                <img
                  src="images/nashim.jpg"
                  class="img-fluid mt-n5 img rounded-circle"
                />
              </div>
              <p class="mb-0 mt-2">
                <a
                  href="http://mdnashim.000webhostapp.com"
                  target="_blank"
                  class="text-info"
                >
                  Nashim Akhtar
                </a>
              </p>
              <small class="my-f-size2 text-white">Website Designer</small>
            </div>
            <hr class="bg-black" />
            <p class="my-f-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud labotis ullamco et laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div class="col-md-6 px-0 px-md-3 col-lg-4 mt-5 mt-sm-6 wow slideInUp">
          <div class="shadow bg-black rounded px-3 pb-1">
            <div class="text-center">
              <div class="">
                <img
                  src="images/sonu.jpg"
                  class="img-fluid img mt-n5 rounded-circle"
                />
              </div>
              <p class="mb-0 mt-2">
                <a
                  href="https://itsbhatt.netlify.com"
                  target="_blank"
                  class="text-info"
                >
                  Sonu Bhatt
                </a>
              </p>
              <small class="my-f-size2 text-white">Website Designer</small>
            </div>
            <hr class="bg-black" />
            <p class="my-f-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud labotis ullamco et laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div
          class="
            col-md-6
            px-0 px-md-3
            col-lg-4
            mt-5 mt-sm-6
            float-md-left
            wow
            slideInRight
          "
        >
          <div class="shadow bg-black rounded px-3 pb-1">
            <div class="text-center">
              <div class="">
                <img
                  src="images/harish.jpg"
                  class="img-fluid img mt-n5 rounded-circle"
                />
              </div>
              <p class="mb-0 mt-2">
                <a href="" target="_blank" class="text-info">
                  Harish
                </a>
              </p>
              <small class="my-f-size2 text-white">Website Designer</small>
            </div>
            <hr class="bg-black" />
            <p class="my-f-size">
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
