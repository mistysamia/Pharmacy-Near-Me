import React from 'react';
import './Review.css';
import reviewer1 from '../../images/reviewer1.jpg'
import reviewer2 from '../../images/reviewer2.jpg'
import reviewer3 from '../../images/reviewer3.jpg'
import reviewer4 from '../../images/reviewer4.jpg'

const Review = () => {
    return (
        <div className='container mt-5 x'>
            <section className='reviewPart '>
                <h1 className='mb-5'>Top Reviewer</h1>

                {/* Top Reviewers Details Starts  */}
                <section className='reviewerSection'>
                    <section className='row'>

                        <article className='col-12 col-sm-6 col-md-4 eachReviewer'>
                            <section class="eachReviewerImg ">
                                <div className='imgPart '>
                                    <img src={reviewer1}></img>
                                </div>
                            </section>
                            <div className='eachReviewerName'>
                                <h6 className='text-center mt-3'>Alif Hasan</h6>
                            </div>
                        </article>


                        <article className='col-12 col-sm-6 col-md-4 eachReviewer'>
                            <section class="eachReviewerImg">
                                <div className='imgPart '>
                                    <img src={reviewer2}></img>
                                </div>
                            </section>
                            <div className='eachReviewerName'>
                                <h6 className='text-center mt-3'>Hridi Haque</h6>
                            </div>
                        </article>


                        <article className='col-12 col-sm-6 col-md-4 eachReviewer'>
                            <section class="eachReviewerImg">
                                <div className='imgPart '>
                                    <img src={reviewer3}></img>
                                </div>
                            </section>
                            <div className='eachReviewerName'>
                                <h6 className='text-center mt-3'>Nila</h6>
                            </div>
                        </article>

                      

                    </section>
                </section>
                {/* Top Reviewers Details Ends  */}
            </section>

        </div>
    );
};

export default Review;