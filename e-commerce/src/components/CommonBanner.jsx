import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function CommonBanner() {
    return (
        <>
            <Container fluid className='pages-bg py-3 animate three fadeInUp'>
                <Container>
                    <Row className='white flex-column py-4 gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <Link to={'/'}><h6 className='white fw-lighter mb-0'>Home</h6></Link>
                            <FontAwesomeIcon icon={faAngleRight} size='xs' className='fw-lighter' />
                            <h6 className='fw-lighter opacity-dim mb-0'>Products</h6>
                        </div>
                        <div className='text-center dopeshope fs-1 mb-1 animate four fadeInUp'>DopeShope</div>
                        <h4 className='text-center mt-3 animate five fadeInUp'>Where Style Meets Elegance</h4>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
