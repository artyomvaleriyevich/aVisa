import './getVisa.scss'
import imgLeftHuman from '../../../../assets/getVisa/human.png'
import imgCardOne from '../../../../assets/getVisa/phone.png'
import imgCardTwo from '../../../../assets/getVisa/card.png'
import imgCardThree from '../../../../assets/getVisa/text.png'


const GetVisa = () => {
    return (
        <section className={'getVisa'}>
            <div className="container">
                <h3 className="getVisa__title">С нами получить <br/>
                                                   визу в США - легко</h3>
                <div className="getVisa__row">

                    <div className="getVisa__blockImg">
                        <img src={imgLeftHuman} alt="" className="getVisa__blockImg-image"/>
                        <p className="getVisa__blockImg-blue">простых шага</p>
                        <h3 className="getVisa__blockImg-title">
                            на пути к осуществлению <br/>
                            американской мечты
                        </h3>
                    </div>

                    <div className="getVisa__info">

                        <div className="getVisa__card">
                            <img src={imgCardOne} alt="" className="getVisa__card-img"/>
                            <div className="getVisa__card-row">
                                <p className="getVisa__card-number">01</p>
                                <p className="getVisa__card-text">
                                    Свяжитесь с нашим менеджером и получите
                                    <span className="getVisa__card-text-bold"> бесплатную профессиональную консультацию</span>
                                    по выбору визы
                                    <span className="getVisa__card-text-bold"></span>
                                </p>
                            </div>
                        </div>

                        <div className="getVisa__card">
                            <img src={imgCardTwo} alt="" className="getVisa__card-img"/>
                            <div className="getVisa__card-row">
                                <p className="getVisa__card-number">02</p>
                                <p className="getVisa__card-text">
                                    Внесите оплату любым
                                    <span className="getVisa__card-text-bold"> удобным для вас способом</span>
                                    (наличный и безналичный расчет)
                                </p>
                            </div>
                        </div>

                        <div className="getVisa__card">
                            <img src={imgCardThree} alt="" className="getVisa__card-img"/>
                            <div className="getVisa__card-row">
                                <p className="getVisa__card-number">03</p>
                                <p className="getVisa__card-text">
                                    Наши менеджеры сделают все остальное:
                                    <span className="getVisa__card-text-bold"> запишут на удобную для вас </span>
                                    дату собеседования и <span className="getVisa__card-text-bold"> тщательно подготовят вас к нему</span>, чтобы вы чувствовали себя уверенно
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default GetVisa;