import React from 'react';
import img1 from '../../../img/offer/im-4.jpg';
import img2 from '../../../img/offer/im-2.jpg';
import img3 from '../../../img/offer/im-1.jpg';
import img4 from '../../../img/offer/im-3.jpg';
import img5 from '../../../img/offer/im-5.jpg';

import './LatestOffers.css';

const LatestOffers = () => {
    return (
        <div className="container">
            <div>
                <h1 className="text-warning"> Our Latest Offers</h1>
                <hr/>
                <h5 className="text-primary">  UP TO 20% OF EMI AVAILAVLE </h5>
            </div>
            <div className="row offer-section">
                <div className="col-lg-4">
                    <img src={img2} className="img-fluid first-row-images" alt="" />
                    <h5 className="text-warning">Lamgorghini Aventor</h5>
                    <button type="button" class="btn btn-dark">View Details</button>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <img src={img1} className="img-fluid second-row-images" alt="" />
                            <h5 className="text-warning">Audi</h5>
                            <button type="button" class="btn btn-dark mb-2">View Details</button>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img3} className="img-fluid second-row-images" alt="" />
                            <h5 className="text-warning">Bugatti</h5>
                            <button type="button" class="btn btn-dark">View Details</button>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img4} className="img-fluid second-row-images" alt="" />
                            <h5 className="text-warning">Rolls Royelce</h5>
                            <button type="button" class="btn btn-dark ">View Details</button>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img5} className="img-fluid second-row-images" alt="" />
                            <h5 className="text-warning">Supra</h5>
                            <button type="button" class="btn btn-dark">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestOffers;