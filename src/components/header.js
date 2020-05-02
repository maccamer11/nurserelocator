import React from 'react';

const Header = () => {
    return (
        <div className='head bg-light'>
            <div className='header'>
                <h1 className="later">NursingRelocater</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">States</a>
                    <a className="nav-item nav-link" href="#">Provinces</a>
                    <a className="nav-item nav-link" href="#">Ranking</a>
                    <a className="nav-item nav-link" href="#">Support Us</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;