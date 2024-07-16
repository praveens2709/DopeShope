import React from 'react'
import Header from '../components/Header'
import CommonBanner from '../components/CommonBanner'
import wave from "../Images/wave.png";
import { Link } from 'react-router-dom';
import thankyou from "../Images/folded.png";
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer';

export default function TermsAndConditions() {

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
                            <h3 className='text-uppercase'>Terms & Conditions</h3>
                            <p className='fw-medium mb-2'>Welcome to DopeShope!<img src={wave} alt='wave' className='wave' /> These Terms & Conditions outline the rules and regulations for using our website and services. By accessing and making purchases from our site, you agree to comply with these terms. Please read them carefully.</p>
                            <p className='fw-bolder mb-1 dark-green'>General Terms</p>
                            <ul className='fw-medium'>
                                <li><b>Acceptance of Terms:</b> By accessing our website and using our services, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our website.</li>
                                <li><b>Changes to Terms:</b> We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Your continued use of the website following any changes signifies your acceptance of the updated terms.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>User Account</p>
                            <ul className='fw-medium'>
                                <li><b>Account Creation:</b> To make a purchase, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                                <li><b>Account Termination:</b> We reserve the right to suspend or terminate your account at our discretion, without prior notice, if you violate any part of these Terms & Conditions.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Purchases</p>
                            <ul className='fw-medium'>
                                <li><b>Order Acceptance:</b> All orders placed on our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.</li>
                                <li><b>Pricing and Availability:</b> Prices and availability of products are subject to change without notice. We strive to display accurate information but cannot guarantee that all product descriptions, prices, and availability are error-free.</li>
                                <li><b>Payment:</b> By providing payment information, you represent and warrant that the information is accurate, and you are authorized to use the payment method. All payments are subject to validation checks and authorization by the payment service provider.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Shipping & Delivery</p>
                            <ul className='fw-medium'>
                                <li><b>Shipping Policies:</b> Shipping terms, including delivery times and costs, are detailed in our <Link to={'/shipping-info'} onClick={scrollUp} className='blue'>Shipping Info</Link> section. By placing an order, you agree to our shipping policies.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Returns & Exchanges</p>
                            <ul className='fw-medium'>
                                <li><b>Return Policies:</b> Our return policies are outlined in the <Link to={'/returns&exchanges'} onClick={scrollUp} className='blue'>Returns & Exchanges</Link> section. By making a purchase, you agree to these terms.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Intellectual Property</p>
                            <ul className='fw-medium'>
                                <li><b>Ownership:</b> All content on our website, including text, graphics, logos, images, and software, is the property of DopeShope and is protected by intellectual property laws.</li>
                                <li><b>Use of Content:</b> You may not reproduce, distribute, modify, or use any content from our website without our explicit written permission.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Disclaimer</p>
                            <p className='fw-medium mb-2'>Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee that our website will be error-free or uninterrupted.</p>
                            <p className='fw-bolder mb-1 dark-green'>Questions & Concerns</p>
                            <p className='fw-medium mb-2'>If you have any questions or concerns regarding these Terms & Conditions, you can have a talk or chat with us below.</p>
                            <p className='fw-medium mb-3'>Thank you for visiting DopeShope. By using our site and services, you agree to abide by these Terms & Conditions. We appreciate your business and look forward to serving you!</p>
                            <h6 className='fw-bold mb-2 blue'>Thank you for choosing us! Happy shopping! <img src={thankyou} alt='thank you' className='thankyou' /></h6>
                        </Col>
                        <Col lg={4} className='p-6'>
                            <div className='delivery2 w-100 h-100'></div>
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
