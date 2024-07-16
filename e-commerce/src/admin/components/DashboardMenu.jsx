import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Dashboard.css";
import dslogo from "../../Images/favicon.ico";
import dashboardGreen from "../../Images/dashboard-green.png";
import dashboardWhite from "../../Images/dashboard-white.png";
import shoppingBagGreen from "../../Images/shopping-bag-green.png";
import shoppingBagWhite from "../../Images/shopping-bag-white.png";
import customerGreen from "../../Images/customer-green.png";
import customerWhite from "../../Images/customer-white.png";
import ordersGreen from "../../Images/sent-green.png";
import ordersWhite from "../../Images/sent-white.png";
import settingsGreen from "../../Images/setting-green.png";
import settingsWhite from "../../Images/setting-white.png";
import logoutGreen from "../../Images/logout-green.png";
import logoutWhite from "../../Images/logout-white.png";
import reviewGreen from "../../Images/chat-green.png";
import reviewWhite from "../../Images/chat-white.png";
import notiGreen from "../../Images/bell-green.png";
import notiWhite from "../../Images/bell-white.png";

export default function DashboardMenu() {
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { name: 'Overview', iconGreen: dashboardGreen, iconWhite: dashboardWhite, path: '/dashboard' },
        { name: 'Products', iconGreen: shoppingBagGreen, iconWhite: shoppingBagWhite, path: '/products' },
        { name: 'Orders', iconGreen: ordersGreen, iconWhite: ordersWhite, path: '/orders' },
        { name: 'Customers', iconGreen: customerGreen, iconWhite: customerWhite, path: '/customers' },
        { name: 'Reviews', iconGreen: reviewGreen, iconWhite: reviewWhite, path: '/reviews' },
        { name: 'Notifications', iconGreen: notiGreen, iconWhite: notiWhite, path: '/notifications' },
        { name: 'Settings', iconGreen: settingsGreen, iconWhite: settingsWhite, path: '/settings' },
        { name: 'Logout', iconGreen: logoutGreen, iconWhite: logoutWhite, path: '/logout' }
    ];

    return (
        <div className='dashboard-menu px-4 py-3'>
            <div className='d-flex flex-column'>
                <div className='d-flex gap-2 align-items-center mt-1'>
                    <img src={dslogo} alt='dopeshope-logo' width={40} className='logo rounded-circle' />
                    <p className='dopeshope dark-green fs-5 mb-0'>DopeShope</p>
                </div>
                <p className='heading mb-3 mt-4'>MAIN</p>
                <div className='menu'>
                    {menuItems.slice(0, 6).map(item => (
                        <Link 
                            to={item.path} 
                            key={item.name} 
                            className={`m1 d-flex gap-3 mb-3 py-2 ps-3 ${currentPath === item.path ? 'active' : ''}`}
                        >
                            <img src={currentPath === item.path ? item.iconWhite : item.iconGreen} alt={item.name.toLowerCase()} width={25} />
                            <h6 className='fw-normal mb-0'>{item.name}</h6>
                        </Link>
                    ))}
                </div>
                <p className='heading mb-3 mt-4'>ACCOUNT</p>
                <div className='menu'>
                    {menuItems.slice(6).map(item => (
                        <Link 
                            to={item.path} 
                            key={item.name} 
                            className={`m1 d-flex gap-3 mb-3 py-2 ps-3 ${currentPath === item.path ? 'active' : ''}`}
                        >
                            <img src={currentPath === item.path ? item.iconWhite : item.iconGreen} alt={item.name.toLowerCase()} width={25} />
                            <h6 className='fw-normal mb-0'>{item.name}</h6>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
