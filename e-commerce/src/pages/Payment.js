import React, { useState } from 'react';
import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import { Col, Container, Row } from 'react-bootstrap';
import money from "../Images/money.png";
import upi from "../Images/upi.webp";
import card from "../Images/credit-card.png";
import recommended from "../Images/star.png";
import gpay from "../Images/google-pay.png";
import phonepe from "../Images/phonepe.jpeg";
import reload from "../Images/reload.png";

export default function Payment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('recommended');
  const [selectedUPIOption, setSelectedUPIOption] = useState('');
  const [selectedRecommendedOption, setSelectedRecommendedOption] = useState('');

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    setSelectedUPIOption('');
    setSelectedRecommendedOption('');
  };

  const handleUPIOptionChange = (option) => {
    setSelectedUPIOption(option);
  };

  const handleRecommendedOptionChange = (option) => {
    setSelectedRecommendedOption(option);
  };

  return (
    <>
      <CartHeader />
      <Container fluid className='cart-body animate three fadeInUp'>
        <Container>
          <Row className='px-lg-3'>
            <Col lg={8} className='border-end'>
              <div className='cart-left'>
                <div className='payment-section'>
                  <h6 className='py-1'>Choose Payment Mode</h6>
                  <div className='d-flex payment-methods border rounded-1'>
                    <Col lg={5} className='bg-grey2'>
                      <div className='payment-left d-flex flex-column'>
                        <div
                          className={`cursor-pointer px-2 py-3 d-flex gap-2 align-items-center payment-option border-end ${selectedPaymentMethod === 'recommended' ? 'active' : ''}`}
                          onClick={() => handlePaymentMethodChange('recommended')}
                        >
                          <img src={recommended} alt='recommended' />
                          <p className='mb-0 fw-normal'>Recommended</p>
                        </div>
                        <div
                          className={`cursor-pointer px-2 py-3 d-flex gap-2 align-items-center payment-option border-end border-top ${selectedPaymentMethod === 'cod' ? 'active' : ''}`}
                          onClick={() => handlePaymentMethodChange('cod')}
                        >
                          <img src={money} alt='cod' />
                          <p className='mb-0 fw-normal'>Cash on Delivery (Cash/UPI)</p>
                        </div>
                        <div
                          className={`cursor-pointer px-2 py-3 d-flex gap-2 align-items-center payment-option border-end border-top ${selectedPaymentMethod === 'upi' ? 'active' : ''}`}
                          onClick={() => handlePaymentMethodChange('upi')}
                        >
                          <img src={upi} alt='upi' />
                          <p className='mb-0 fw-normal'>UPI (Pay via any App)</p>
                        </div>
                        <div
                          className={`cursor-pointer px-2 py-3 d-flex gap-2 align-items-center payment-option border-end border-bottom border-top ${selectedPaymentMethod === 'card' ? 'active' : ''}`}
                          onClick={() => handlePaymentMethodChange('card')}
                        >
                          <img src={card} alt='card' />
                          <p className='mb-0 fw-normal'>Credit/Debit Card</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={7}>
                      {selectedPaymentMethod === 'recommended' && (
                        <div className='payment-right d-flex flex-column p-3'>
                          <p className='dark mb-2'>Recommended Payment Options</p>
                          <div
                            className='cursor-pointer d-flex align-items-center justify-content-between py-2 border-bottom'
                            onClick={() => handleRecommendedOptionChange('phonepe')}
                          >
                            <div className='d-flex align-items-center gap-2'>
                              <input type='radio' name='recommended' checked={selectedRecommendedOption === 'phonepe'} readOnly className='cursor-pointer'/>
                              <p className='mb-0 fw-medium'>PhonePe</p>
                            </div>
                            <img src={phonepe} alt='phonepe' className='rounded-circle p-1' />
                          </div>
                          {selectedRecommendedOption === 'phonepe' && (
                            <button type="button" className="w-100 my-2">PAY NOW</button>
                          )}
                          <div
                            className='cursor-pointer d-flex align-items-center justify-content-between py-2 border-bottom'
                            onClick={() => handleRecommendedOptionChange('gpay')}
                          >
                            <div className='d-flex align-items-center gap-2'>
                              <input type='radio' name='recommended' checked={selectedRecommendedOption === 'gpay'} readOnly className='cursor-pointer'/>
                              <p className='mb-0 fw-medium'>Google Pay</p>
                            </div>
                            <img src={gpay} alt='gpay' className='rounded-circle p-1' />
                          </div>
                          {selectedRecommendedOption === 'gpay' && (
                            <button type="button" className="w-100 my-2">PAY NOW</button>
                          )}
                          <div
                            className='cursor-pointer d-flex align-items-center justify-content-between py-2'
                            onClick={() => handleRecommendedOptionChange('cod')}
                          >
                            <div className='d-flex align-items-center gap-2'>
                              <input type='radio' name='recommended' checked={selectedRecommendedOption === 'cod'} readOnly className='cursor-pointer'/>
                              <p className='mb-0 fw-medium'>Cash on Delivery (Cash/UPI)</p>
                            </div>
                            <img src={money} alt='money' className='rounded-circle p-1' />
                          </div>
                          {selectedRecommendedOption === 'cod' && (
                            <div className='payment-right d-flex flex-column p-3'>
                              <p className='dark mb-2'>Cash on Delivery (Cash/UPI)</p>
                              <div className='captcha-box d-flex align-items-center gap-2'>
                                <div className='border rounded-1 pt-1 pb-2 px-5'>2 7 0 9 3</div>
                                <img src={reload} alt='reload' className='border-0' />
                              </div>
                              <div className='contact-form mt-3'>
                                <div className='input-box position-relative'>
                                  <input required name='' className='rounded-1 border' />
                                  <span>Enter code shown in above image*</span>
                                </div>
                              </div>
                              <p>You can pay via Cash/UPI on delivery</p>
                              <button type="button" className="w-100">PLACE ORDER</button>
                            </div>
                          )}
                        </div>
                      )}
                      {selectedPaymentMethod === 'cod' && (
                        <div className='payment-right d-flex flex-column p-3'>
                          <p className='dark mb-2'>Cash on Delivery (Cash/UPI)</p>
                          <div className='captcha-box d-flex align-items-center gap-2'>
                            <div className='border rounded-1 pt-1 pb-2 px-5'>2 7 0 9 3</div>
                            <img src={reload} alt='reload' className='border-0' />
                          </div>
                          <div className='contact-form mt-3'>
                            <div className='input-box position-relative'>
                              <input required name='' className='rounded-1 border' />
                              <span>Enter code shown in above image*</span>
                            </div>
                          </div>
                          <p>You can pay via Cash/UPI on delivery</p>
                          <button type="button" className="w-100">PLACE ORDER</button>
                        </div>
                      )}
                      {selectedPaymentMethod === 'upi' && (
                        <div className='payment-right d-flex flex-column p-3'>
                          <p className='dark mb-2'>Pay using UPI</p>
                          <div
                            className='cursor-pointer d-flex align-items-center justify-content-between py-3 border-bottom'
                            onClick={() => handleUPIOptionChange('phonepe')}
                          >
                            <div className='d-flex align-items-center gap-2'>
                              <input type='radio' name='upi' checked={selectedUPIOption === 'phonepe'} readOnly className='cursor-pointer'/>
                              <p className='mb-0 fw-medium'>PhonePe</p>
                            </div>
                            <img src={phonepe} alt='phonepe' className='rounded-circle p-1' />
                          </div>
                          {selectedUPIOption === 'phonepe' && (
                            <button type="button" className="w-100 my-2">PAY NOW</button>
                          )}
                          <div
                            className='cursor-pointer d-flex align-items-center justify-content-between py-3'
                            onClick={() => handleUPIOptionChange('gpay')}
                          >
                            <div className='d-flex align-items-center gap-2'>
                              <input type='radio' name='upi' checked={selectedUPIOption === 'gpay'} readOnly className='cursor-pointer'/>
                              <p className='mb-0 fw-medium'>Google Pay</p>
                            </div>
                            <img src={gpay} alt='gpay' className='rounded-circle p-1' />
                          </div>
                          {selectedUPIOption === 'gpay' && (
                            <button type="button" className="w-100 my-2">PAY NOW</button>
                          )}
                        </div>
                      )}
                      {selectedPaymentMethod === 'card' && (
                        <div className='payment-right d-flex flex-column p-3'>
                          <p className='dark mb-2'>Credit/Debit Card</p>
                          <div className='contact-form mt-3 d-flex flex-column gap-3'>
                            <div className='input-box position-relative'>
                              <input required name='' className='rounded-1 border' />
                              <span>Card number</span>
                            </div>
                            <div className='input-box position-relative'>
                              <input required name='' className='rounded-1 border' />
                              <span>Name on card</span>
                            </div>
                            <div className='d-flex gap-2'>
                              <div className='input-box position-relative' style={{ width: "60%" }}>
                                <input required name='' className='rounded-1 border' />
                                <span>Expiry(MM/YY)</span>
                              </div>
                              <div className='input-box position-relative' style={{ width: "40%" }}>
                                <input type='password' required name='' className='rounded-1 border' />
                                <span>CVV</span>
                              </div>
                            </div>
                          </div>
                          <div className='mt-5 mb-2'><button type="button" className="w-100 ">PAY NOW</button></div>
                        </div>
                      )}
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className='cart-right'>
                <div className='d-flex align-items-center gap-2'>
                  <h6 className='mb-3 fw-bold'>PRICE DETAILS</h6>
                  <h6 className="pt-0 fw-semibold">(2 Items)</h6>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <span>Total MRP</span><span className='span'>₹1598</span>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                  <span>Discount on MRP</span><span className='span blue'>- ₹600</span>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                  <span>Platform Fee</span><span className='span blue'>Free</span>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-2 pb-3 border-bottom'>
                  <span>Shipping Fee</span><span className='span blue'>Free</span>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                  <span className='total-amount fw-semibold'>Total Amount</span><span className='fw-semibold span2 blue'>₹ 998</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <CartFooter />
    </>
  );
}
