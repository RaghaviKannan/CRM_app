import React from 'react'
import Login from './Login';
import Register from './Register';
import Forgotpassword from './Forgotpassword';

function Home() {
    return (<>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Welcome to our CRM application!</h1>
                </div>
            </div>
        </header>
        <header className='navbar navbar-expand-lg navbark-dark bd-navbar'>
            <nav className='container-xxl bd-gutter flex-wrap flex-lg-nowrap'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="fs-5"><h3 style={{ color: "blue" }}>User Login</h3></div>
                        <br />
                        <Login />
                    </div>
                    <div className='col-lg-6'>
                        <div className="fs-5"><h3 style={{ color: "blue" }}>Register User</h3></div>
                        <br />
                        <Register />
                    </div>
                </div>
            </nav>
        </header>
    </>
    )
}

export default Home