import React, { useEffect } from "react";
import "./Footer.css";
import { keyframes, styled } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningImage = styled.img`
  display: block;
  margin: auto;

  width: 100px; /* Adjust the size as needed */
  height: auto;
  animation: ${spinAnimation} 3s linear infinite; /* Adjust the animation duration as needed */
`;

export default function Footer(props) {
  useEffect(() => {
    const yearElement = document.getElementById("copyright-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <div hidden={props.isHide}>
      <>
        {/* Footer */}
        <footer className="footer-bg text-center text-lg-start">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    Sargalayam 2024
                  </h6>
                  <p className="footer-desc">
                    Welcome to our Sargalayam which makes beauty!
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text">
                        {" "}
                        Terms & Conditions
                      </span>
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text">
                        {" "}
                        Privacy Policy
                      </span>
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text"> FAQs</span>
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text">
                        {" "}
                        Support Center
                      </span>
                    </a>
                  </p>
                </div> */}
                {/* Grid column */}
                {/* Grid column */}
                {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text"> About</span>
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text"> Service</span>
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text"> Contact</span>
                    </a>
                  </p>
                  <p>
                    <a href="#!">
                      <span className="elementor-icon-list-text"> Help</span>
                    </a>
                  </p>
                </div> */}

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" /> Sargalayam 2024
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    https://online.samastha.info/
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> 0490-2347140
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>

          <div className="container">
            <hr />
            <div className="justify-content-between d-lg-flex d-sm-block p-4">
            <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://corvoso.vercel.app/" target="_blank" rel="noopener noreferrer">
        &copy; <span id="copyright-year"></span> Corvoso Technologies All rights reserved.
        </a>
        
      </div>

              <div className="footer-right-side-icon">
                <a href="" className="ms-3 me-4 text-reset">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-twitter" />
                </a>

                <a href="" className="me-4 text-reset">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
