import React from 'react';
import './Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = () => {
   
   const hangleResort = ()=> {
            console.log('cickted');
   }
    return (
        <div className="bg bg-color">
               <div className="container">
               <nav className="navbar navbar-expand-lg  ">
                <a className="navbar-brand " href="#"><img className="logo" src="https://iili.io/2uZll1.png" alt="image"/></a>
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
                   
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    
                </div>
                </nav>
               </div>
               <div className="overlay"></div>
               <div style={{display:'flex', marginTop:'50px'}}>
                   <div style={{width:'50%', textAlign:'center'}}>
                       <h1>Cox's Bazar</h1>
                       <p>Cox's BazarCox's BazarCox's BazarCox's BazarCox's BazarCox's BazarCox's BazarCox's Bazar</p>
                       <button className="btn btn-warning">Booking<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></button>
                   </div>
                   <div style={{width:'50%'}}>
                   <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    dots
                   
                >
                    <div className="item img" onClick={hangleResort}><img   src="https://iili.io/2AoYl9.png"/></div>
                    <div className="item img" onClick={hangleResort}><img src="https://iili.io/2AoEDx.png"/></div>
                    <div className="item img" onClick={hangleResort}><img src="https://iili.io/2AoWiB.png"/></div>
                    
                    
                </OwlCarousel>
                   </div>
               </div>

        </div>

           
        
    );
};

export default Home;