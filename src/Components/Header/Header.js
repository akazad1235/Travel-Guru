import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <div className="container">
               <nav className="navbar navbar-expand-lg  ">
                <Link to="" className="navbar-brand " href="#"><img className="logo"  src="https://iili.io/2uZll1.png" alt="image"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>

                <div className="collapse navbar-collapse ma " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active ">
                        <Link to="/home" className="nav-link text-white" href="#"> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="searchBooking" className="nav-link text-white" >Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link text-white" href="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link text-white" href="#">Contact</Link>
                    </li>
                    <li className="nav-item">
                     <Link to="" className="nav-link text-white" href="#">welcome, <strong>{loggedInUser.name}</strong></Link>
                    </li>
                    <li className="nav-item">
                        {
                            loggedInUser.name ? <button  className="nav-link text-white btn btn-warning" href="#" onClick={() => setLoggedInUser({})}>Logout</button>:<Link to="/login" className="nav-link text-white btn btn-warning" href="#" onClick={() => setLoggedInUser({})}>Login</Link>
                        }
                    </li>
                    </ul>
                    
                </div>
                </nav>
               </div>
               
        </div>
    );
};

export default Header;