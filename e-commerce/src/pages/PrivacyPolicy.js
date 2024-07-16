import React from 'react'
import Header from '../components/Header'
import CommonBanner from '../components/CommonBanner'
import wave from "../Images/wave.png";
import thankyou from "../Images/folded.png";
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <CommonBanner />
            <Container fluid>
                <Container>
                    <Row className='mt-5 help-section animate six fadeInUp'>
                        <Col lg={8}>
                            <h3 className='text-uppercase'>Privacy Policy</h3>
                            <p className='fw-medium mb-2'>Welcome to DopeShope!<img src={wave} alt='wave' className='wave' /> Your privacy is important to us. This Privacy Policy outlines how DopeShope collects, uses, and protects your personal information. By using our website and services, you agree to the practices described in this policy.</p>
                            <p className='fw-bolder mb-1 dark-green'>Information We Collect</p>
                            <ul className='fw-medium'>
                                <li><b>Personal Information:</b> When you create an account, place an order, or subscribe to our newsletter, we collect personal information such as your name, email address, phone number, billing and shipping addresses, and payment information.</li>
                                <li><b>Non-Personal Information:</b> We may also collect non-personal information about your visit to our website, such as your IP address, browser type, operating system, referring website, pages viewed, and the date and time of your visit.</li>
                                <li><b>Cookies:</b> Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and track site usage. You can manage your cookie preferences through your browser settings.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>How We Use Your Information</p>
                            <ul className='fw-medium'>
                                <li><b>To Process Orders:</b> We use your personal information to process and fulfill your orders, including sending order confirmations, processing payments, and delivering products.</li>
                                <li><b>To Improve Customer Service:</b> Your information helps us respond more effectively to your customer service requests and support needs.</li>
                                <li><b>To Personalize Your Experience:</b> We use your information to personalize your experience on our website, showing you products and content that may interest you.</li>
                                <li><b>To Send Periodic Emails:</b> We may use your email address to send you information and updates related to your order, as well as occasional company news, updates, and promotions. You can opt-out of receiving these emails at any time.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>How We Protect Your Information</p>
                            <ul className='fw-medium'>
                                <li><b>Security Measures:</b> We implement a variety of security measures to safeguard your personal information, including encryption, secure servers, and access controls.</li>
                                <li><b>Third-Party Services:</b> We do not sell, trade, or otherwise transfer your personal information to outside parties, except to trusted third-party service providers who assist us in operating our website, conducting our business, or serving you, provided they agree to keep this information confidential.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Your Rights</p>
                            <ul className='fw-medium'>
                                <li><b>Access and Update Information:</b> You have the right to access and update your personal information at any time by logging into your account on our website.</li>
                                <li><b>Opt-Out:</b> You can opt-out of receiving marketing emails by following the unsubscribe instructions included in each email or by contacting us directly.</li>
                            </ul>
                            <p className='fw-bolder mb-1 dark-green'>Children's Privacy</p>
                            <p className='fw-medium mb-2'>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete that information.</p>
                            <p className='fw-bolder mb-1 dark-green'>Changes to This Privacy Policy</p>
                            <p className='fw-medium mb-2'>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the updated policy will take effect immediately upon posting. Your continued use of our website after any changes signifies your acceptance of the updated terms.</p>
                            <p className='fw-bolder mb-1 dark-green'>Questions & Concerns</p>
                            <p className='fw-medium mb-2'>If you have any questions or concerns about this Privacy Policy, you can have a talk or chat with us below.</p>
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
