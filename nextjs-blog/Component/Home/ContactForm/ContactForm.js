import React from 'react';

const ContactForm = (props) => {
  return (
    <>
      <div className="text-center container p-3 p-md-5" id="list-contact-me">
        <div className="wow bounceInUp">
          <i className="fas fa-paper-plane display-5 text-white p-3"></i>
          <h4 className=" text-white">CONTACT ME</h4>
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
                <small className="text-white-75">
                  shajadsheikh32@ gmail.com
                </small>
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
                <button className="btn mt-4 w-100" type="submit">
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
