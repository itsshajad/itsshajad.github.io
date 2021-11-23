import React from 'react';

const Navbar = (props) => {
  return (
    <div className="nav-col col-lg-2 bg-shades1 shadow col-md-3 col-sm-5 col-10 px-0 h-100 bg-shades1 overflow-auto">
      <div className="text-info m-2" id="Close">
        <span>&times;</span>
      </div>
      <div className="col-12">
        <img
          src="images/cv2.jpg"
          className="img-fluid rounded shadow2 p-1 img animated slower wow pulse infinite"
          data-wow-duration="2s"
        />
      </div>

      <div id="nav" className="list-group mt-3 my-f-size2">
        <a className="list-group-item active" href="#list-home">
          <i className="fas fa-home px-2"></i> Home
        </a>
        <a className="list-group-item" href="#list-About-me">
          <i className="fas fa-user px-2"></i> About Me
        </a>
        <a className="list-group-item" href="#list-resume">
          <i className="fas fa-file-alt px-2"></i> Resume
        </a>
        <a className="list-group-item" href="#list-portfolio">
          <i className="fas fa-briefcase px-2"></i> Portfolio
        </a>
        <a className="list-group-item" href="#list-contact-me">
          <i className="fas fa-paper-plane px-2"></i> Contact Me
        </a>
      </div>

      <div className="col-12 icon mt-4 my-f-size2 d-flex justify-content-around">
        <a
          className="p-2"
          href="https://www.facebook.com/shajad.sheikh.9"
          target="_blank"
          title="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="p-2"
          href="https://www.youtube.com/channel/UC9vo5qHSvmF-JsuRSiBvYoA/videos"
          target="_blank"
          title="Youtube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="p-2"
          href="https://www.linkedin.com/in/shajad-sheikh-17445415a/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in" title="Linkedin"></i>
        </a>
        <a
          className="p-2"
          href="https://twitter.com/shajad_sheikh"
          target="_blank"
          title="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a className="p-2" href="https://dribbble.com/imiginatedesign">
          <i className="fab fa-dribbble" title="Dribble"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
