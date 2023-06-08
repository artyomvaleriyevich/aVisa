import './whatNeed.scss'
import cardImgOne from '../../../../assets/whatNeed/one.png'
import cardImgTwo from '../../../../assets/whatNeed/two.png'
import cardImgThree from '../../../../assets/whatNeed/three.png'
import cardImgFour from '../../../../assets/whatNeed/four.png'
import cardImgFive from '../../../../assets/whatNeed/five.png'
import cardImgSix from '../../../../assets/whatNeed/six.png'
import cardImgSeven from '../../../../assets/whatNeed/seven.png'
import cardImgEight from '../../../../assets/whatNeed/eight.png'
import cardImgHome from '../../../../assets/whatNeed/home.png'


const WhatNeed = () => {
    return (
        <div className={'whatNeed'}>
            <div className="container">
                <h3 className="whatNeed__title">Что нужно делать, чтобы получить визу в США самостоятельно</h3>
                <div className="whatNeed__row">

                    <div className="whatNeed__card">
                        <img src={cardImgHome} alt="" className="whatNeed__card-image"/>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgOne} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Правильно заполнить анкету <br/>
                            ds-160 на английском языке, <br/>
                            <span className="whatNeed__card-title-bold">не допустив ни одной ошибки</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgTwo} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Оплатить <br/>
                            <span className="whatNeed__card-title-bold">консульский взнос</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgThree} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Зарегистрироваться на сайте посольства США. Прикрепить
                            <span className="whatNeed__card-title-bold">заполненную анкету и оплаченную квитанцию</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgFour} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Сделать фотографию <br/>
                            <span className="whatNeed__card-title-bold">верного формата</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgFive} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Собрать <br/>
                            <span className="whatNeed__card-title-bold">большой перечень  <br/> документов</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgSix} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Отслеживать днями и ночами, когда на сайте консульства появится <br/>
                            <span className="whatNeed__card-title-bold">окно записи на собеседование</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgSeven} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Подготовиться к непростому <br/>
                            <span className="whatNeed__card-title-bold">собеседованию с консулом</span>

                        </h3>
                    </div>

                    <div className="whatNeed__card">
                        <img src={cardImgEight} alt="" className="whatNeed__card-img"/>
                        <h3 className="whatNeed__card-title">
                            Мониторить сайт и отслеживать <br/>
                            <span className="whatNeed__card-title-bold">результаты готовности визы</span>

                        </h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatNeed;