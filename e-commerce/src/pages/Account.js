import React, { useEffect, useState } from 'react';
import "../styles/Account.css";
import Header from '../components/Header';
import dp from "../Images/user.png";
import orders from "../Images/orders.png";
import address from "../Images/home-address1.png";
import cards from "../Images/atm-card.png";
import product from "../Images/product.png";
import profileDetail from "../Images/profile-details.png";
import done from "../Images/check-mark.png";
import cardImg from "../Images/debit-card.png";
import hurt from "../Images/hurt.png";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';

export default function Account() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleEditProfileClick = () => {
    setIsEditingProfile(true);
  };

  const handleBackToProfileClick = () => {
    setIsEditingProfile(false);
    setActiveSection('profile');
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.input-box input');

    const handleFocus = (e) => {
      e.target.classList.add('has-value');
    };

    const handleBlur = (e) => {
      if (!e.target.value) {
        e.target.classList.remove('has-value');
      }
    };

    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      if (input.value) {
        input.classList.add('has-value');
      }
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, [isEditingProfile]);

  return (
    <>
      <Header />
      <Container fluid className='my-account'>
        <Container>
          <Row>
            <div className='acc-header animate three fadeInUp'>
              <h6 className='fw-bold mb-0'>Account</h6>
              <p className='fw-normal pb-2 mb-0 border-bottom'>Praveen Sharma</p>
            </div>
          </Row>
          <Row className='animate four fadeInUp'>
            <Col lg={3} className='acc-body border-end'>
              <div className='acc-left me-2'>
                <p
                  className={`py-3 border-bottom ${activeSection === 'overview' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('overview');
                    setIsEditingProfile(false);
                  }}
                >
                  Overview
                </p>
                <div
                  className='pt-3 pb-2 dark'
                >
                  Orders
                </div>
                <p
                  className={`pb-3 border-bottom ${activeSection === 'orders' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('orders');
                    setIsEditingProfile(false);
                  }}
                >
                  Orders & Returns
                </p>
                <div
                  className='pt-3 pb-2 dark'
                >
                  Account
                </div>
                <p
                  className={`pb-1 ${activeSection === 'profile' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('profile');
                    setIsEditingProfile(false);
                  }}
                >
                  Profile
                </p>
                <p
                  className={`pb-1 ${activeSection === 'addresses' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('addresses');
                    setIsEditingProfile(false);
                  }}
                >
                  Addresses
                </p>
                <p
                  className={`pb-1 ${activeSection === 'cards' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('cards');
                    setIsEditingProfile(false);
                  }}
                >
                  Saved Cards
                </p>
                <p
                  className={`pb-3 border-bottom ${activeSection === 'deleteAccount' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection('deleteAccount');
                    setIsEditingProfile(false);
                  }}
                >
                  Delete Account
                </p>
                <div className='pt-3 pb-2 dark'>Legal</div>
                <Link to={'/terms&conditions'} onClick={scrollUp}><p className='pb-1'>Terms of Use</p></Link>
                <Link to={'/privacy-policy'} onClick={scrollUp}><p className='pb-3'>Privacy Policy</p></Link>
              </div>
            </Col>
            <Col lg={9} className='acc-body'>
              <div className='acc-right'>
                {isEditingProfile ? (
                  <>
                    {/* Edit Profile Section */}
                    <div className='profile-box2 p-5 mt-2'>
                      <h6 className='pb-2 border-bottom'>Edit Profile</h6>
                      <div className='contact-right position-relative'>
                        <form action='#' className='contact-form'>
                          <div className='input-box border-grey my-3 d-flex justify-content-between'>
                            <div className='d-flex flex-column p-2'>
                              <p className='dark fs-14'>Mobile Number*</p>
                              <p className='fs-14 d-flex gap-1 contact-verified'>9116577183 <img src={done} alt='done' /></p>
                            </div>
                            <div className='d-flex align-items-center fs-14 pe-2'><button className='bg-transparent border-0 bluecolor'>Change</button></div>
                          </div>
                          <div className='input-box position-relative my-3'>
                            <input type='text' required name='' className='rounded-0' />
                            <span className='bg-grey'>Full Name</span>
                          </div>
                          <div className='input-box position-relative my-3'>
                            <input type='text' required name='' className='rounded-0' />
                            <span className='bg-grey'>Email</span>
                          </div>
                          <div className='input-box position-relative my-3'>
                            <input required name='' className='rounded-0 bg-grey2' />
                            <span className='bg-grey'>Birthday(dd/mm/yy)</span>
                          </div>
                          <div className='d-flex justify-content-between my-3'>
                            <div className='rounded-0 gender-input d-flex align-items-center justify-content-center'>Male</div>
                            <div className='rounded-0 gender-input border-start-0 d-flex align-items-center justify-content-center'>Female</div>
                          </div>
                          <div className='d-flex justify-content-between mt-3'>
                            <button className='w-100 py-2'>Save Details</button>
                          </div>
                        </form>
                      </div>
                      <div className='d-flex justify-content-center'>
                      <button className='mt-3 px-3' onClick={handleBackToProfileClick}>Back to Profile</button>
                      </div>
                    </div>
                    {/* Edit Profile Section */}
                  </>
                ) : (
                  <>
                    {activeSection === 'overview' && (
                      <>
                        {/* Overview Section */}
                        <div className='profile-box d-flex justify-content-between p-4 mt-2'>
                          <div className='d-flex align-items-center gap-4'>
                            <div className='profile-img pt-2 px-1'>
                              <img src={dp} alt='profile-img' className='w-100 h-100' />
                            </div>
                            <div className='fw-normal email-add'>praveen1892293@gmail.com</div>
                          </div>
                          <button className='edit-profile' onClick={handleEditProfileClick}>Edit Profile</button>
                        </div>
                        <Row className='options'>
                          <Col lg={4}>
                            <div onClick={() => setActiveSection('orders')} className='option px-3 d-flex justify-content-center align-items-center flex-column'>
                              <img src={orders} alt='orders' className='pb-1' />
                              <p className='fw-normal text-black'>Orders</p>
                              <span className='text-center'>Check your order status</span>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div onClick={() => setActiveSection('addresses')} className='option px-3 pt-4 d-flex justify-content-center align-items-center flex-column'>
                              <img src={address} alt='addresses' className='pb-1' />
                              <p className='fw-normal text-black'>Addresses</p>
                              <span className='text-center'>Save addresses for a hassle free checkout</span>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div onClick={() => setActiveSection('cards')} className='option px-3 pt-4 d-flex justify-content-center align-items-center flex-column'>
                              <img src={cards} alt='cards' className='pb-1' />
                              <p className='fw-normal text-black'>Saved Cards</p>
                              <span className='text-center'>Save your cards for faster checkout</span>
                            </div>
                          </Col>
                          <Col lg={4} className='mt-3'>
                            <div onClick={() => setActiveSection('profile')} className='option px-3 pt-4 d-flex justify-content-center align-items-center flex-column'>
                              <img src={profileDetail} alt='cards' className='pb-1' />
                              <p className='fw-normal text-black'>Profile</p>
                              <span className='text-center'>Change your profile details</span>
                            </div>
                          </Col>
                        </Row>
                        {/* Overview Section */}
                      </>
                    )}

                    {activeSection === 'orders' && (
                      <>
                        {/* Orders Section */}
                        <div className='mt-3'>
                          <p className='dark'>All Orders</p>
                        </div>
                        <div className='pt-2'>
                          <div className='p-2 order-box d-flex flex-column'>
                            <p className='mb-1 bg-white order-status fw-normal d-flex gap-1'>Delivered <img src={done} alt='done' /></p>
                            <Link to={'/product-details'}>
                              <div className='pt-2 d-flex align-items-center justify-content-between border-top'>
                                <div className='d-flex align-items-center gap-3'>
                                  <div className='order-img p-1'>
                                    <img src={product} alt='profile-img' className='w-100 h-100' />
                                  </div>
                                  <div className='order-details'>
                                    <p className='fw-medium text-dark'>DopeShope</p>
                                    <p className='text-black'>Men's Cotton T-shirt</p>
                                    <p className='text-black'>Size: M</p>
                                  </div>
                                </div>
                                <div className='text-end text-black'><FontAwesomeIcon icon={faChevronRight} size='xs' /></div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        {/* Orders Section */}
                      </>
                    )}

                    {activeSection === 'profile' && (
                      <>
                        {/* Profile Section */}
                        <div className='profile-box2 p-5 mt-2'>
                          <h6 className='pb-2 border-bottom'>Profile Details</h6>
                          <div className='d-flex gap-5'>
                            <div>
                              <p className='pt-3 text-black'>Full Name :</p>
                              <p className='pt-3 text-black'>Mobile Number :</p>
                              <p className='pt-3 text-black'>Email ID :</p>
                              <p className='pt-3 text-black'>Gender :</p>
                              <p className='pt-3 text-black'>Date of Birth :</p>
                            </div>
                            <div>
                              <p className='pt-3 text-black'>Praveen Sharma</p>
                              <p className='pt-3 text-black'>9116577183</p>
                              <p className='pt-3 text-black'>praveen1892293@gmail.com</p>
                              <p className='pt-3 text-black'>Male</p>
                              <p className='pt-3 text-black'>09/02/2003</p>
                            </div>
                          </div>
                          <button className='mt-4 w-100' onClick={handleEditProfileClick}>EDIT PROFILE</button>
                        </div>
                        {/* Profile Section */}
                      </>
                    )}

                    {activeSection === 'addresses' && (
                      <>
                        {/* Addresses Section */}
                        <div className='address-section d-flex flex-column gap-2'>
                          <div className='mt-3 d-flex justify-content-between align-items-center'>
                            <h6>Saved Addresses</h6>
                            <div className='add-address py-1 px-2'><FontAwesomeIcon icon={faPlus} size='xs' /> ADD NEW ADDRESS</div>
                          </div>
                          <span className='fw-medium'>DEFAULT ADDRESS</span>
                          <div className='profile-box pt-2 px-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <p className='dark'>Praveen Sharma</p>
                              <span className='px-1 rounded-4 bg-dark-subtle'>Home</span>
                            </div>
                            <div className='pb-2 border-bottom'>
                              <Col lg={6} className='mt-2'>
                                <p className='text-dark'>275-A Bapunagar Jhalamand Circle</p>
                                <p className='text-dark'>Jodhpur - 342005</p>
                                <p className='mb-1 text-dark'>Rajasthan</p>
                                <p className='text-dark'>Mobile: 9116577183</p>
                              </Col>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                              <button className=''>EDIT</button>
                              <span className='fs-4 fw-lighter'>|</span>
                              <button className=''>REMOVE</button>
                            </div>
                          </div>
                        </div>
                        {/* Addresses Section */}
                      </>
                    )}

                    {activeSection === 'cards' && (
                      <>
                        {/* Cards Section */}
                        <div className='profile-box mt-3 px-5 py-5'>
                          <div className='d-flex flex-column justify-content-center align-items-center saved-cards px-5'>
                            <img src={cardImg} alt='saved-cards' />
                            <p className='dark text-uppercase py-2'>Save your credit/debit cards for faster payments</p>
                            <p className='text-center dark mb-3'>Enjoy easy and faster payments with saved cards. We protect your card information with 128-bit encryption.</p>
                          </div>
                        </div>
                        {/* Cards Section */}
                      </>
                    )}

                    {activeSection === 'deleteAccount' && (
                      <>
                        {/* Delete Account Section */}
                        <div className='profile-box mt-3 px-5 py-4'>
                          <h6 className='border-bottom pb-2'>Delete Account</h6>
                          <div className='text-center'>
                            <img src={hurt} alt='hurt' className='pt-2' />
                          </div>
                          <p className='pt-3 dark'>Is this goodbye? Are you sure you don't want to reconsider?</p>
                          <ul>
                            <li>
                              <p className='text-black'>You'll lose your order history, saved details and all other benefits.</p>
                            </li>
                            <li>
                              <p className='text-black'>Any pending orders, exchanges, returns or refunds will no longer be accessible via your account.</p>
                            </li>
                            <li>
                              <p className='text-black'>DopeShope may refuse or delay deletion in case there are any pending grievances related to orders, shipments, cancellations or any other services offered by DopeShope.</p>
                            </li>
                            <li>
                              <p className='text-black'>DopeShope may retain certain data for legitimate reasons such as security, fraud prevention, future abuse, regulatory compliance including exercise of legal rights or comply with legal orders under applicable laws.</p>
                            </li>
                          </ul>
                          <div className='agree-input-box d-flex align-items-center'>
                            <input type='checkbox' />
                            <p className='ps-2'>I agree to all the terms and conditions*</p>
                          </div>
                          <div className='deleteornot mt-2 d-flex align-items-center justify-content-around'>
                            <button>DELETE ACCOUNT</button>
                            <span className='fs-2 fw-lighter'>|</span>
                            <Link to={'/'} onClick={scrollUp}><button>KEEP ACCOUNT</button></Link>
                          </div>
                        </div>
                        {/* Delete Account Section */}
                      </>
                    )}
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer/>
    </>
  );
}
