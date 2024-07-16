import React, { useState } from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import product from "../Images/product.png"
import product2 from "../Images/product2.png"
import product3 from "../Images/product3.png";
import product4 from "../Images/product4.png";
import done from "../Images/check.png"
import truck from "../Images/fast.png"
import order from "../Images/order1.png"
import money from "../Images/codmoney.png"
import returnbox from "../Images/return-box.png"
import details from "../Images/detail.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'

export default function ProductDetail() {
    const [mainImage, setMainImage] = useState(product);
    const [activeSize, setActiveSize] = useState('XS');

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    const handleSizeClick = (size) => {
        setActiveSize(size);
    };

    return (
        <>
            <Header />
            <Container fluid className='p-0 d-flex animate three fadeInUp'>
                <div className='left-product pe-10'>
                    <div className='product-bg position-relative d-flex align-items-center'>
                        <div className='left-images d-flex flex-column align-items-center gap-3'>
                            <div className='more-imgs'>
                                <img src={mainImage} alt='product' className='w-100' />
                            </div>
                            <div className='more-imgs'></div>
                            <div className='more-imgs'></div>
                            <div className='more-imgs'></div>
                        </div>
                        <img src={mainImage} alt='product' className='position-absolute w-100' />
                    </div>
                </div>
                <div className='right-product'>
                    <div className='d-flex flex-column'>
                        <h3 className='dopeshope fs-4 mb-0'>DopeShope</h3>
                        <h6 className='fw-normal'>Men's Cotton T-shirt</h6>
                        <div className='star-rating d-flex gap-2 align-items-center'>
                            <p className='fw-semibold mb-1'>4.2</p>
                            <p className='mb-1'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
                        </div>
                        <div className='prices d-flex align-items-center gap-2'>
                            <h5 className='price fw-semibold my-1 pe-1'>₹ 499</h5>
                            <h6 className='price my-1 fw-light'>MRP</h6>
                            <h6 className='price my-1 fw-light'>₹ 799</h6>
                        </div>
                        <p className='josefin'>Inclusive of all taxes</p>
                        <div className='color-options'>
                            <p className='josefin-sans fs-6 fw-normal mb-2'>More Colors :</p>
                            <div className='d-flex gap-2'>
                                <div className='color-imgs p-1' onClick={() => handleImageClick(product)}>
                                    <img src={product} alt='product' className='w-100' />
                                </div>
                                <div className='color-imgs p-1' onClick={() => handleImageClick(product2)}>
                                    <img src={product2} alt='product' className='w-100' />
                                </div>
                                <div className='color-imgs p-1' onClick={() => handleImageClick(product3)}>
                                    <img src={product3} alt='product' className='w-100' />
                                </div>
                                <div className='color-imgs p-1' onClick={() => handleImageClick(product4)}>
                                    <img src={product4} alt='product' className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div className='sizes mt-3'>
                            <div className='d-flex align-items-center gap-5'>
                                <p className='josefin-sans fs-6 fw-normal mb-0'>Select Size</p>
                                <button className='fw-normal mb-0 size-chart d-flex align-items-center gap-1' type='button' data-bs-toggle="modal" data-bs-target="#Modal1">SIZE CHART <FontAwesomeIcon icon={faAngleRight} /></button>
                            </div>
                            <div className='d-flex align-items-center gap-2 mt-2'>
                                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                    <div
                                        key={size}
                                        className={`size-box d-flex justify-content-center align-items-center rounded-circle ${activeSize === size ? 'active' : ''}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        <p className='mb-0 fw-bold'>{size}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='d-flex gap-2 mt-3'>
                            <button className='add-to-cart d-flex justify-content-center align-items-center gap-2'><FontAwesomeIcon icon={faShoppingBag} size='lg' /><p className='mb-0 pt-1 fw-semibold'>ADD TO BAG</p></button>
                            <button className='add-to-cart d-flex justify-content-center align-items-center gap-2'><FontAwesomeIcon icon={faHeart} size='lg' /><p className='mb-0 pt-1 fw-semibold'>ADD TO WISHLIST</p></button>
                        </div>
                        <div className='delivery-options pb-2 mt-3'>
                            <p className='josefin-sans fs-6 fw-normal mb-0'>Delivery <img src={truck} alt='delivery' width={35} className='pb-2' /> </p>
                            <div className='pincode-check rounded-1 d-flex align-items-center justify-content-between' data-bs-toggle="modal" data-bs-target="#Modal2">
                                <div className='d-flex gap-2 align-items-center'>
                                    <p className='mb-0 fw-semibold'>342005</p><img src={done} className='img-fluid' width={18} alt='ok' />
                                </div>
                                <button className='blue' type='button'>Change</button>
                            </div>
                            <div className='d-flex align-items-center gap-3 mt-2'>
                                <img src={order} alt='order' width={30} />
                                <p className='text-black josefin mb-0'>Get it by Sat, Jun 01</p>
                            </div>
                            <div className='d-flex align-items-center gap-3 mt-2'>
                                <img src={money} alt='money' width={30} />
                                <p className='text-black josefin mb-0'>Pay on delivery available</p>
                            </div>
                            <div className='d-flex align-items-center gap-3 mt-2'>
                                <img src={returnbox} alt='return' width={30} />
                                <p className='text-black josefin mb-0'>7 days return & exchange available</p>
                            </div>
                        </div>
                        <div className='product-details mt-3'>
                            <p className='josefin-sans fs-6 fw-normal mb-0'>Product Details <img src={details} alt='delivery' width={30} className='pb-1' /> </p>
                            <p className='josefin-sans fw-normal fs-7'>T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. 100% cotton fabric  regular fit for comfortable wear and a classic silhouette.</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* modal 1 */}
            <div class="modal fade" id="Modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <p class="josefin-sans fs-6 blue fw-semibold modal-title" id="exampleModalLabel">Size Chart</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table className="josefin text-center" border="0" cellpadding="10" cellspacing="0" width="100%">
                                <thead>
                                    <tr className='border-bottom dark-green'>
                                        <td></td>
                                        <td>Size</td>
                                        <td>Chest(in)</td>
                                        <td>Waist(in)</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-bottom'>
                                        <td><input type='radio' className='size-input' /></td>
                                        <td>XS</td>
                                        <td>33.0</td>
                                        <td>28.3</td>
                                    </tr>
                                    <tr className='border-bottom'>
                                        <td><input type='radio' className='size-input' /></td>
                                        <td>S</td>
                                        <td>36.3</td>
                                        <td>31.5</td>
                                    </tr>
                                    <tr className='border-bottom'>
                                        <td><input type='radio' className='size-input' /></td>
                                        <td>M</td>
                                        <td>39.5</td>
                                        <td>34.5</td>
                                    </tr>
                                    <tr className='border-bottom'>
                                        <td><input type='radio' className='size-input' /></td>
                                        <td>L</td>
                                        <td>42.5</td>
                                        <td>37.8</td>
                                    </tr>
                                    <tr className='border-bottom'>
                                        <td><input type='radio' className='size-input' /></td>
                                        <td>XL</td>
                                        <td>45.5</td>
                                        <td>41.0</td>
                                    </tr>
                                    <tr>
                                        <td><input type='radio' className='size-input' /></td>
                                        <td>XXL</td>
                                        <td>48.8</td>
                                        <td>44.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer justify-content-between border-0">
                            <button className='add-to-cart d-flex justify-content-center align-items-center gap-2' style={{ width: "186px" }}><FontAwesomeIcon icon={faShoppingBag} size='lg' /><p className='mb-0 pt-1 fw-semibold'>ADD TO BAG</p></button>
                            <button className='add-to-cart d-flex justify-content-center align-items-center gap-2' style={{ width: "187px" }}><FontAwesomeIcon icon={faHeart} size='lg' /><p className='mb-0 pt-1 fw-semibold'>ADD TO WISHLIST</p></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal 2 */}
            <div class="modal fade" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" style={{height:"500px"}}>
                        <div class="modal-header border-0">
                            <p class="josefin-sans blue fw-semibold modal-title" id="exampleModalLabel">Enter pincode to check delivery info</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body pt-1">
                            <div className='border rounded-1 d-flex justify-content-between align-items-center px-2'>
                                <input type='text' className='pincode-input text-black josefin-sans' placeholder='Enter a pincode' />
                                <p className='mb-0 fw-semibold josefin cursor-pointer'>Check</p>
                            </div>
                            <div className='divider3 mt-4 d-flex justify-content-center align-items-center my-3 position-relative border-bottom'>
                                <p className='mb-0 position-absolute josefin bg-white'>OR</p>
                            </div>
                            <p class="josefin-sans blue fw-semibold mt-4">Select a saved address to check delivery info</p>
                            <div className='mt-3 choose-add d-flex align-items-center justify-content-between'>
                                <div>
                                    <p className='d-flex fw-semibold gap-2'>Praveen Sharma, 342005 <span className='rounded-4'>HOME</span></p>
                                    <p className='fs-14'>275 A Bapunagar Jhalamand Circle</p>
                                </div>
                                <div><img src={done} alt='selected' width={20}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}