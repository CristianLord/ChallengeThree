import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

function Sidebar() {

    const {user, logOut} = useAuth();

    return <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </NavLink>

        <hr className="sidebar-divider my-0"/>

        <li className='nav-item'>
            <NavLink className="nav-link" to='/'>
                    <i className="fas fa-home"></i>
                    <span>&nbsp; Home</span>
            </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Journals
        </div>

        <li className="nav-item">
            <NavLink to={`/journals/${user.id}`} className="nav-link">
                <i className="fas fa-book"></i>
                <span>&nbsp; My journals</span>
            </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Researchers
        </div>

        <li className="nav-item">
            <NavLink to='/find' className="nav-link">
                <i className="fas fa-search"></i>
                <span>&nbsp; Find new</span>
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/subscriptions' className="nav-link">
                <i className="far fa-star"></i>
                <span>&nbsp; My suscriptions</span>
            </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
            <Link onClick={logOut} className="nav-link">
                <i className="fas fa-sign-out-alt"></i>
                <span>&nbsp; Logout</span>
            </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>


    </ul>
}

export default Sidebar