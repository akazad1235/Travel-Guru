import React from 'react';

const Header = () => {
    return (
        <div>
             <div className="container">
               <nav className="navbar navbar-expand-lg  ">
                <a className="navbar-brand " href="#"><img className="logo"  src="https://iili.io/2uZll1.png" alt="image"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>

                <div className="collapse navbar-collapse ma " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active ">
                        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                   
                   
                    </ul>
                    
                </div>
                </nav>
               </div>
               
        </div>
    );
};

export default Header;