import React from 'react';
import './Ambulance.css';
import ambulanceHead from '../../images/ambulanceHead.mp4'
import VideoLooper from 'react-video-looper'
import { useEffect, useState } from 'react';
import AmbulanceDisplay from '../AmbulanceDisplay/AmbulanceDisplay';
import Contact from '../Contact/Contact';
import Advertisement from '../Advertisement/Advertisement';
import contactImage2 from '../../images/contactImage2.jpg'

const Ambulance = () => {
    const [ambulances, setAmbulances] = useState([]);
    const [displayAmbulances, setDisplayAmbulances] = useState([]);

    useEffect(() => {
        fetch('./ambulance.json')
            .then(res => res.json())
            .then(data => {
                setAmbulances(data);
                setDisplayAmbulances(data);
            });
    }, []);


    return (
        <div className=''>
            {/* Video Section Starts */}
            <section className='ambulanceHeader'>
                <VideoLooper source={ambulanceHead} start={4.31} end={19.48} />
            </section>
            {/* Video Section Ends */}


            <section className='container'>
                <section className='row '>
                    {/* Ambulance Display Starts */}
                    <article className='col-12 col-md-9'>
                        <section className='container ' >
                            <article className='headerTitle '>
                                <h1><span >Emergency</span> Ambulance</h1>
                                <p>We provide emergency ambulance service to people with acute illness and pregnancy
                                </p>
                            </article>
                        </section>
                        {
                            displayAmbulances.map(ambulance => <AmbulanceDisplay
                                key={ambulance.key}
                                ambulance={ambulance}
                            >
                            </AmbulanceDisplay>)
                        }
                    </article>
                    {/* Ambulance Display Ends */}

                    {/* Advertisement Part Starts */}
                    <article className='col-12  col-md-3 py-5 advertisementPart'>
                        <Advertisement></Advertisement>
                    </article>
                    {/* Advertisement Part Ends */}

                </section>
            </section>


            <Contact img={contactImage2}></Contact>

            <section className="extraImgPart" > </section>

        </div>
    );
};

export default Ambulance;