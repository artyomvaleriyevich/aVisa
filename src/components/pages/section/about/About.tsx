import './about.scss'
import imgCardOne from '../../../../assets/about/cardOne.png'
import imgCardTwo from '../../../../assets/about/cardTwo.png'
import imgCardThree from '../../../../assets/about/cardThree.png'
import imgCardFour from '../../../../assets/about/cardFour.png'
import imgCardFive from '../../../../assets/about/cardFive.png'
import imgCardSix from '../../../../assets/about/cardSix.png'



const About = () => {
    return (
        <section className={'about'}>
            <div className="container">
                <h2 className="about__title">Почему уже более 2000 клиентов, обратившись к нам, рекомендуют нас и заказывают визы США для себя и родственников повторно</h2>
                <div className="about__row">

                    <div className="about__card">
                        <img src={imgCardOne} alt="" className="about__card-img"/>
                        <p className="about__card-title">Без вашего присутствия</p>
                        <p className="about__card-info">
                            Наши менеджеры оформят вашу заявку
                            по телефону, заполнят за вас анкету,
                            запишут на собеседование.
                            Вам не нужно никуда приезжать</p>
                    </div>

                    <div className="about__card">
                        <img src={imgCardTwo} alt="" className="about__card-img"/>
                        <p className="about__card-title">Статистики получения визы 95%</p>
                        <p className="about__card-info">
                            Гарантировать получение визы никто
                            не может, но наши менеджеры помогут
                            избежать ошибок, способных привести
                            к отказу в визе</p>
                    </div>

                    <div className="about__card">
                        <img src={imgCardThree} alt="" className="about__card-img"/>
                        <p className="about__card-title">Срочное оформление визы</p>
                        <p className="about__card-info">
                            С нами вы сможете получить визу в США
                            за рекордно короткие сроки. Просто
                            свяжитесь с нами и менеджеры бесплатно
                            проконсультируют вас по этому вопросу</p>
                    </div>

                    <div className="about__card">
                        <img src={imgCardFour} alt="" className="about__card-img"/>
                        <p className="about__card-title">Минимум документов</p>
                        <p className="about__card-info">
                            Наши менеджеры составят индивидуальный
                            список документов, опираясь на данные
                            вашей анкеты. Это ускоряет процесс
                            и помогает правильнее подготовиться
                            к собеседованию</p>
                    </div>

                    <div className="about__card">
                        <img src={imgCardFive} alt="" className="about__card-img"/>
                        <p className="about__card-title">Быстрая запись на собеседование</p>
                        <p className="about__card-info">
                            Если вам необходима срочная запись только
                            на собеседование, то мы запишем вас
                            в кратчайшие сроки на него.* <br/> <br/>
                        </p>
                        <span className="about__card-grey">
                                *мы не несем ответственность за прохождение
                                собеседования в этом случае
                            </span>
                    </div>

                    <div className="about__card">
                        <img src={imgCardSix} alt="" className="about__card-img"/>
                        <p className="about__card-title">Мы - профессионалы своего дела</p>
                        <p className="about__card-info">
                            Мы работаем 7 лет и помогли получить
                            визы 2098 клиентам! Мы несем
                            ответственность за каждую заявку
                            и стараемся сделать процесс получения
                            визы легким, быстрым и удачным</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;