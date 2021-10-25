import React from 'react';
import './HealthyLifeStyle.css';


const HealthyLifeStyle = () => {
    return (
        <div className='container mt-5 mb-5'>
            <section className='row'>
                <article className='col-3 eatingTips '>
                    <div className='eachTips'>
                        <h1><a href="https://www.betterhealth.vic.gov.au/health/healthyliving/fruit-and-vegetables" target="_blank">Enjoy plenty of fruits and vegetables.</a></h1>
                    </div>
                </article>
                <article className='col-3 exerciseTips'>
                    <div className='eachTips'>
                        <h1><a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389" target="_blank">Maintain a healthy body weight.</a></h1>
                    </div>
                </article>
                <article className='col-3 drinkTips'>
                    <div className='eachTips'>
                        <h1><a href="https://www.healthline.com/nutrition/7-health-benefits-of-water#7.-Can-aid-weight-loss" target="_blank">Drink plenty of fluids.</a></h1>
                    </div>
                </article>
                <article className='col-3 checkupTips'>
                    <div className='eachTips'>
                        <h1><a href="https://mypvhc.com/importance-regular-check-ups/#:~:text=Regular%20check%2Dups%20can%20help,treatment%20quickly%2C%20avoiding%20any%20complications." target="_blank">Base your diet on plenty of foods rich in carbohydrates.</a></h1>
                    </div>
                </article>
            </section>

        </div>
    );
};

export default HealthyLifeStyle;