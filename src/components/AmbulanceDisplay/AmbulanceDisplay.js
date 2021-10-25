import React from 'react';
import './AmbulanceDisplay.css';
import StarRatings from 'react-star-ratings';

const AmbulanceDisplay = (props) => {
    const { name, img, star, key, location } = props.ambulance;

    return (
        <div className='container eachAmbulanceSHow'>
            <section className='row eachAmbulance' >
                <article className='col-12  col-md-4  '>
                    <div className="ambulanceImg">
                        <img src={img} />
                    </div>
                </article>
                <article className='col-12  col-md-8  ambulanceDetails'>
                    <h1>{name}</h1>
                    <h6>Trace Location from <a href={location} target="_blank">here</a> </h6>
                    <StarRatings
                    
                    rating={star}
                    starDimension="23px"
                    starSpacing="4px"
                    starEmptyColor='rgb(177, 173, 173)'
                    starRatedColor='rgb(252, 179, 23)'
                />
                </article>
            </section>
        </div>
    );
};

export default AmbulanceDisplay;