import React from 'react'
import "../styles/Products.css";
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import CommonBanner from '../components/CommonBanner';
import { faCartShopping, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import product from "../Images/product.png";
import product2 from "../Images/product2.png";
import product3 from "../Images/product3.png";
import product4 from "../Images/product4.png";
import product5 from "../Images/product5.png";
import product6 from "../Images/product6.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <Header />
      <CommonBanner />
      <Container fluid>
        <Container className='mt-5 mb-2 animate five fadeInUp'>
          <Row>
            <Col lg={3} className='shop-left'>
              <form action='#' className='position-relative d-flex align-items-center'>
                <input type="text" placeholder='Search' className='search-products px-2 py-1' />
                <button type='submit' className='position-absolute blue search-btn'><FontAwesomeIcon icon={faMagnifyingGlass} size='xs' /></button>
              </form>
              <div className='mt-4 p-1 acc-heading d-flex align-items-center justify-content-between'>
                <h5 className='mb-1'>Filters</h5>
                <button><p className='mb-1 white fw-medium'>Clear all</p></button>
              </div>
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Categories
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <ul className='list-unstyled mb-0'>
                        <li className='pb-2'><span>Men</span></li>
                        <li className='pb-2'><span>Women</span></li>
                        <li className='pb-2'><span>Kids</span></li>
                        <li className='pb-2'><span>Shoes</span></li>
                        <li className='pb-2'><span>Accessories</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                      Brand
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <ul className='list-unstyled mb-0'>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>Puma</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>Louis Philippe</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>Peter England</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>Adidas</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'>
                          </input><span>Nike</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                      Price
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <ul className='list-unstyled mb-0'>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>₹0 - ₹500</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>₹500 - ₹1000</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>₹1000 - ₹5000</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>₹5000 - ₹10000</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='checkbox'></input>
                          <span>₹10000+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                      Color
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <ul className='list-unstyled mb-0'>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <span className='color-filter bg-white'></span>
                          <span>White</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <span className='color-filter bg-dark'></span>
                          <span>Black</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <span className='color-filter bg-danger'></span>
                          <span>Red</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <span className='color-filter bg-success'></span>
                          <span>Green</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <span className='color-filter bg-primary'></span>
                          <span>Blue</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                      Discount
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <ul className='list-unstyled mb-0'>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='radio'></input>
                          <span>10% and above</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='radio'></input>
                          <span>20% and above</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='radio'></input>
                          <span>30% and above</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='radio'></input>
                          <span>40% and above</span>
                        </li>
                        <li className='pb-2 d-flex align-items-center gap-2'>
                          <input type='radio'></input>
                          <span>50% and above</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="product-topbar d-flex justify-content-between align-items-center">
                <p className="mb-0 mt-1">Showing 1-12 of 120 results</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 mt-1">Sort by Price:</p>&nbsp;
                  <div class="dropdown">
                    <button class="sort-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Low to High
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item active" href="/shop">Low to High</a></li>
                      <li><a class="dropdown-item" href="/shop">High to Low</a></li>
                      <li><a class="dropdown-item" href="/shop">₹0 - ₹500</a></li>
                      <li><a class="dropdown-item" href="/shop">₹500 - ₹1000</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <Row className="products">
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
                  <Link to={'/product-detail'}><div className='product'>
                    <div className='product-img slide slide1 position-relative p-2'>
                      <img src={product} alt='product1' className='w-100 h-100' />
                      <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                      </div>
                      <div className='red label position-absolute text-center start-0 px-1 text-white'>Top</div>
                    </div>
                    <div className='product-content mt-3'>
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                  </Link>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
                  <div className='product'>
                    <div className='product-img slide slide1 position-relative p-2'>
                      <img src={product2} alt='product2' className='w-100 h-100' />
                      <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                      </div>
                      <div className='green label position-absolute text-center start-0 px-1 text-white'>New</div>
                    </div>
                    <div className='product-content mt-3'>
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
                  <div className='product'>
                    <div className='product-img slide slide1 position-relative p-2'>
                      <img src={product6} alt='product6' className='w-100 h-100' />
                      <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                      </div>
                      <div className='orange label position-absolute text-center start-0 px-1 text-white'>Best</div>
                    </div>
                    <div className='product-content mt-3'>
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
                  <div className='product'>
                    <div className='product-img slide slide1 position-relative p-2'>
                      <img src={product2} alt='product2' className='w-100 h-100' />
                      <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                      </div>
                      <div className='green label position-absolute text-center start-0 px-1 text-white'>New</div>
                    </div>
                    <div className='product-content mt-3'>
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
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
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
                <Col lg='3' className='d-flex justify-content-center animated mt-3'>
                  <div className='product'>
                    <div className='product-img slide slide1 position-relative p-2'>
                      <img src={product6} alt='product6' className='w-100 h-100' />
                      <div className='slide slide2 position-absolute d-flex justify-content-between icons w-100 start-0 bottom-0'>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faHeart} /></span>
                        <span className='d-flex align-items-center justify-content-center'><FontAwesomeIcon icon={faCartShopping} /></span>
                      </div>
                      <div className='orange label position-absolute text-center start-0 px-1 text-white'>Best</div>
                    </div>
                    <div className='product-content mt-3'>
                      <h6>Men's Cotton T-shirt</h6>
                      <div className='d-flex rating'>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                        <h6><FontAwesomeIcon icon={faStar} size="sm" /></h6>
                      </div>
                      <h5 className='price'>$ 15.99</h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider3"></div>
              <div className="pagination d-flex justify-content-center gap-2 mx-auto mt-3">
                <Link to={'/shop'} className="active">1</Link>
                <Link to={'/shop'}>2</Link>
                <Link to={'/shop'}>3</Link>
                <span className="blue mt--3">...</span>
                <Link to={'/shop'}>10</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}