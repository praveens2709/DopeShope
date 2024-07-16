import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import secure from "../Images/sprite-secure.png";

export default function CartHeader() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container fluid className='cart-header animate one fadeInUp'>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to={'/'}><div><h5>DopeShope</h5></div></Link>
          <div className='cart-pages d-flex align-items-center'>
            {path === '/cart' ? (
              <h6 className='active'>BAG</h6>
            ) : (
              <Link to='/cart'><h6>BAG</h6></Link>
            )}
            <span>-----------</span>
            {path === '/cart' || path === '/address' ? (
              <h6 className={path === '/address' ? 'active' : ''}>ADDRESS</h6>
            ) : (
              <Link to='/address'><h6 className={path === '/address' ? 'active' : ''}>ADDRESS</h6></Link>
            )}
            <span>-----------</span>
            {path === '/cart' || path === '/address' ? (
              <h6 className={path === '/payment' ? 'active' : ''}>PAYMENT</h6>
            ) : (
              <Link to='/payment'><h6 className={path === '/payment' ? 'active' : ''}>PAYMENT</h6></Link>
            )}
          </div>
          <div className='d-flex gap-2 align-items-center'>
            <img src={secure} alt='secure' className='' />
            <h6>100% SECURE</h6>
          </div>
        </div>
      </Container>
    </Container>
  );
}
