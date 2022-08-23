import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-white">
        <div class=" pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center text-dark p-3">
          © 2022 Copyright:
          <a class="text-dark" href="/" style={{ textDecoration: "none" }}>
            &nbsp; Sangeet Paudel{" "}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
