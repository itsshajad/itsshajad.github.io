import React from 'react';

const ContactForm = (props) => {
  return (
    <>
      <div class="text-center container p-3 p-md-5" id="list-contact-me">
        <div class="wow bounceInUp">
          <i class="fas fa-paper-plane display-5 text-white p-3"></i>
          <h4 class="font-weight-bold text-white">CONTACT ME</h4>
          <img
            src="images/line-design-01.svg"
            width="130"
            class="img-fluid mt-3"
          />
        </div>
        <div class="mt-6">
          <h5 class="text-white wow lightSpeedIn">Get In Touch</h5>
          <div class="row mt-4 get-in">
            <div class="col-md-4 mt-4 px-2 px-md-3 wow zoomIn">
              <div class="py-3 rounded bg-shades2">
                <div class="py-2 mybrdr">
                  <i class="fas text-white fa-mobile-alt display-5 p-1"></i>
                </div>
                <p class="mb-0 mt-2 font">Phone</p>
                <small class="my-f-size">8745990856</small>
              </div>
            </div>

            <div class="col-md-4 mt-4 px-2 px-md-3 wow zoomIn">
              <div class="py-3 rounded bg-shades2">
                <div class="py-2 mybrdr">
                  <i class="fas text-white fa-envelope display-5 p-1"></i>
                </div>
                <p class="mb-0 mt-2">Email</p>
                <small class="text-white-75">shajadsheikh32@ gmail.com</small>
              </div>
            </div>

            <div class="col-md-4 mt-4 px-2 px-md-3 wow zoomIn">
              <div class="py-3 rounded bg-shades2">
                <div class="py-2 mybrdr">
                  <i class="fas text-white fa-map-marker-alt display-5 p-1"></i>
                </div>
                <p class="mb-0 mt-2">Location</p>
                <small class="text-white-75">New Delhi India</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 bg-img-service container-fluid py-5 wow fadeIn">
        <div class="container wow zoomIn">
          <h5 class="text-white text-center">Send Your Message</h5>
          <form class="needs-validation mt-4" novalidate>
            <div class="form-row">
              <div class="col-md-6 px-0 px-md-2">
                <div class="mb-3 mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Your Name"
                    required
                  />
                  <div class="invalid-feedback">Enter Name.</div>
                </div>

                <div class="mb-3">
                  <input
                    type="tel"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="Phone No"
                    required
                  />
                  <div class="invalid-feedback">Phone No.</div>
                </div>

                <input
                  type="Email"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Email"
                  required
                />
                <div class="invalid-feedback">Enter Email.</div>
              </div>

              <div class="col-md-6 px-0 px-md-2 mt-3 align-items-stretch">
                <textarea
                  class="form-control h-100"
                  id="validationCustom04"
                  placeholder="Your Message"
                  required
                ></textarea>
                <div class="invalid-feedback">Any Message.</div>
              </div>
              <div class="col-md-12 px-0 px-md-2">
                <button class="btn mt-4 w-100" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
