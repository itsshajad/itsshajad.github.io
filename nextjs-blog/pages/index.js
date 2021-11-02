import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../Component/Navigation/Navigation';

import Cv2 from '../public/images/cv2.jpg';

export default function Home() {
  return (
    <Head>
      <title>Mr Shajad | Single Page Portfolio</title>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-142104179-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-142104179-1');
    </script> */}
      {/* <script type="text/javascript">
      (function () {
        'use strict';
        window.addEventListener(
          'load',
          function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(
              forms,
              function (form) {
                form.addEventListener(
                  'submit',
                  function (event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                  },
                  false
                );
              }
            );
          },
          false
        );
      })();
    </script> */}

      <meta name="theme-color" content="#163149" />
      <meta name="msapplication-navbutton-color" content="#163149" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#163149" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />

      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/animate.all.css" />
      <link rel="stylesheet" type="text/css" href="css/mycss.css" />
      <Navbar />
    </Head>

    /* <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/wow.min.js"></script>

    <script>
      wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true, // default
      });
      wow.init();
    </script> */

    /* <script src="js/cv.js"></script> */
  );
}
