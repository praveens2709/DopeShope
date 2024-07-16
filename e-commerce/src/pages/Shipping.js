import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../styles/Other.css";
import Header from '../components/Header';
import wave from "../Images/wave.png";
import { Link } from 'react-router-dom';
import thankyou from "../Images/folded.png";
import Footer from '../components/Footer';
import CommonBanner from '../components/CommonBanner';

export default function Shipping() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <Header />
            <CommonBanner />
            <Container fluid>
                <Container>
                    <Row className='mt-5 help-section animate six fadeInUp'>
                        <Col lg={8}>
                            <h3 className='text-uppercase'>Shipping Info</h3>
                            <p className='fw-medium mb-2'>Hey There! <img src={wave} alt='wave' className='wave' /> Thank you for shopping with us! Here you'll find all the details you need to understand how we process and deliver your orders. We're committed to ensuring your shopping experience is seamless and satisfying from start to finish.</p>
                            <p className='fw-bolder mb-1 dark-green'>Processing Time</p>
                            <ul className='fw-medium'>
                                <li><b>Order Confirmation:</b> Once your order is placed, you'll receive an email confirmation.</li>
                                <li><b>Processing:</b> Orders are typically processed within 1-2 business days.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Shipping Methods & Delivery Times</p>
                            <p className='fw-medium mb-2'>We offer various shipping options to meet your needs. Delivery times and costs vary based on your location and selected shipping method:</p>
                            <ul className='fw-medium'>
                                <li><b>Standard Shipping:</b> 3-7 business days</li>
                                <li><b>Expedited Shipping:</b> 2-3 business days</li>
                                <li><b>Next-Day Shipping:</b> 1 business day</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Shipping Costs</p>
                            <p className='fw-medium mb-2'>Shipping costs are calculated at checkout based on the weight and destination of your order. Enjoy free standard shipping on orders over ₹499.</p>
                            <p className='fw-bolder mb-1 dark-green'>Order Tracking</p>
                            <p className='fw-medium mb-2'>After your order is shipped, you'll receive a tracking number via email. Use this number to track your package's progress on our website or the carrier's site.</p>
                            <p className='fw-bolder mb-1 dark-green'>Lost or Damaged Packages</p>
                            <p className='fw-medium mb-2'>In the rare event that your package is lost or arrives damaged, please notify us immediately. We will work with the carrier to resolve the issue and arrange a replacement or refund as necessary.</p>
                            <p className='fw-bolder mb-1 dark-green'>Returns & Exchanges</p>
                            <p className='fw-medium mb-1'>For information about returns and exchanges, please visit our <Link to={'/returns&exchanges'} onClick={scrollUp} className='blue fw-bold'>Returns & Exchanges</Link> page.</p>
                            <p className='fw-medium mb-3'>We appreciate your business and are dedicated to providing you with a top-notch shopping experience. If you have any further questions about shipping, please don't hesitate to contact our support team.</p>
                            <h6 className='fw-bold mb-2 blue'>Thank you for choosing us! Happy shopping! <img src={thankyou} alt='thank you' className='thankyou' /></h6>
                        </Col>
                        <Col lg={4}>
                            <div className='delivery w-100 h-100'></div>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center my-5'>
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
