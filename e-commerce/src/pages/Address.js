import React from 'react'
import CartHeader from '../components/CartHeader'
import { Col, Container, Row } from 'react-bootstrap'
import product from "../Images/product.png";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CartFooter from '../components/CartFooter';

export default function Address() {
    return (
        <>
            <CartHeader />
            <Container fluid className='cart-body animate three fadeInUp'>
                <Container>
                    <Row className='px-lg-5'>
                        <Col lg={8} className='border-end'>
                            <div className='cart-left'>
                                <div className='address-section d-flex flex-column gap-2'>
                                    <div className='mt-3 d-flex justify-content-between align-items-center'>
                                        <h6 className='mb-0'>Select Delivery Address</h6>
                                        <div className='add-address cursor-pointer py-1 px-2'><FontAwesomeIcon icon={faPlus} size='xs' /> ADD NEW ADDRESS</div>
                                    </div>
                                    <span className='fw-medium'>DEFAULT ADDRESS</span>
                                    <div className='profile-box bg-grey2 pt-2 px-2'>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <input type='radio' checked />
                                            <p className='dark-green josefin mb-0'>Praveen Sharma</p>
                                            <span className='px-1 rounded-4 dark-green border-green'>Home</span>
                                        </div>
                                        <div className='ps-3 address-font pb-2 border-bottom'>
                                            <Col lg={6} className='mt-2'>
                                                <p className='text-dark mb-0'>275-A Bapunagar Jhalamand Circle,</p>
                                                <p className='text-dark mb-0'>Jodhpur, Rajasthan - 342005</p>
                                                <p className='text-dark my-2'>Mobile: 9116577183</p>
                                                <p className='mb-1 dark'>Pay on Delivery available*</p>
                                            </Col>
                                        </div>
                                        <div className='d-flex justify-content-evenly'>
                                            <button className=''>EDIT</button>
                                            <span className='fs-4 fw-lighter'>|</span>
                                            <button className=''>REMOVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='cart-right'>
                                <h6 className='mb-2 fw-bold text-uppercase'>Delivery Estimates</h6>
                                <div className='address-delivery d-flex align-items-center gap-2 mb-3'>
                                    <img src={product} alt='product' />
                                    <p className='fw-normal mb-0'>Estimated delivery by <b>29 May 2024</b></p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <h6 className='mb-2 fw-bold'>PRICE DETAILS</h6>
                                    <h6 className="fw-semibold">(2 Items)</h6>
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
                                <Link to={'/payment'}><button type="button" className="w-100">CONTINUE</button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <CartFooter/>
        </>
    )
}
