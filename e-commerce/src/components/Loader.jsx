import React from 'react';
import '../styles/Loader.css';
import { Container } from 'react-bootstrap';
import loader from "../Images/loader.gif";

const Loader = () => {
  return (
    <Container fluid className="loader-container h-100 d-flex justify-content-center align-items-center position-fixed top-0 left-0">
      <div className="loader"><img src={loader} alt='loader' className='img-fluid'/></div>
    </Container>
  );
};

export default Loader;
