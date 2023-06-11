import './review.scss'

const Review = () => {
    return (
        <section className={'review'}>
            <div className="container">
                <h2 className="review__title">
                    Реальные отзывы <br/>
                    наших клиентов
                </h2>
                
                <div className="review__row">
                    
                    <div className="review__card">
                        <img src="" alt="" className="review__card-img"/>
                    </div>

                    <div className="review__card">
                        <img src="" alt="" className="review__card-img"/>
                    </div>

                    <div className="review__card">
                        <img src="" alt="" className="review__card-img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;