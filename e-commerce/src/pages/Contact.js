import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CommonBanner from '../components/CommonBanner'
import "../styles/Contact.css";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

export default function Contact() {

  useEffect(() => {
    const inputs = document.querySelectorAll('.input-box input, .input-box textarea');

    const handleFocus = (e) => {
      e.target.classList.add('has-value');
    };

    const handleBlur = (e) => {
      if (!e.target.value) {
        e.target.classList.remove('has-value');
      }
    };

    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      if (input.value) {
        input.classList.add('has-value');
      }
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <CommonBanner />
      <Container fluid>
        <Container className='my-5'>
          <Row>
            <Col lg={6}>
              <div className='contact-left animate five fadeInUp rounded-2 p-3 position-relative'>
                <h3 className='mb-4'>Contact Us</h3>
                <p>We're here to assist you in any way we can. Whether you have questions about our products, need help with an order, or just want to say hello, we’d love to hear from you.</p>
                <div className='d-flex gap-3 align-items-center mb-2 mt-4'>
                  <div className='contact-icon d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faEnvelope} /></div>
                  <h6 className='mb-0'>Dopeshope@gmail.com</h6>
                </div>
                <div className='d-flex gap-3 align-items-center mb-2'>
                  <div className='contact-icon d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faLocationDot} /></div>
                  <h6 className='mb-0 mt-1'>275-A, Bapunagar, Jhalamand Circle, Jodhpur, Rajasthan, 342005</h6>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                  <div className='contact-icon d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faPhone} /></div>
                  <h6 className='mb-0'>9116577183 , 8824236871</h6>
                </div>
                <div className='d-flex align-items-center gap-2 mt-4'>
                  <h5 className='fw-bolder'>Business Hours :</h5>
                  <h5 className='fs-7'>Monday - Friday: 9:00 AM - 6:00 PM (IST)</h5>
                </div>
                <p>We strive to respond to all inquiries within 24 hours during our business hours. Your satisfaction is our priority, and we're here to ensure you have a seamless shopping experience.</p>
                <div className='d-flex gap-2 justify-content-end'>
                  <div className='contact-icon2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </div>
                  <div className='contact-icon2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className='contact-icon2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className='contact-icon2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='contact-right contact-left animate six fadeInUp rounded-2 p-3 position-relative'>
                <h3 className='text-end mb-4'>Get In Touch</h3>
                <form action='#' className='contact-form'>
                  <div className='input-box position-relative my-4'>
                    <input type='text' required name='' />
                    <span>Name</span>
                  </div>
                  <div className='input-box position-relative my-4'>
                    <input type='text' required name='' />
                    <span>Email</span>
                  </div>
                  <div className='input-box position-relative my-4'>
                    <input type='text' required name='' />
                    <span>Phone</span>
                  </div>
                  <div className='input-box position-relative mt-4 mb-3'>
                    <textarea required name='' />
                    <span>Message</span>
                  </div>
                  <div className='input-box position-relative d-flex gap-2'>
                    <input type='checkbox' />
                    <h6>Subscribe to get updates</h6>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button type='submit' className='contact-icon2 d-flex justify-content-center align-items-center'>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
          <div className='mt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d559.8383853026687!2d73.05319216464636!3d26.23081954092404!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716378300030!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"></iframe>
          </div>
          <Row>
            <div className='d-flex justify-content-center mt-5'>
              <button type='button' className='contact-btn talk rounded-end-0 rounded-start-2'>Talk to us</button>
              <button type='button' className='contact-btn chat rounded-start-0 rounded-end-2'>Chat with us</button>
            </div>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
