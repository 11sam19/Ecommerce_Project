import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './styles/mainstyle.css';

const Sidebar = () => {
    return (
        <>
         <nav className="nav flex-column">
            <Link className="nav-link active" aria-current="page" to="/home">Dashboard</Link>
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            <Link className="nav-link" to="/category">Category</Link>
            <Link className="nav-link" to="/brand">Brand</Link>
            <Link className="nav-link" to="/items">Items</Link>
            <Link className="nav-link" to="/orders">Orders</Link>
        </nav>
        <div className="container-fluid admin_navbar">
                 <img src='https://i.pinimg.com/originals/fc/7d/e6/fc7de6c5e116c5aa2e6e4ac0f6063250.jpg' alt="admin_profile"/>
                 <p>Admin</p>
        </div>
        <Outlet/>
        </>
    );
}

export default Sidebar;