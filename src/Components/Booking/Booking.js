import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Resorts from '../../FakeData/FakeData';
import './Booking.css'

const Booking = () => {
   let { id } =  useParams();  
    const ResortBooking = Resorts.find(booking => booking.id === id); 
     const {  name, description} = ResortBooking;
    return (
        <div className="bg">
            <div className="container">
               </div>
               <div style={{display:'flex', marginTop:'50px'}}>
                    <div className="half">
                         <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="half">
                       <div className="bookingForm">
                        <form>
                                <div className="form-group">
                                    <label >Origin</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group">
                                    <label>Destination</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>

                               <div style={{display:'flex', width:'100px', marginBottom:'10px'}}>
                               <div className="form-group" style={{width:'155px', margin:'2px'}}>
                                    <label >From</label>
                                    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group" style={{width:'155px',margin:'2px'}}>
                                    <label>To</label>
                                    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                               </div>
                                <Link to={`/details/${id}`}><span className="form-control btn btn-warning"> Booking </span></Link>
                        </form>
                       </div>
                    </div>
                </div>
        </div>
    );
};

export default Booking;