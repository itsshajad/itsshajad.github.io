import Head from 'next/head';
import Layout from '../Component/Layout';

import HomePage from '../Component/Home';

export default function Home() {
  return (
    <Layout>
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
      </Head>
      <HomePage />
    </Layout>

    /* <script src="js/cv.js"></script> */
  );
}
