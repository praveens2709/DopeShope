import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {

    const scrollUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <>
            <Container fluid className='dopeshope-navbar shadow-lg position-sticky top-0 left-0 animate one fadeInUp'>
                <Container>
                    <div className='text-center pt-1 fs-6 dopeshope'>DopeShope</div>
                    <div className='d-flex justify-content-around m-auto navbar products-navbar mt--5'>
                        <Link to={'/'} onClick={scrollUp} className='blue'>Home</Link>
                        <Link to={'/shop'} onClick={scrollUp} className='blue'>Products</Link>
                        <Link to={'/about'} onClick={scrollUp} className='blue'>About</Link>
                        <Link to={'/contact'} onClick={scrollUp} className='blue'>Contact</Link>
                        <Link to={'/account'} onClick={scrollUp} className='blue'>Account</Link>
                        <Link to={'/cart'} onClick={scrollUp} className='position-relative'><FontAwesomeIcon icon={faBagShopping} style={{ color: "#038c99" }} size='lg' />
                            <div className='cart-count text-white d-flex justify-content-center align-items-center position-absolute'>0</div>
                        </Link>
                    </div>
                </Container>
            </Container>
        </>
    )
}
