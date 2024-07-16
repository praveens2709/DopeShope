import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menClothing from '../Images/pexels-photo-11395699.webp';
import '../styles/Home.css';
import womenClothing from '../Images/lady-model.webp'
import underlineImg from '../Images/underline.jpg'
import Tabs from '../components/Tabs';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faAngleUp, faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import kids from "../Images/Kidrovia.png";
import shoe from "../Images/shoespng.parspng.com_.png";
import freeShip from "../Images/free-delivery.png";
import returnExchange from "../Images/return&exchange.png";
import service from "../Images/customer-service.png";
import orders from "../Images/order.png";
import blog1 from "../Images/blog1.jpeg";
import blog2 from "../Images/blog2.webp";
import blog3 from "../Images/blog3.jpeg";
import halftone from "../Images/halftonebg.jpeg"
import product from "../Images/product.png";
import product2 from "../Images/product2.png";
import product3 from "../Images/product3.png";
import product4 from "../Images/product4.png";
import product5 from "../Images/product5.png";
import product6 from "../Images/product6.png";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {

  const [animations, setAnimations] = useState([false, false, false, false, false, false, false, false]);

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = window.scrollY;
      const triggerHeights = [250, 800, 1200, 1850, 2450, 2800, 3200, 780];
      const newAnimations = animations.map((_, index) => scrollHeight > triggerHeights[index]);
      setAnimations(newAnimations);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animations]);

  const animationClass = animations.map((animations, index) =>
    `${animations ? 'animated' : ''}`
  );

  const scrollUp=()=>{
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  }

  const tabs = [
    {
      label: 'Top Deals',
      content: (
        <Container>
          <Row>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product} alt='product1' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                  </div>
                  <div className='red label position-absolute text-center start-0 px-1 text-white'>Top</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product2} alt='product2' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                  </div>
                  <div className='red label position-absolute text-center start-0 px-1 text-white'>Top</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product3} alt='product3' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                  </div>
                  <div className='red label position-absolute text-center start-0 px-1 text-white'>Top</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product4} alt='product4' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                  </div>
                  <div className='red label position-absolute text-center start-0 px-1 text-white'>Top</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      label: 'New Arrivals',
      content: (
        <Container>
          <Row>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product5} alt='product5' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                  </div>
                  <div className='green label position-absolute text-center start-0 px-1 text-white'>New</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product6} alt='product6' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                  </div>
                  <div className='green label position-absolute text-center start-0 px-1 text-white'>New</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product} alt='product' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                  </div>
                  <div className='green label position-absolute text-center start-0 px-1 text-white'>New</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product2} alt='product2' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                  </div>
                  <div className='green label position-absolute text-center start-0 px-1 text-white'>New</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      label: 'Best Sellers',
      content: (
        <Container>
          <Row>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product3} alt='product3' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                  </div>
                  <div className='orange label position-absolute text-center start-0 px-1 text-white'>Best</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product4} alt='product4' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                  </div>
                  <div className='orange label position-absolute text-center start-0 px-1 text-white'>Best</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product5} alt='product5' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                  </div>
                  <div className='orange label position-absolute text-center start-0 px-1 text-white'>Best</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
            <Col lg='3' className={`d-flex justify-content-center ${animationClass[2]}`}>
              <div className='product'>
                <div className='product-img slide slide1 position-relative p-2'>
                  <img src={product6} alt='product6' className='w-100 h-100' />
                  <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                    <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                  </div>
                  <div className='orange label position-absolute text-center start-0 px-1 text-white'>Best</div>
                </div>
                <div className='product-content mt-3'>
                  <h6 className='fs-7'>Men's full sleeve t-shirt</h6>
                  <div className='d-flex rating'>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                    <h6><FontAwesomeIcon icon={faStar} /></h6>
                  </div>
                  <h5 className='price'>$ 15.99</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ),
    },
  ];

  return (
    <>
      <Container fluid className='about-banner banner position-relative'>
        <Container>
          <div className='ms--1 text-center text-black pt-2 fs-4 dopeshope position-relative animate one fadeInUp'>DopeShope</div>
          <div className='u-hover d-flex justify-content-evenly m-auto navbar animate two fadeInUp'>
            <Link to={'/'} className='px-2 white position-relative'>Home</Link>
            <Link to={'/shop'} className='px-2 white position-relative'>Products</Link>
            <Link to={'/about'} className='px-2 white position-relative'>About</Link>
            <Link to={'/contact'} className='px-2 white position-relative'>Contact</Link>
            <Link to={'/account'} className='px-2 white position-relative'>Account</Link>
            <Link to={'/cart'} className='position-relative white'><FontAwesomeIcon icon={faBagShopping} size='lg' />
              <div className='cart-count d-flex justify-content-center align-items-center bg-white position-absolute'>0</div>
            </Link>
          </div>
          <Row className='content-row'>
            <Col lg='8' xs='12' sm='10' className='content'>
              <h5 className='animate three fadeInUp'>Let's Dope Shope</h5>
              <h1 className='pt-lg-3 animate four fadeInUp'>WHERE STYLE<br /> MEETS ELEGANCE</h1>
              <p className='pt-lg-5 animate five fadeInUp'>DopeShope, Where style meets substance. Elevate your wardrobe with our carefully curated collection of must-have apparel, accessories, and footwear to elevate your style game effortlessly.</p>
              <Link to={'/shop'}><button type='button' onClick={scrollUp} className='shop-now-btn mt-5 shadow-lg animate six fadeInUp'>SHOP NOW</button></Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container>
          <Row className='p-5 cat-card'>
            <Col lg='4'>
              <div className={`canvas-wrapper ${animationClass[0]}`}>
                <div className="canvas">
                  <div className="canvas_border">
                    <svg>
                      <defs>
                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop style={{ stopColor: "rgb(253,137,68)", stopOpacity: "1", offset: "0%" }}></stop>
                          <stop style={{ stopColor: "rgb(153,75,23)", stopOpacity: "1", offset: "100%" }}></stop>
                        </linearGradient>
                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop style={{ stopColor: "#D34F48", offset: "0%" }}></stop>
                          <stop style={{ stopColor: "#772522", offset: "100%" }}></stop>
                        </linearGradient>
                      </defs>
                      <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                    </svg>
                  </div>
                  <div className="canvas_img-wrapper">
                    <img className="canvas_img" src={menClothing} alt="" />
                  </div>
                  <div className="canvas_copy">
                    <span class="canvas_copy_subtitle">fashion</span>
                    <strong class="canvas_copy_title">men's</strong>
                    <strong class="canvas_copy_title">clothing</strong>
                    <span class="canvas_copy_details">Elite men's collection</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='8'>
              <p className='p-lg-4 fw-medium'>Discover the essence of modern masculinity in our men's apparel collections, where impeccable design meets exceptional quality. From sleek suiting to casual essentials, each garment is thoughtfully crafted to empower the contemporary gentleman with confidence and style.</p>
              <h5 className='px-lg-4 text-uppercase'>Explore our men's apparel collections, <b>where quality meets style.</b></h5>
              <div className='text-end me-4'>
                <Link to={'/shop'}><button type='button' onClick={scrollUp} className='explore-btn mt-5 shadow-lg'>EXPLORE NOW</button></Link>
              </div>
            </Col>
          </Row>
          <Row className='p-5 cat-card flex-row-reverse justify-content-between'>
            <Col lg='4'>
              <div className={`canvas-wrapper ${animationClass[1]}`}>
                <div className="canvas">
                  <div className="canvas_border-left">
                    <svg>
                      <defs>
                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop style={{ stopColor: "rgb(253,137,68)", stopOpacity: "1", offset: "0%" }}></stop>
                          <stop style={{ stopColor: "rgb(153,75,23)", stopOpacity: "1", offset: "100%" }}></stop>
                        </linearGradient>
                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop style={{ stopColor: "#D34F48", offset: "0%" }}></stop>
                          <stop style={{ stopColor: "#772522", offset: "100%" }}></stop>
                        </linearGradient>
                      </defs>
                      <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                    </svg>
                  </div>
                  <div className="canvas_img-wrapper">
                    <img className="canvas_img" src={womenClothing} alt="" />
                  </div>
                  <div className="canvas_copy canvas_copy-left">
                    <span class="canvas_copy_subtitle left-subtitle">fashion</span>
                    <strong class="canvas_copy_title">women's</strong>
                    <strong class="canvas_copy_title">clothing</strong>
                    <span class="canvas_copy_details">Premium women's attire</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='8'>
              <p className='py-lg-4 pe-lg-4 fw-medium'>Experience the epitome of femininity with our women's apparel collections, where each garment is a symphony of grace and enduring beauty, tailored with precision to accentuate your style. Embrace elegance effortlessly, leaving a lasting impression wherever you go.</p>
              <h5 className='pe-lg-4 text-uppercase'>Unveil our women's selections,<br /> <b>Where elegance meets excellence.</b></h5>
              <div>
                <Link to={'/shop'}><button type='button' onClick={scrollUp} className='explore-btn mt-5 shadow-lg'>UNVEIL NOW</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='product-listing'>
        <Container>
          <Tabs tabs={tabs} underlineImg={underlineImg} />
        </Container>
      </Container>
      <Container fluid className='more-bg mt-4 text-white'>
        <Container>
          <Row>
            <h2>Checkout our enchanting range of kids' apparel, accessories, and footwear.</h2>
            <Col lg={6}>
              <div className='inner-left w-100 h-100 position-relative pt-3'>
                <img src={kids} alt='kids' className={`kids-img img-fluid position-absolute start-0 ${animationClass[3]}`} />
                <h3 className={`kids-content position-absolute ${animationClass[3]}`}>KID'<span>S</span> CLO<span>THING</span></h3>
                <h2 className={`position-absolute mb-0 foot-content1 ${animationClass[4]}`}>footwear <span>and</span> <span className='position-absolute fs-1'>accessories</span></h2>
                <p className='position-absolute'>Style yourself with our exciting range of premium footwear and accessories, designed to add the perfect finishing touch to every outfit and inspire endless exploration and creativity.</p>
                <Link to={'/shop'}><button type='button' onClick={scrollUp} className='explore-btn mt-5 shadow-lg position-absolute'>STYLE NOW</button></Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className='inner-right w-100 position-relative'>
                <img src={shoe} alt='shoe' className={`shoe-img img-fluid position-absolute start-0 ${animationClass[4]}`} />
                <p className={`kids-content1 position-absolute ${animationClass[3]}`}>Dress your little ones in style and comfort with our charming range of kids' apparel, where every piece is a delightful blend of quality and imagination.</p>
                <Link to={'/shop'}><button type='button' onClick={scrollUp} className={`kids-btn shop-now-btn mt-5 shadow-lg position-absolute ${animationClass[3]}`}>DRESS NOW</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='b-bottom mt-4'></Container>
      <Container fluid>
        <Container>
          <Row>
            <div className='services mt-5 p-4 position-relative'>
              <div className={`sbox position-absolute d-flex flex-column ${animationClass[5]}`}>
                <div className='simage d-flex justify-content-center align-items-center position-relative'>
                  <img src={orders} alt='orders' className='img-fluid' />
                  <div className='simage-border b-1 position-absolute'></div>
                  <div className='b-2 position-absolute'></div>
                </div>
                <h3 className='scontenth3 sc1'>Assured Quality</h3>
                <p className='scontentp sp1'>We promise premium quality<br /> products for your complete<br /> satisfaction.</p>
              </div>
              <div className={`sbox position-absolute d-flex flex-column ${animationClass[5]}`}>
                <div className='simage d-flex justify-content-center align-items-center position-relative'>
                  <img src={freeShip} alt='freeship' className='img-fluid' />
                  <div className='simage-border b-1 position-absolute'></div>
                  <div className='b-2 position-absolute'></div>
                </div>
                <h3 className='scontenth3 sc2'>Free Shipping</h3>
                <p className='scontentp sp2'>Unlock the seamless experience<br /> of fast and free shipping on<br /> orders above ₹499</p>
              </div>
              <div className={`sbox position-absolute d-flex flex-column ${animationClass[5]}`}>
                <div className='simage d-flex justify-content-center align-items-center position-relative'>
                  <img src={returnExchange} alt='return&exchange' className='img-fluid' />
                  <div className='simage-border b-1 position-absolute'></div>
                  <div className='b-2 position-absolute'></div>
                </div>
                <h3 className='scontenth3 sc3'>Easy Returns</h3>
                <p className='scontentp sp3'>Enjoy hassle-free returns and<br /> exchanges for a worry-free<br /> shopping experience.</p>
              </div>
              <div className={`sbox position-absolute d-flex flex-column ${animationClass[5]}`}>
                <div className='simage d-flex justify-content-center align-items-center position-relative'>
                  <img src={service} alt='service' className='img-fluid' />
                  <div className='simage-border b-1 position-absolute'></div>
                  <div className='b-2 position-absolute'></div>
                </div>
                <h3 className='scontenth3 sc4'>Customer Support</h3>
                <p className='scontentp sp4'>Our dedicated customer support<br /> team is here to assist you 24/7.<br />Happy shopping.</p>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
      <Container fluid className='mt-6 bg-green position-relative d-flex justify-content-around'>
        <Container className='position-absolute top-1'>
          <div className='position-absolute divider d-flex justify-content-center start-0'>
            <div onClick={scrollUp} className='scroll-up position-absolute socials rounded-circle d-flex align-items-center justify-content-center'>
              <FontAwesomeIcon icon={faAngleUp} bounce/>
            </div>
          </div>
          <Row>
            <Col lg={4}>
              <div className={`blog p-4 ${animationClass[6]}`}>
                <div className='b-upper shadow-lg position-relative d-flex justify-content-center align-items-center'>
                  <img src={blog1} alt='blogs' className='img-fluid' />
                  <div className='green-border position-absolute'></div>
                  <div className='white-border position-absolute'></div>
                  <img src={halftone} alt='halftone' className='halftone-bg d-none w-100 h-100 position-absolute top-0 left-0' />
                  <div className='inner-circle rounded-circle d-none position-absolute'>
                    <FontAwesomeIcon className='insta-icon' icon={faInstagram} />
                  </div>
                </div>
                <div className='text-white b-lower py-3 px-2 d-flex flex-column justify-content-center align-items-center'>
                  <h3>Premium Men's Attire</h3>
                  <p className='text-center'>Premium menswear that speaks volumes in sophistication and refinement.</p>
                  <div className='dopeshope white'>DopeShope</div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={`blog b2 p-4 ${animationClass[6]}`}>
                <div className='b-upper shadow-lg position-relative d-flex justify-content-center align-items-center'>
                  <img src={blog2} alt='blogs' className='img-fluid' />
                  <div className='green-border position-absolute'></div>
                  <div className='white-border position-absolute'></div>
                  <img src={halftone} alt='halftone' className='halftone-bg d-none w-100 h-100 position-absolute top-0 left-0' />
                  <div className='inner-circle rounded-circle d-none position-absolute'>
                    <FontAwesomeIcon className='insta-icon' icon={faInstagram} />
                  </div>
                </div>
                <div className='text-white b-lower py-3 px-2 d-flex flex-column justify-content-center align-items-center'>
                  <h3>Luxury Ladies' Fashion</h3>
                  <p className='text-center'>Tailored glamour for her crafting every garment into a timeless beauty.</p>
                  <div className='dopeshope white'>DopeShope</div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={`blog b3 p-4 ${animationClass[6]}`}>
                <div className='b-upper shadow-lg position-relative d-flex justify-content-center align-items-center'>
                  <img src={blog3} alt='blogs' className='img-fluid' />
                  <div className='green-border position-absolute'></div>
                  <div className='white-border position-absolute'></div>
                  <img src={halftone} alt='halftone' className='halftone-bg d-none w-100 h-100 position-absolute top-0 left-0' />
                  <div className='inner-circle rounded-circle d-none position-absolute'>
                    <FontAwesomeIcon className='insta-icon' icon={faInstagram} />
                  </div>
                </div>
                <div className='text-white b-lower py-3 px-2 d-flex flex-column justify-content-center align-items-center'>
                  <h3>Shoes n Accessories Galore</h3>
                  <p className='text-center'>Elevate your look with our diverse<br /> Shoes and Accessories array</p>
                  <div className='dopeshope white'>DopeShope</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}