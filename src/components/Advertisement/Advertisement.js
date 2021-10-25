import React from 'react';
import './Advertisement.css';
import ad1 from '../../images/ad1.jpg'
import ad2 from '../../images/ad2.jpg'
import ad3 from '../../images/ad3.jpg'

const Advertisement = () => {
    return (
        <div className='container mt-5'>
            <div className="card mt-5" >
                <img src={ad1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Rising cost of healthcare and medicines has become a global concern, and in order to reduce cost across the value chain, pharmaceutical companies from developed markets.</p>
                    </div>
            </div>
            <div className="card mt-5" >
                <img src={ad2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">This section of our website contains essential information on Beximco Pharmaceuticals Ltd. You can view and download our financial reports and keep up to-date with the latest news and company information.</p>
                    </div>
            </div>
            <div className="card mt-5" >
                <img src={ad3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">We are welcoming you to the News section of our website. We categorize this News section into three parts so that you can easily find your necessary information as well as your quest.</p>
                    </div>
            </div>
        </div>
    );
};

export default Advertisement;