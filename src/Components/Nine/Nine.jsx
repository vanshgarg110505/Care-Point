import React from 'react';
import './Nine.css';

const Nine = () => {
  return (
    <div className="footer">
      <div className="enquiry">
        <div className="GIT">
          <h1>Get in Touch</h1>
          <div className="sub-enquiry">
            <div>
              <img src="src/assets/email.png" alt="" />
            </div>
            <div className="sub-enquiry-2">
              <h2>free@psdfreebies.com</h2>
              <h2>free@psdfreebies.com</h2>
            </div>
          </div>
          <div className="sub-enquiry">
            <div>
              <img src="src/assets/phone.png" alt="" />
            </div>
            <div className="sub-enquiry-2">
              <h2>+123 456 7890</h2>
              <h2>+123 456 7890</h2>
            </div>
          </div>
          <div className="sub-enquiry">
            <div>
              <img src="src/assets/address.png" alt="" />
            </div>
            <div className="sub-enquiry-2">
              <h2>123, Main Road, New City,</h2>
              <h2>My Country, 123456</h2>
            </div>
          </div>
          <img style={{ marginTop: '3vh' }} src="src/assets/socialmedia-2.png" alt="" />
        </div>
        <div className="QL">
          <h1>Quick Links</h1>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">About us</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Blog</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Contact us</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Faq</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Insurance</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Contact us</a>
          </div>
        </div>
        <div className="QL">
          <h1>Our Services</h1>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Work Injuries</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Sport Injuries</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Cold Laser Therapy</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Massage Therapy</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Physiotherapy</a>
          </div>
          <div className="QL-1">
            <img src="src/assets/arrow.png" alt="" />
            <a href="#">Chiropathetic Therapy</a>
          </div>
        </div>
        <div className="enquiry-form">
          <h1>Enquiry Form</h1>
          <form className="enquiry-form-2">
            <input type="text" placeholder="Name" />
            <hr className="enquiryformhr" />
            <input type="tel" placeholder="Phone" />
            <hr className="enquiryformhr" />
            <textarea cols="30" rows="4" placeholder="Message"></textarea>
            <hr className="enquiryformhr" />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Nine;
