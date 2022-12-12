import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
function Portal() {
    const navigate = useNavigate()
    const logout =()=>{
        localStorage.removeItem("crmtoken")
        localStorage.removeItem("role")
        navigate('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" id="mainNav">
                <div className="container">
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                    <li className="nav-item px-4"><Link to='/portal/dashboard' className='text-white'>Dashboard</Link></li>
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item px-4"><Link to='/portal/leads' className='text-white'>Leads</Link></li>
                            <li className="nav-item px-4"><Link to='/portal/servicerequests' className='text-white'>Service Requests</Link></li>
                            <li className="nav-item px-4"><Link to='/portal/contacts' className='text-white'>Contacts</Link></li>
                        </ul>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Portal