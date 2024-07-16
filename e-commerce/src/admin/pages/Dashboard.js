import React from 'react'
import "../styles/Dashboard.css";
import { Col, Container, Row } from 'react-bootstrap'
import DashboardMenu from '../components/DashboardMenu';
import DashboardHeader from '../components/DashboardHeader';
import home from "../../Images/home-green.png"
import users from "../../Images/user-green.png"
import order from "../../Images/purchase-order-green.png"
import chart from "../../Images/bar-chart-green.png"
import PieChartComponent from '../components/PieChart';
import BarChartComponent from '../components/BarChart';

export default function Dashboard() {

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
              <div className='d-flex align-items-center gap-2'>
                <div className='rounded-1 homeimg d-flex align-items-center p-2'>
                  <img src={home} alt='home' className='w-100' />
                </div>
                <p className='josefin-sans white fw-semibold fs-5 mb-0 pt-1'>Dashboard</p>
              </div>
              <Row className='mt-5'>
                <Col lg={4}>
                  <div className='all-data d-flex flex-column gap-3 rounded-1 p-4 position-relative'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='dark-green fw-normal mb-0 fs-7 pt-1'>Users</p>
                      <img src={users} alt='users' width={25} />
                    </div>
                    <h6 className='dark-green fs-4 pt-2'>10</h6>
                    <p className='josefin-sans dark-green fs-7 fw-semibold'>Increased by 10%</p>
                    {/* <img src={circles} alt='circles' className='circles w-100 position-absolute' /> */}
                  </div>
                </Col>
                <Col lg={4}>
                  <div className='all-data d-flex flex-column gap-3 rounded-1 p-4 position-relative'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='dark-green fw-normal mb-0 fs-7 pt-1'>Orders</p>
                      <img src={order} alt='order' width={34} />
                    </div>
                    <h6 className='dark-green fs-4 pt-1'>5</h6>
                    <p className='josefin-sans dark-green fs-7 fw-semibold'>Increased by 10%</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className='all-data d-flex flex-column gap-3 rounded-1 p-4 position-relative'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='dark-green fw-normal mb-0 fs-7 pt-1'>Revenue</p>
                      <img src={chart} alt='chart' width={25} />
                    </div>
                    <h6 className='dark-green fs-4 pt-2'>₹ 2000</h6>
                    <p className='josefin-sans dark-green fs-7 fw-semibold'>Increased by 10%</p>
                  </div>
                </Col>
              </Row>
              <Row className='mt-4 d-flex justify-content-between'>
                <Col lg={7}>
                  <BarChartComponent />
                </Col>
                <Col lg={4}>
                  <PieChartComponent />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
