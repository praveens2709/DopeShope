import React from 'react'
import Header from '../components/Header'
import CommonBanner from '../components/CommonBanner'
import Footer from '../components/Footer'
import wave from "../Images/wave.png";
import { Link } from 'react-router-dom';
import thankyou from "../Images/folded.png";
import { Col, Container, Row } from 'react-bootstrap'

export default function ReturnOrExchange() {

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
              <h3 className='text-uppercase'>Returns & Exchanges</h3>
              <p className='fw-medium mb-2'>Hey There! <img src={wave} alt='wave' className='wave' /> We want you to be completely satisfied with your purchase. If you’re not happy with your order for any reason, our Returns & Exchanges policy ensures a hassle-free process. Here’s everything you need to know:</p>
              <p className='fw-bolder mb-1 dark-green'>Return Policy</p>
              <ul className='fw-medium'>
                <li><b>Eligibility:</b> Items must be returned within 7 days of the delivery date.</li>
                <li><b>Condition:</b> Products must be unused, in their original packaging, and in resalable condition.</li>
              </ul>
              <p className='fw-bolder mb-1 dark-green'>How to Return an Item</p>
              <ul className='fw-medium'>
                <li><b>Initiate a Return:</b> Visit <Link to={'/my-orders'} onClick={scrollUp} className='blue'>My Orders</Link> in your Account section and select the product you want to return.</li>
                <li><b>Provide a Reason for Return:</b> Select the reason for your return from the provided options (e.g., incorrect item, item damaged, changed mind, etc.) and initiate the return.</li>
                <li><b>Package Your Return:</b> Securely pack the item in its original packaging, including all accessories, manuals, and documentation.</li>
                <li><b>Ship the Package:</b> Once you receive confirmation of your return along with the scheduled date and time, our shipping partner will come to your location. Drop off the package with our partner at the scheduled time.</li>
              </ul>
              <p className='fw-bolder mb-1 dark-green'>Refund Process</p>
              <ul className='fw-medium'>
                <li><b>Processing Time:</b> Once we receive your return, please allow 5-7 business days for inspection and processing.</li>
                <li><b>Refund Method:</b> Refunds will be issued to the original payment method used during purchase.</li>
                <li><b>Shipping Costs:</b> Original shipping charges are non-refundable. Return shipping costs will be deducted from your refund unless the return is due to our error.</li>
              </ul>
              <p className='fw-bolder mb-1 dark-green'>Exchange Policy</p>
              <ul className='fw-medium'>
                <li><b>Eligibility:</b> Exchanges are subject to product availability.</li>
                <li><b>Process:</b> To exchange an item, follow the same steps as the return process and indicate that you prefer an exchange.</li>
                <li><b>Replacement Shipping:</b> We offer free shipping on replacement items.</li>
              </ul>
              <p className='fw-bolder mb-1 dark-green'>Damaged or Defective Items</p>
              <ul className='fw-medium'>
                <li>If you receive a damaged or defective item, please contact our customer service team immediately.</li>
                <li>Provide a photo of the damaged or defective product, and we will arrange a replacement or refund at no additional cost to you.</li>
              </ul>
              <p className='fw-bolder mb-1 dark-green'>Return & Exchange Status</p>
              <ul className='fw-medium'>
                <li><b>Tracking:</b> You can track the status of your return or exchange through our Returns Portal.</li>
                <li><b>Customer Service:</b> If you have any questions or need assistance, our customer service team is here to help. You can have a Talk or Chat with us below.</li>
              </ul>
              <p className='fw-medium mb-3'>We appreciate your business and aim to make your shopping experience as smooth as possible.</p>
              <h6 className='fw-bold mb-2 blue'>Thank you for choosing us! Happy shopping! <img src={thankyou} alt='thank you' className='thankyou' /></h6>
            </Col>
            <Col lg={4}>
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
