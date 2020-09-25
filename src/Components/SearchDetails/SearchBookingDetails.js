import React from 'react';
import { useParams } from 'react-router-dom';
import RoomeDetails from '../../FakeData/FakeDataTwo';
import './SearchBookingDetails.css'

const SearchBookingDetails = () => {
            const{key} = useParams();
            console.log(key);
            const roomDetails = RoomeDetails.find(rmDetails => rmDetails.id === key); 
            const {  name, description, photo, fare} = roomDetails;
    return (
        <div className="container" style={{color:'white'}} >
            <h6>121 stays apr 2020</h6>
            <h3>Stay In <strong>{name}</strong></h3>
            <div className="wrapper d-flex" >
                <div className="search-details">
                    {
                        RoomeDetails.map( roomInfo => <div>
                            <div className="d-flex room-detials">
                            <div><img src={roomInfo.url} alt=""/></div>
                            <div>
                                <h5>{roomInfo.name}</h5>
                                <p>2 gerst 2 bedroom 2 baths</p>
                                <p>Wifi Air-conditions kitchen Cancellation are available</p>
                                <h6>4.6(20) $34/ Night ${roomInfo.fare} Total</h6>
                            </div>
                            </div>
                        </div>)
                    } 
                </div>
                <div className="maps">This is map</div>
            </div>
        </div>
    );
};

export default SearchBookingDetails;