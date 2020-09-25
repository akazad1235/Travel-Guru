import React, { useState } from 'react';
import './Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Resorts from '../../FakeData/FakeData';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="bg ">
               <div style={{display:'flex', marginTop:'50px'}}>
                   <div style={{width:'50%', textAlign:'center', marginLeft:'50px'}}>
                   <div >
                   <h1 style={{color:'white'}}>Cox's Bazar</h1>
                       <p style={{color:'white'}}>southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.</p>
                       <button className="btn btn-warning" >Booking<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        
                         </svg>
                       </button>
                    </div>
                   </div>
                   <div style={{width:'50%'}}>
                   <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    dots
                    >
                {
                    Resorts.map( resort => 
                    <div className="item img " key={resort.id}><Link to={`/booking/${resort.id}`}><img src= {resort.photo} alt=""/></Link>{resort.name}</div> 
                    )
                } 
                </OwlCarousel>
                   </div>
               </div>

        </div>

           
        
    );
};

export default Home;