import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../styles/Cart.css";
import { Link } from 'react-router-dom';
import product from "../Images/product.png";
import product2 from "../Images/product3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import returnitem from "../Images/return.png";
import productblured from "../Images/products-blurred.webp";
import CartHeader from '../components/CartHeader';

export default function Cart() {

  return (
    <>
      <CartHeader/>
      <Container fluid className='cart-body animate three fadeInUp'>
        <Container>
          <Row className='px-lg-5'>
            <Col lg={8} className='border-end'>
              <div className='cart-left'>
                <div className='cl-1 d-flex align-items-center justify-content-between mb-4 px-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <input type='checkbox' />
                    <h6>0/2 ITEMS SELECTED</h6>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <button className='h5'>REMOVE</button>
                    <span></span>
                    <button className='h5'>MOVE TO WISHLIST</button>
                  </div>
                </div>
                <div className='cl-2 rounded-1 p-2 d-flex align-items-center gap-2 mt-2 position-relative'>
                  <button type="button" className="btn-close position-absolute"></button>
                  <Col lg={3} className='cl-2-img position-relative'>
                    <div className='product-img2'>
                      <img src={product} alt='' className='w-100 h-100' />
                      <input type='checkbox' className='position-absolute' />
                    </div>
                  </Col>
                  <Col lg={8} className='cl-2-content d-flex flex-column'>
                    <p className='fw-bold'>DopeShope</p>
                    <p className='fw-normal'>Men's Cotton T-shirt</p>
                    <p className='light-color d-flex gap-1'>Sold by: <p className='light-color text-uppercase'>dopeshope pvt. ltd.</p></p>
                    <div className='d-flex align-items-center gap-2 pt-1'>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal1" className='size-qty d-flex align-items-center gap-1'>Size:
                        <span>M</span>
                        <span><FontAwesomeIcon icon={faCaretDown} size='xs' /></span>
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal2" className='size-qty d-flex align-items-center gap-1'>Qty:
                        <span>1</span>
                        <span><FontAwesomeIcon icon={faCaretDown} size='xs' /></span>
                      </button>
                    </div>
                    <p className='fw-semibold pt-1 price'>₹ 499</p>
                    <div className='d-flex align-items-center gap-1'>
                      <img src={returnitem} alt='return' />
                      <p className='fw-normal d-flex gap-1'>7 days <p>return available</p></p>
                    </div>
                    <p className='d-flex gap-1'>Delivery in <p className='fw-medium'>3-5 days</p></p>
                  </Col>
                </div>
                <div className='cl-2 rounded-1 p-2 d-flex align-items-center gap-2 mt-2 position-relative'>
                  <button type="button" className="btn-close position-absolute"></button>
                  <Col lg={3} className='cl-2-img position-relative'>
                    <div className='product-img2'>
                      <img src={product2} alt='' className='w-100 h-100' />
                      <input type='checkbox' className='position-absolute' />
                    </div>
                  </Col>
                  <Col lg={8} className='cl-2-content d-flex flex-column'>
                    <p className='fw-bold'>DopeShope</p>
                    <p className='fw-normal'>Men's Cotton T-shirt</p>
                    <p className='light-color d-flex gap-1'>Sold by: <p className='light-color text-uppercase'>dopeshope pvt. ltd.</p></p>
                    <div className='d-flex align-items-center gap-2 pt-1'>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal1" className='size-qty d-flex align-items-center gap-1'>Size:
                        <span>M</span>
                        <span><FontAwesomeIcon icon={faCaretDown} size='xs' /></span>
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal2" className='size-qty d-flex align-items-center gap-1'>Qty:
                        <span>1</span>
                        <span><FontAwesomeIcon icon={faCaretDown} size='xs' /></span>
                      </button>
                    </div>
                    <p className='fw-semibold pt-1 price'>₹ 499</p>
                    <div className='d-flex align-items-center gap-1'>
                      <img src={returnitem} alt='return' />
                      <p className='fw-normal d-flex gap-1'>7 days <p>return available</p></p>
                    </div>
                    <p className='d-flex gap-1'>Delivery in <p className='fw-medium'>3-5 days</p></p>
                  </Col>
                </div>
                <div className='cl-2 rounded-1 p-2 d-flex align-items-center justify-content-between mt-4'>
                  <div className='blured'>
                    <img src={productblured} alt='product' className='w-100 h-100' />
                  </div>
                  <h6 className='mb-0'>Login to see items from your existing bag and wishlist.</h6>
                  <button type='button' className='login-now rounded-1'>Login Now</button>
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
                <Link to={'/address'}><button type="button" className="w-100">PLACE ORDER</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Modal1 */}
      <div className="modal fade" id="Modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className='d-flex align-items-center gap-2'>
                <div className='product-img3'>
                  <img src={product} alt='product' className='w-100 h-100' />
                </div>
                <div className='product-content d-flex flex-column gap-1'>
                  <p className='fw-semibold'>DopeShope</p>
                  <p className='fw-normal'>Men's Cotton T-shirt</p>
                  <p className='fw-semibold price d-flex gap-2'>₹ 499 <p className='price old-price'>₹ 1099</p></p>
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='fw-bolder mb-2'>Select Size</p>
              <div className='sizes d-flex gap-2'>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>XS</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>S</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>M</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>L</div>
                <div className='size2 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>XL</div>
                <div className='size2 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>XXL</div>
              </div>
              <p className='fw-light d-flex gap-1 my-3'>Seller: <p className='fw-semibold'>DopeShope Pvt. Ltd.</p></p>
              <button type="button" className="w-100 py-2">Done</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal2 */}
      <div className="modal fade" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-content-2">
            <div className="modal-header">
              <div className='product-content'>
                <p className='fw-semibold fw-bold'>Select Quantity</p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='sizes d-flex gap-3 mb-3'>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>1</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>2</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>3</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>4</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>5</div>
              </div>
              <div className='sizes d-flex gap-3 mb-4'>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>6</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>7</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>8</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>9</div>
                <div className='size1 fw-semibold rounded-circle d-flex align-items-center justify-content-center'>10</div>
              </div>
              <button type="button" className="w-100 py-2">Done</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
