import React, { useEffect, useState } from 'react';
import PharmacyDisplay from '../PharmacyDisplay/PharmacyDisplay';
import { Link } from 'react-router-dom';
import headBg1 from '../../images/headBg1.jpg'
import headBg2 from '../../images/headBg2.jpg'
import headBg3 from '../../images/headBg3.jpg'
import './Home.css';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import contactImage1 from '../../images/contactImage1.jpg'


const Shop = () => {
    const [pharmacy, setPharmacy] = useState([]);
    const [displayPharmacy, setDisplayPharmacy] = useState([]);

    useEffect(() => {
        fetch('./pharmacy.json')
            .then(res => res.json())
            .then(data => {
                setPharmacy(data);
                setDisplayPharmacy(data);
            });
    }, []);


    return (
        <section>
            {/* Header Part Starts */}
            <section id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div class="carousel-item active carouselImg">
                        <img src={headBg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={headBg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carouselImg">
                        <img src={headBg3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
            {/* Header Part Ends */}

            {/* Title Part Starts */}
            <section className='container ' >
                <article className='headerTitle '>
                    <h1><span >Pharmacy</span> Near Me</h1>
                    <p>Determined to Serve and Save 24/7<br />
                        You matter most to us
                    </p>
                </article>
            </section>
            {/* Title Part Ends */}

            {/* Pharmacy details Starts */}
            <div className="container mb-5">
                <article className='pharmacyDisplay'>
                    <div className="row">
                        {
                            displayPharmacy.map(pharmacy => <PharmacyDisplay
                                key={pharmacy.key}
                                pharmacy={pharmacy}
                            >
                            </PharmacyDisplay>)
                        }
                    </div>
                </article>
            </div>
            {/* Pharmacy details Ends */}

            <Contact img={contactImage1}></Contact>
          <Review></Review>
        </section>
    );
};

export default Shop;