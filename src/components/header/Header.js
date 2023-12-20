import React from 'react';
import logo from '../../img/logo.png';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="p-0 custom-bg1 " >
            <div className="p-0 container" >
                <nav className="p-0 navbar navbar-expand-lg navbar-dark" >

                    <a className="navbar-brand" >
                        <img src={logo} alt="Logo" className="img-fluid logo-image"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {<Link to="/" className="nav-link">
                                    Главная
                                </Link>}
                            </li>
                            <li className="nav-item">
                                {<Link to="/about" className="nav-link">
                                    О нас
                                </Link>}
                            </li>
                            <li className="nav-item">
                                {<Link to="/product" className="nav-link">
                                    Товары
                                </Link>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;