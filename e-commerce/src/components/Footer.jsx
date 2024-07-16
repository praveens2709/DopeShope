import { Col, Container, Row } from 'react-bootstrap';
import "../styles/Footer.css";
import paypal from "../Images/paypal.png";
import mastercard from "../Images/mastercard.png";
import visa from "../Images/visa.png";
import email from "../Images/email.png";
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Footer() {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Container fluid className='footer bg-blue white'>
        <Container>
          <Row className='p-5'>
            <Col lg={3}>
              <div className='dopeshope fs-2 mb-1'>DopeShope</div>
              <p className='mb-1'>Experience fashion redefined. Your style, our curated collections. Shop now!</p>
              <p>We extend our heartfelt gratitude for choosing us. Thank you!</p>
              <Row className='mt-4 align-items-center'>
                <Col lg={5}>
                  <h6 className='mb-0'>We Accept</h6>
                </Col>
                <Col lg={7} className='px-0'>
                  <div className='d-flex align-items-center gap-2'>
                    <div className='image-bg rounded-1 d-flex align-items-center'>
                      <img src={paypal} alt='paypal' className='img-fluid' />
                    </div>
                    <div className='image-bg rounded-1 d-flex align-items-center'>
                      <img src={mastercard} alt='mastercard' className='img-fluid' />
                    </div>
                    <div className='image-bg rounded-1 d-flex align-items-center'>
                      <img src={visa} alt='visa' className='img-fluid' />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={2} className='py-2 ms-6'>
              <h5 className='fs-3 mb-3 fw-semibold'>Menu</h5>
              <ul className='list-unstyled'>
                <li className='mb-3' onClick={scrollUp}><Link to={'/'}><span className='ffffffcc'>Home</span></Link></li>
                <li className='mb-3' onClick={scrollUp}><Link to={'/shop'}><span className='ffffffcc'>Shop</span></Link></li>
                <li className='mb-3' onClick={scrollUp}><Link to={'/about'}><span className='ffffffcc'>About</span></Link></li>
                <li className='mb-3' onClick={scrollUp}><Link to={'/contact'}><span className='ffffffcc'>Contact</span></Link></li>
              </ul>
            </Col>
            <Col lg={3} className='py-2 px-4'>
              <h5 className='fs-3 mb-3 fw-semibold'>Help</h5>
              <ul className='list-unstyled'>
              <li className='mb-3' onClick={scrollUp}><Link to={'/shipping-info'}><span className='ffffffcc'>Shipping Info</span></Link></li>
              <li className='mb-3' onClick={scrollUp}><Link to={'/returns&exchanges'}><span className='ffffffcc'>Returns & Exchanges</span></Link></li>
              <li className='mb-3' onClick={scrollUp}><Link to={'/terms&conditions'}><span className='ffffffcc'>Terms & Conditions</span></Link></li>
              <li className='mb-3' onClick={scrollUp}><Link to={'/privacy-policy'}><span className='ffffffcc'>Privacy Policy</span></Link></li>
              </ul>
            </Col>
            <Col lg={3} className='py-2'>
              <h5 className='fs-3 mb-3 fw-semibold'>Newsletter</h5>
              <p>Be the first to know about new arrivals, look books, sales & exclusive offers!</p>
              <form action='#' className='d-flex newsletter-form'>
                <input type='email' className='inputbox' placeholder='Your Email' />
                <button type='submit' className='email-btn'>
                  <img src={email} alt='email' className='img-fluid' />
                </button>
              </form>
            </Col>
          </Row>
          <Row className='justify-content-center gap-4'>
            <div className='socials rounded-circle d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div className='socials rounded-circle d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className='socials rounded-circle d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className='position-absolute divider2'></div>
          </Row>
        </Container>
        <h4 className='text-center'>Copyright © 2024 DopeShope. All rights reserved.</h4>
      </Container>
    </>
  )
}
