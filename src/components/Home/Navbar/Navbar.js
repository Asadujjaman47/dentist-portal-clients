import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* <div class="container-fluid"> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="#">Dental Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" to="#">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" to="#">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" to="#">Contuct us</Link>
                        </li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    );
};

export default Navbar;