import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paypal from "../Images/paypal.png";
import mastercard from "../Images/card.png";
import visa from "../Images/visa.png";
import bhim from "../Images/bhim.png";
import rupay from "../Images/rupay.png";
import cod from "../Images/cart-cod.png";
import net from "../Images/nb.png";

export default function CartFooter() {
  return (
    <>
    <Container fluid className='cart-footer animate five fadeInUp border-top'>
        <Container>
          <Row>
            <div className='d-flex justify-content-around align-items-center'>
              <div className='payment-methods d-flex gap-2 align-items-center'>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={paypal} alt='paypal' className='img-fluid' />
                </div>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={mastercard} alt='mastercard' className='img-fluid' />
                </div>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={visa} alt='visa' className='img-fluid' />
                </div>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={bhim} alt='bhim' className='img-fluid w-100 h-100 rounded-1' />
                </div>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={rupay} alt='bhim' className='img-fluid w-100 h-100 rounded-1' />
                </div>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={cod} alt='bhim' className='img-fluid w-100 h-100 rounded-1' />
                </div>
                <div className='image-bg2 rounded-1 d-flex align-items-center'>
                  <img src={net} alt='bhim' className='img-fluid w-100 h-100 rounded-1' />
                </div>
              </div>
              <Link to={'/contact'} className='d-flex gap-2'><h6>Need help ?</h6><h6>Contact us</h6></Link>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}
