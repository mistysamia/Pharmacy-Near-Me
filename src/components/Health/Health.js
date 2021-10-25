import React from 'react';
import Contact from '../Contact/Contact';
import HealthyLifeStyle from '../HealthyLifeStyle/HealthyLifeStyle';
import './Health.css';
import contactImage3 from '../../images/contactImage3.jpg'

const Health = () => {
    return (
        <div>
            <section className="HealthextraImgPart pt-5" >

            </section>

            {/* Title Part Starts */}
            <section className='container ' >
                <article className='headerTitle '>
                    <h1><span >Healthy</span> LifeStyle</h1>
                    <p>A healthy lifestyle simply means doing things that make you happy and feel good.
                      
                    </p>
                </article>
            </section>
            {/* Title Part Ends */}

            {/* Top Article Part Starts */}
            <section className='container mt-5 '>
                <section className='row topArticle'>

                    <article className='col-12 col-sm-6 col-md-6'>
                        <h3>Health is Wealth</h3>
                        <p>
                            “Health is Wealth” means that nothing in life has more value than health. There can be no success without health and thereby no money. If one is not healthy, he/she can't enjoy the wealth. ... A person with good health, enjoys his wealth, on the other hand, a person with bad health can't enjoy.
                        </p>
                        <p className='fw-bolder'>True that wealth brings prosperity and happiness, but all that is worth only if one is healthy.</p>
                    </article>

                    <article className='col-12 col-sm-6 col-md-6'>
                        <h3>What is good health?</h3>
                        <p>
                            The word health refers to a state of complete emotional and physical well-being. Healthcare exists to help people maintain this optimal state of health.
                        </p>
                        <p className='fw-bolder'>• Enjoy life</p>
                        <p className='fw-bolder'>• Bounce back after difficult experiences and adapt to adversity</p>
                        <p className='fw-bolder'>• Balance different elements of life, such as family and finances</p>
                        <p className='fw-bolder'>• Feel safe and secure</p>
                        <p className='fw-bolder'>• Achieve their full potential</p>
                    </article>


                </section>
                <h5 className='text-start mt-5'>A healthy person always sees the world as beautiful. An unhealthy person can’t be happy at all. A person in good health can work and make his dreams come true. He doesn’t know what complaining is. He doesn’t complain about life and enjoys it. He is also in a condition to help others. A person with good health and no money is happier than a person with poor health and lots of money. Good health is the key to happiness in life.</h5>
            </section>
            {/* Top Article Part Ends */}



            <section className='container healthyTips mt-5'>
                <h1 className='healthyTipsHeadings pb-3'> For Healthy LifeStyle</h1>
                <HealthyLifeStyle></HealthyLifeStyle>
            </section>

            <Contact img={contactImage3}></Contact>

            {/* Coffee Tips Part Starts */}
            <section className='container my-5 text-start coffeeTips'>
                <h2>Don’t fear coffee</h2>
                <p className='text-start'>Despite some controversy over it, coffee is loaded with health benefits.

                    It’s rich in antioxidants, and some studies have linked coffee intake to longevity and a reduced risk of type 2 diabetes, Parkinson’s and Alzheimer’s diseases, and numerous other illnesses (16Trusted Source, 17Trusted Source, 18Trusted Source, 19Trusted Source).

                    The most beneficial intake amount appears to be 3–4 cups per day, although pregnant people should limit or avoid it completely because it has been linked to low birth weight (18Trusted Source).

                    However, it’s best to consume coffee and any caffeine-based items in moderation. Excessive caffeine intake may lead to health issues like insomnia and heart palpitations. To enjoy coffee in a safe and healthy way, keep your intake to less than 4 cups per day and avoid high-calorie, high-sugar additives like sweetened creamer.</p>

            </section>
            {/* Coffee Tips Part Ends */}


            <section className='container healthOrganization'>
                <section className='row'>
                    <section className='col-12 col-sm-6 col-md-6 eachHealthOrganization'>
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=Cj0KCQjwtrSLBhCLARIsACh6RmgxoMWzGSgBdUaQ94KYKD5k-XOeKCqVEu5Wx6DcoKv_lyjsLW3FPr8aAgiFEALw_wcB" target="_blank">
                            <div className='eachHealthOrganizationPart'>
                                <h2>World Health Organization</h2>
                                <p>Official Public Service Announcement on Coronavirus from the World Health Organization. Learn about Symptoms.</p>
                            </div>
                        </a>
                    </section>
                    <section className='col-12 col-sm-6 col-md-6 eachHealthOrganization englandHealth'>
                        <a href="https://www.gov.uk/government/organisations/public-health-england" target="_blank">
                            <div className='eachHealthOrganizationPart'>
                                <h2>Public Health England</h2>
                                <p>Public Health England was replaced by UK Health Security Agency and Office for Health.</p>
                            </div>
                        </a>

                    </section>

                </section>

            </section>
        </div>
    );
};

export default Health;