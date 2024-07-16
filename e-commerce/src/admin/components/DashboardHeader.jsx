import React from 'react'
import "../styles/Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logout2 from "../../Images/switch.png"
import notification from "../../Images/notification.png"
import profileimg from "../../Images/praveen.jpeg"
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function DashboardHeader() {
    return (
        <>
            <div className='dashboard-main'>
                <div className='dashboard-header d-flex align-items-center justify-content-around py-3'>
                    <h6 className='mb-0 dark-green fw-normal'>Welcome Back, Admin</h6>
                    <div className='position-relative'>
                        <input type='text' placeholder='Type here' />
                        <FontAwesomeIcon icon={faSearch} className='position-absolute' />
                    </div>
                    <div className='d-flex gap-4 align-items-center'>
                        <div className='noti-img position-relative'>
                            <img src={notification} alt='notification' />
                            <p className='position-absolute noti'>1</p>
                        </div>
                        <img src={logout2} alt='logout' width={25} />
                        <div className='profile d-flex gap-2 align-items-center'>
                            <img src={profileimg} alt='profile-img' width={40} height={40} className='rounded-circle border-green2' />
                            <p className='mb-0 fs-7 fw-medium josefin-sans dark-green d-flex align-items-center gap-1'>Praveen
                                <FontAwesomeIcon icon={faAngleDown} size='sm' className='dark-green' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
