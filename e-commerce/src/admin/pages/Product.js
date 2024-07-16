import React, { useState, useEffect } from 'react';
import "../styles/Dashboard.css";
import "../../styles/Products.css";
import { Col, Container, Row } from 'react-bootstrap';
import DashboardMenu from '../components/DashboardMenu';
import DashboardHeader from '../components/DashboardHeader';
import shoppingBag from "../../Images/shopping-bag-green.png";
import { faPencil, faStar, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from "../../Images/image.png";
import axios from 'axios';

export default function Product() {

    useEffect(() => {
        const inputs = document.querySelectorAll('.input-box input, .input-box textarea');

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
    }, []);

    const [products, setProducts] = useState([]);
    const [colorFields, setColorFields] = useState([{ color: '', quantity: '' }]);
    const [sizeFields, setSizeFields] = useState([{ size: '', quantity: '' }]);
    const [isEditing, setIsEditing] = useState(false);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [publish, setPublish] = useState(false);
    const [brands, setBrands] = useState(['']);
    const [newBrand, setNewBrand] = useState('');
    const [categories, setCategories] = useState(['']);
    const [newCategory, setNewCategory] = useState('');

    // useEffect(() => {
    //     const fetchBrandsAndCategories = async () => {
    //         try {
    //             const brandsResponse = await axios.get('http://localhost:8000/api/brands');
    //             setBrands(brandsResponse.data);

    //             const categoriesResponse = await axios.get('http://localhost:8000/api/categories');
    //             setCategories(categoriesResponse.data);
    //         } catch (error) {
    //             console.error('Error fetching brands and categories:', error);
    //         }
    //     };

    //     fetchBrandsAndCategories();
    // }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleAddProductClick = () => {
        setIsEditing(false);
    };

    const handleFileChange = (event, index) => {
        const selectedFile = event.target.files[0];
        const newImages = [...images];
        newImages[index] = selectedFile;
        setImages(newImages);
    };


    const handleDeleteImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleColorChange = (index, event) => {
        const newColorFields = [...colorFields];
        newColorFields[index].color = event.target.value;
        setColorFields(newColorFields);

        if (index === colorFields.length - 1 && event.target.value) {
            setColorFields([...colorFields, { color: '', quantity: '' }]);
        } else if (index === colorFields.length - 2 && !event.target.value) {
            newColorFields.pop();
            setColorFields(newColorFields);
        }
    };

    const handleColorQuantityChange = (index, event) => {
        const newColorFields = [...colorFields];
        newColorFields[index].quantity = event.target.value;
        setColorFields(newColorFields);
    };

    const handleSizeChange = (index, event) => {
        const newSizeFields = [...sizeFields];
        newSizeFields[index].size = event.target.value;
        setSizeFields(newSizeFields);

        if (index === sizeFields.length - 1 && event.target.value) {
            setSizeFields([...sizeFields, { size: '', quantity: '' }]);
        } else if (index === sizeFields.length - 2 && !event.target.value) {
            newSizeFields.pop();
            setSizeFields(newSizeFields);
        }
    };

    const handleSizeQuantityChange = (index, event) => {
        const newSizeFields = [...sizeFields];
        newSizeFields[index].quantity = event.target.value;
        setSizeFields(newSizeFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('description', description);
    
        // Append colors and sizes
        colorFields.forEach((colorField, index) => {
            formData.append(`colors[${index}][color]`, colorField.color);
            formData.append(`colors[${index}][image]`, colorField.image);
            formData.append(`colors[${index}][imageSize]`, colorField.imageSize);
    
            // Append sizes for this color
            if (colorField.sizes) {
                colorField.sizes.forEach((sizeField, sizeIndex) => {
                    formData.append(`colors[${index}][sizes][${sizeIndex}][size]`, sizeField.size);
                    formData.append(`colors[${index}][sizes][${sizeIndex}][stock]`, sizeField.stock.toString());
                });
            }
        });
    
        images.forEach((image, index) => {
            formData.append(`images`, image);
        });
    
        try {
            const response = await axios.post('http://localhost:8000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (response.status === 201) {
                console.log('Product added successfully');
                const newProduct = response.data;
                console.log(newProduct);
                setProducts([...products, newProduct]);
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };    
    

    const renderColorInputs = () => {
        return (
            <div>
                {colorFields.map((colorField, index) => (
                    <div className='d-flex gap-2 justify-content-between align-items-center' key={index}>
                        <div className='input-box position-relative mb-3'>
                            <input type='text' name='' style={{ border: "1px dashed #04616f" }} value={colorField.color} onChange={(e) => handleColorChange(index, e)} />
                            <span>Color</span>
                        </div>
                        <div className='input-box position-relative mb-3'>
                            <input type='number' name='' style={{ border: "1px dashed #04616f" }} value={colorField.quantity} onChange={(e) => handleColorQuantityChange(index, e)} />
                            <span>Quantity</span>
                        </div>
                        {isEditing && (
                            <div className='delete-btn2 cursor-pointer d-flex align-items-center justify-content-center mb-3'>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const renderSizeInputs = () => {
        return (
            <div>
                {sizeFields.map((sizeField, index) => (
                    <div className='d-flex gap-2 justify-content-between align-items-center' key={index}>
                        <div className='input-box position-relative mb-3'>
                            <input type='text' name='' style={{ border: "1px dashed #04616f" }} value={sizeField.size} onChange={(e) => handleSizeChange(index, e)} />
                            <span>Size</span>
                        </div>
                        <div className='input-box position-relative mb-3'>
                            <input type='number' name='' style={{ border: "1px dashed #04616f" }} value={sizeField.quantity} onChange={(e) => handleSizeQuantityChange(index, e)} />
                            <span>Quantity</span>
                        </div>
                        {isEditing && (
                            <div className='delete-btn2 cursor-pointer d-flex align-items-center justify-content-center mb-3'>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const handleAddBrand = (event) => {
        event.preventDefault();
        if (newBrand.trim()) {
            setBrands([...brands, newBrand.trim()]);
            setNewBrand('');
        }
    };

    const handleAddCategory = (event) => {
        event.preventDefault();
        if (newCategory.trim()) {
            setCategories([...categories, newCategory.trim()]);
            setNewCategory('');
        }
    };

    return (
        <>
            <Container fluid>
                <Row className='p-0'>
                    <Col lg={3} className='p-0'>
                        <DashboardMenu />
                    </Col>
                    <Col lg={9} className='p-0'>
                        <DashboardHeader />
                        <div className='dashboard-content px-5 py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-2'>
                                    <div className='rounded-1 homeimg d-flex align-items-center p-1'>
                                        <img src={shoppingBag} alt='home' className='w-100' />
                                    </div>
                                    <p className='josefin-sans white fw-semibold fs-5 mb-0 pt-1'>Products</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal3" className='add-btn bg-white px-3 add-btn2'>
                                        <h6 className='josefin-sans dark-green mb-0'>Add brands +</h6>
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal4" className='add-btn bg-white px-3 add-btn2'>
                                        <h6 className='josefin-sans dark-green mb-0'>Add categories +</h6>
                                    </button>
                                </div>
                            </div>
                            <Row className='my-4 mx-0 product-topbar2'>
                                <div className='d-flex justify-content-between pe-0'>
                                    <div className="dropdown py-1">
                                        <button className="sort-btn white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            All Categories
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item active" href="/shop">All Categories</a></li>
                                            <li><a className="dropdown-item">Men</a></li>
                                            <li><a className="dropdown-item">Women</a></li>
                                            <li><a className="dropdown-item">Kids</a></li>
                                            <li><a className="dropdown-item">Shoes</a></li>
                                            <li><a className="dropdown-item">Accessories</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal1" className='add-btn bg-white px-3 pt-1 border-start' onClick={handleAddProductClick}>
                                        <h6 className='josefin-sans dark-green mb-0'>Add a product +</h6>
                                    </button>
                                </div>
                            </Row>
                            <Row className="products p-0">
                            {products.map((product, index) => (
                                <Col lg='3' className='d-flex justify-content-center animated mt-3' key={index}>
                                    <div className='product bg-white px-2 pb-2 w-100'>
                                        <div className='p-2 object-contain'>
                                            <img src={product.images[0]} alt={product.title} className='w-100 h-100' />
                                        </div>
                                        <div className='product-content mt-1'>
                                            <h6>{product.title}</h6>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h5 className='price'>₹ {product.price}</h5>
                                                <div className='d-flex rating'>
                                                    {[...Array(5)].map((star, i) => (
                                                        <h6 key={i}><FontAwesomeIcon icon={faStar} size="xs" /></h6>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal1" className='ed-btns d-flex align-items-center justify-content-center gap-2 cursor-pointer' onClick={handleEditClick}>
                                                <span className='white josefin-sans fs-14'>Edit</span>
                                                <FontAwesomeIcon icon={faPencil} className='fs-14 white' />
                                            </button>
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal2" className='ed-btns d-flex align-items-center justify-content-center gap-2 cursor-pointer'>
                                                <span className='white josefin-sans fs-14'>Delete</span>
                                                <FontAwesomeIcon icon={faTrash} className='fs-14 white' />
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Modal1 */}
            <div className="modal fade" id="Modal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header py-2">
                            <h6 className='mb-0 blue josefin-sans pt-1'>Add a product</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body add-product">
                            <form action='#' className='contact-form' onSubmit={handleSubmit}>
                                <div className="input-box position-relative mb-3">
                                    <input type="text" required name="" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <span>Title</span>
                                </div>
                                <div className="input-box my-3">
                                    <div className="dropdown rounded-1 d-flex justify-content-evenly">
                                        {/* Brand Dropdown */}
                                        <div>
                                            <button className="dropdown-toggle bg-transparent blue px-2 w-100" type="button" id="brandDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                {brand ? brand : "Select Brand"}
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="brandDropdown">
                                                {brands.map((brandItem, index) => (
                                                    <li key={index} className='cursor-pointer'><a className="dropdown-item" onClick={() => setBrand(brandItem)}>{brandItem}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Divider */}
                                        <div className='mid-border'></div>
                                        {/* Category Dropdown */}
                                        <div>
                                            <button className="dropdown-toggle bg-transparent blue px-2 w-100" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                {category ? category : "Select Category"}
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                                {categories.map((categoryItem, index) => (
                                                    <li key={index} className='cursor-pointer'><a className="dropdown-item" onClick={() => setCategory(categoryItem)}>{categoryItem}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-box position-relative mb-3">
                                    <input type="text" required name="" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    <span>Price</span>
                                </div>
                                <div className='upload-imgs d-flex mb-3' style={{ gap: "1.1rem" }}>
                                    {[...Array(4)].map((_, index) => (
                                        <div key={index} className='upload-img d-flex align-items-center justify-content-center rounded-1 position-relative'>
                                            {images[index] && (
                                                <>
                                                    <img src={URL.createObjectURL(images[index])} alt={`image${index}`} className='img-fluid' />
                                                    <div className='delete-btn rounded-circle position-absolute d-flex justify-content-center align-items-center cursor-pointer' onClick={() => handleDeleteImage(index)}>
                                                        <FontAwesomeIcon icon={faXmark} size='xs' />
                                                    </div>
                                                </>
                                            )}
                                            {!images[index] && (
                                                <>
                                                    <img src={image} alt='placeholder' className='img-fluid' />
                                                    <label htmlFor={`file-upload-${index}`} className="white w-100 h-100 position-absolute cursor-pointer">u</label>
                                                    <input type='file' id={`file-upload-${index}`} name="images" onChange={(e) => handleFileChange(e, index)} />
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {renderColorInputs()}
                                {renderSizeInputs()}
                                <div className='input-box position-relative mb-3'>
                                    <textarea required name='' value={description} onChange={(e) => setDescription(e.target.value)} />
                                    <span>Description</span>
                                </div>
                                <div className='input-box position-relative d-flex gap-2'>
                                    <input type='checkbox' />
                                    <h6 className='blue fs-7 josefin-sans'>Publish on Site</h6>
                                </div>
                                <div className='d-flex justify-content-end mt-3'>
                                    <button type='submit' className='py-2 w-100 d-flex justify-content-center align-items-center'>Publish Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal2 */}
            <div className="modal fade" id="Modal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header py-2">
                            <h6 className='mb-0 blue josefin-sans pt-1'>Delete product</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='dark-green fw-normal'>Are you sure you want to delete this product?</p>
                            <div className='d-flex gap-2 mt-3'>
                                <button type='submit' className='py-2 w-100 d-flex justify-content-center align-items-center'>Yes</button>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" className='py-2 w-100 d-flex justify-content-center align-items-center'>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal3 */}
            <div className="modal fade" id="Modal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header py-2">
                            <h6 className='mb-0 blue josefin-sans pt-1'>Add brands</h6>
                            <button id="closeBrandModalButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action='#' className='contact-form' onSubmit={handleAddBrand}>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className="input-box position-relative mb-3 w-100">
                                        <input
                                            type="text"
                                            className='josefin-sans'
                                            name="newBrand"
                                            value={newBrand}
                                            onChange={(e) => setNewBrand(e.target.value)}
                                        />
                                        <span className='josefin-sans'>Add a brand</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type='submit' className='py-2 w-100 d-flex justify-content-center align-items-center' id="closeBrandModalButton" data-bs-dismiss="modal" aria-label="Close">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal4 */}
            <div className="modal fade" id="Modal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header py-2">
                            <h6 className='mb-0 blue josefin-sans pt-1'>Add categories</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form className='contact-form' onSubmit={handleAddCategory}>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className="input-box position-relative mb-3 w-100">
                                        <input
                                            type="text"
                                            className='josefin-sans'
                                            name="newCategory"
                                            value={newCategory}
                                            onChange={(e) => setNewCategory(e.target.value)}
                                        />
                                        <span className='josefin-sans'>Add a category</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type='submit' className='py-2 w-100 d-flex justify-content-center align-items-center' id="closeBrandModalButton" data-bs-dismiss="modal" aria-label="Close">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}