import { faAngleRight, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../styles/About.css";
import arrow from "../Images/arrow.png";
import arrow2 from "../Images/arrow2.png";
import arrow3 from "../Images/arrow3.png";
import arrow4 from "../Images/arrow4.png";
import arrow5 from "../Images/arrow5.png";
import praveen from "../Images/praveen.jpeg";
import piyush from "../Images/piyush.jpeg";
import rajesh from "../Images/raja.jpeg";
import anmol from "../Images/anmol.png";
import yuvraj from "../Images/yuvraj.jpeg";
import customer1 from "../Images/customer.png";
import customer2 from "../Images/customer2.png";
import customer3 from "../Images/customer3.png";
import Footer from '../components/Footer'

export default function About() {

    const [animations, setAnimations] = useState([false, false, false, false, false, false]);

    useEffect(() => {
        function handleScroll() {
            const scrollHeight = window.scrollY;
            const triggerHeights = [250, 300, 500, 600, 900, 2250];
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

    return (
        <>
            <Container fluid className='about-banner position-relative'>
                <Container>
                    <div className='text-center pt-2 fs-4 dopeshope position-relative animate one fadeInUp ms--1'>DopeShope</div>
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
                </Container>
                <Container className='py-3 animate three fadeInUp'>
                    <Row className='white flex-column py-4 gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <Link to={'/'}><h6 className='white fw-lighter mb-0'>Home</h6></Link>
                            <FontAwesomeIcon icon={faAngleRight} size='xs' className='fw-lighter' />
                            <h6 className='fw-lighter opacity-dim mb-0'>About</h6>
                        </div>
                        <div className='ms--1 pt-14 text-center dopeshope fs-1 mb-1 animate four fadeInUp'>DopeShope</div>
                        <h4 className='ms--1 pb-6 text-center mt-3 animate five fadeInUp'>Where Style Meets Elegance</h4>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='mt-4 about-us'>
                <Container>
                    <h2 className={`hehe dopeshope fs-2 text-center mt-3 ${animationClass[0]}`}>Welcome to DopeShope</h2>
                    <h6 className={`hehe dark-green ${animationClass[0]}`}>At <b>DopeShope</b>, we believe in the magic of shopping made easy and enjoyable. Our mission is to bring you a curated selection of high-quality products, coupled with an exceptional customer experience.</h6>
                    <h5 className={`hehe text-center mt-4 mb-0 ${animationClass[0]}`}>Our New Story Begins</h5>
                    <div className='year d-flex justify-content-center'>
                        <h1 className={`hehe2 ${animationClass[1]}`}>2</h1>
                        <h1 className={`hehe2 ${animationClass[1]}`}>0</h1>
                        <h1 className={`hehe2 ${animationClass[1]}`}>2</h1>
                        <h1 className={`hehe2 ${animationClass[1]}`}>4</h1>
                    </div>
                    <Row className={`vm justify-content-between mt-5 ${animationClass[2]}`}>
                        <Col lg={6}>
                            <div className='vision position-relative'>
                                <h3>Our Vision</h3>
                                <p>To be the go-to destination for fashion-forward individuals, where customers can find the latest trends and timeless styles, effortlessly.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='mission text-end position-relative'>
                                <h3>Our Mission</h3>
                                <p>To provide a seamless shopping experience with high-quality of products and exceptional customer service, ensuring satisfaction and trust with every purchase.</p>
                            </div>
                        </Col>
                    </Row>
                    <h5 className={`mt-5 vm ${animationClass[3]}`}>Our Core Values</h5>
                    <Row className={`mt-3 px-3 vm ${animationClass[3]}`}>
                        <Col lg={3} className='h6'><b>Quality</b></Col><Col lg={1}><b>:</b></Col>
                        <Col lg={8}>
                            <p className='p text-start ps-2'> We source only the best products, ensuring that each item meets our stringent quality standards.</p>
                        </Col>
                        <Col lg={3} className='h6'><b>Customer Satisfaction</b></Col><Col lg={1}><b>:</b></Col>
                        <Col lg={8}>
                            <p className='p text-start ps-2'> Your happiness is our top priority. We strive to exceed your expectations with every purchase.</p>
                        </Col>
                        <Col lg={3} className='h6'><b>Sustainability</b></Col><Col lg={1}><b>:</b></Col>
                        <Col lg={8}>
                            <p className='p text-start ps-2'> We are committed to making a positive impact on the environment by offering eco-friendly products.</p>
                        </Col>
                    </Row>
                    <h5 className={`mt-5 vm ${animationClass[4]}`}>Meet The Team</h5>
                    <div className={`d-flex justify-content-center mt-3 vm ${animationClass[4]}`}>
                        <div className='mid-line position-relative'>
                            <div className='position-absolute arrow'>
                                <img src={arrow2} alt='arrow' />
                                <div className='person position-absolute'>
                                    <div className='position-relative'>
                                        <img src={praveen} alt='team' />
                                        <div className='outer-border position-absolute'></div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-2'>
                                        <h6 className='mt-1 mb-0'>Praveen Sharma</h6>
                                        <p className='pt-2 mb-0 fw-semibold blue'>( Founder - <span className='dopeshope fs-7'> DopeShope</span> )</p>
                                    </div>
                                    <p>The visionary behind DopeShope, combines a passion for quality with a dedication to exceptional customer service, driving our mission to transform the online shopping experience.</p>
                                </div>
                            </div>
                            <div className='position-absolute arrow'>
                                <img src={arrow} alt='arrow' />
                                <div className='person position-absolute'>
                                    <div className='position-relative'>
                                        <img src={piyush} alt='team' />
                                        <div className='outer-border position-absolute'></div>
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-end gap-2'>
                                        <h6 className='mt-1 mb-0'>Piyush Sharma</h6>
                                        <p className='pt-2 mb-0 fw-semibold blue'>( Co-founder - <span className='dopeshope fs-7'> DopeShope</span> )</p>
                                    </div>
                                    <p>Brings a wealth of industry expertise and a relentless commitment to excellence, helping shape our unique and customer-centric approach.</p>
                                </div>
                            </div>
                            <div className='position-absolute arrow'>
                                <img src={arrow3} alt='arrow' />
                                <div className='person position-absolute'>
                                    <div className='position-relative'>
                                        <img src={rajesh} alt='team' />
                                        <div className='outer-border position-absolute'></div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-2'>
                                        <h6 className='mt-1 mb-0'>Rajesh</h6>
                                        <p className='pt-2 mb-0 fw-semibold blue'>( Co-founder - <span className='dopeshope fs-7'> DopeShope</span> )</p>
                                    </div>
                                    <p>Contributes invaluable industry wisdom and an unrelenting dedication to quality, guiding our customer-focused strategy.</p>
                                </div>
                            </div>
                            <div className='position-absolute arrow'>
                                <img src={arrow4} alt='arrow' />
                                <div className='person position-absolute'>
                                    <div className='position-relative'>
                                        <img src={anmol} alt='team' />
                                        <div className='outer-border position-absolute'></div>
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-end gap-2'>
                                        <h6 className='mt-1 mb-0'>Anmol Singh</h6>
                                        <p className='pt-2 mb-0 fw-semibold blue'>( Co-founder - <span className='dopeshope fs-7'> DopeShope</span> )</p>
                                    </div>
                                    <p>Enriches our brand with years of specialized expertise and an unyielding commitment to excellence, influencing our customer-centric ethos.</p>
                                </div>
                            </div>
                            <div className='position-absolute arrow'>
                                <img src={arrow5} alt='arrow' />
                                <div className='person position-absolute'>
                                    <div className='position-relative'>
                                        <img src={yuvraj} alt='team' />
                                        <div className='outer-border position-absolute'></div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-2'>
                                        <h6 className='mt-1 mb-0'>Yuvraj Singh</h6>
                                        <p className='pt-2 mb-0 fw-semibold blue'>( Delivery-partner - <span className='dopeshope fs-7'> DopeShope</span> )</p>
                                    </div>
                                    <p>Our trusted delivery partner ensures swift and reliable shipping, bringing your purchases directly to your doorstep with care and efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className={`mt-5 vm ${animationClass[5]}`}>Happy Customers</h5>
                    <div className={`d-flex my-4 px-5 gap-5 align-items-center vm ${animationClass[5]}`}>
                        <div className='testimonial-img rounded-circle p-0 d-block'>
                            <img src={customer1} alt='customer' className='w-100 h-100 rounded-circle' />
                        </div>
                        <div className='testimonial-review'>
                            <div className='c-name fw-bold'>Aman Singh</div>
                            <div className='c-review mt-2'>"I had an amazing experience shopping at Dopeshope! The variety of products is fantastic, and the prices are unbeatable. My order arrived quickly and in perfect condition. Highly recommend for all your shopping needs!"</div>
                        </div>
                    </div>
                    <div className={`d-flex my-4 px-5 gap-5 align-items-center vm ${animationClass[5]}`}>
                        <div className='testimonial-img rounded-circle p-0 d-block'>
                            <img src={customer2} alt='customer' className='w-100 h-100 rounded-circle' />
                        </div>
                        <div className='testimonial-review'>
                            <div className='c-name fw-bold'>Yuvraj Singh</div>
                            <div className='c-review mt-2'>"Dopeshope exceeded my expectations! The quality of the products is top-notch, and the customer service is outstanding. I will definitely be shopping here again!"</div>
                        </div>
                    </div>
                    <div className={`d-flex my-4 px-5 gap-5 align-items-center vm ${animationClass[5]}`}>
                        <div className='testimonial-img rounded-circle p-0 d-block'>
                            <img src={customer3} alt='customer' className='w-100 h-100 rounded-circle' />
                        </div>
                        <div className='testimonial-review'>
                            <div className='c-name fw-bold'>Anmol Singh</div>
                            <div className='c-review mt-2'>"Shopping at Dopeshope was a breeze. My order was delivered faster than expected, and everything was packaged perfectly. I'm a very satisfied customer!"</div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Footer />
        </>
    )
}