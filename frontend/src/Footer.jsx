import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section>

        <div className="container-fluid count ">
          <div className="row" style={{ 'height': '65vh' }}>
            <div className="col-6 colbg" style={{ 'height': '65vh' }}>
              <div >
                <form className='p-md-5 m-0 w-75 ms-auto' >
                  <h1 className='fw-light mb-4'>GET IN TOUCH<p className='d-inline' style={{ 'color': 'orange', 'fontWeight': 'bold' }}>I</p></h1>
                  <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                    <input type="text" class="form-control" placeholder='Full name' />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div class="row mb-3">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Email" aria-label="Email" />
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Phone Number" aria-label="Number" />
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <textarea class="form-control" placeholder='Message' id="textAreaExample1" rows="4"></textarea>

                  </div>


                  <button type="submit" class="mb-3 btn btn-primary">Send</button>
                  <p className='bch'></p>
                </form>
              </div>
            </div>
            <div className="col-2 colsk"></div>

          </div>
        </div>
      </section>

      <div className="Footer flex space__around pz__15 " style={{ "borderTop": ".3px solid rgba(21,21,21,0.5)" }}>

        {/* Footer 1st part */}
        <div className="leftFooter">
          <div className="footer1st">

            <div className="location flex py__10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-geo-alt icon__color"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <strong>Address:</strong>
              <h6>SCF-4, 3rd Floor, Model Town Ext. D-Block, Ludhiana, Punjab 141003</h6>
            </div>

            <div className="location flex py__10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-geo-alt icon__color"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <strong>Email:</strong>
              <h6>palansul1@gmail.com</h6>
            </div>

            <div className="location flex py__10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt icon__color"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <strong>Call us:</strong>
              <h6>+00000000000</h6>
            </div>

            <div className="location flex py__10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-geo-alt icon__color"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              <strong>Time:</strong>
              <h6>10:00 Am - 10:00 Pm (everyday)</h6>
            </div>
          </div>
        </div>
        {/* mid footer */}
        <div className="midFooter">
          <h1>PIKYARD</h1>
          <p>High Quality is our first priority</p>
          <div className="ft">
            <Link to="/contact"><h3>contact us</h3></Link>|
            <Link to="/about"><h3>About us</h3></Link>|
            <Link to="/support"><h3>Report us</h3></Link></div>

          <p>Copyrights 2023 &copy; pikyard.com</p>
        </div>
        {/* Footer 2nd part */}
        <div className="rightFooter">
          <div className="mobile ">
            <div className="footer__2nd__part">
              <h5>Account</h5>

              <Link to="/login"><h3>Sign In</h3></Link>
              <Link to="/login"><h3>Registration</h3></Link>
              <Link to="/password/forgot"><h3>Forgot Password</h3></Link>
            </div>
            {/* Footer 3rd part */}
            <div className="footer__2nd__part">
              <h5>Follow us</h5>
              <Link to="/facebook.com"><h3>Facebook</h3></Link>
              <Link to="/youtube.com"><h3>Youtube</h3></Link>
              <Link to="/instagram.com"><h3>Instagram</h3></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
