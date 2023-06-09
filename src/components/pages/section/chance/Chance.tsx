import './chance.scss'
import imgCardOne from '../../../../assets/chance/imgOne.png'
import imgCardTwo from '../../../../assets/chance/imgTwo.png'
import imgCardThree from '../../../../assets/chance/imgThree.png'
import imgCardFour from '../../../../assets/chance/imgFour.png'
import imgHuman from '../../../../assets/chance/human.png'


const Chance = () => {
    return (
        <section className={'chance'}>
            <div className="container">

                <h3 className="chance__title">Какой шанс получить <br/>
                                              визу самостоятельно?</h3>

                <div className="chance__row">

                    <div className="chance__card">
                        <img src={imgCardOne} alt="" className="chance__card-img"/>
                        <h3 className="chance__card-info">
                            людей заполняют  <br/>
                            анкету неправильно
                        </h3>
                    </div>

                    <div className="chance__card">
                        <img src={imgCardTwo} alt="" className="chance__card-img"/>
                        <h3 className="chance__card-info">
                            не могут записаться на собеседование
                            самостоятельно из-за того, что места
                            разбирают за секунды
                        </h3>
                    </div>

                    <div className="chance__card">
                        <img src={imgCardThree} alt="" className="chance__card-img"/>
                        <h3 className="chance__card-info">
                            допускают фатальные ошибки на
                            собеседовании с консулом, что
                            приводит к отказу
                        </h3>
                    </div>

                    <div className="chance__card">
                        <img src={imgCardFour} alt="" className="chance__card-img"/>
                        <h3 className="chance__card-info">
                            людей из-за невозможности записи
                            сгорает оплаченный консульский сбор,
                            который потом нужно снова оплачивать
                        </h3>
                    </div>

                </div>

                <div className="chance__block">
                    <div className="chance__block-left">
                        <img src={imgHuman} alt="" className="chance__block-img"/>
                    </div>

                    <div className="chance__block-red">
                        <h3 className="chance__block-title">
                            ВАЖНО!
                        </h3>

                        <p className="chance__block-info">
                            Если вы при оформлении визы допустили хотя <br/>
                            бы
                            <span className="chance__block-info-bold"> одну ошибку </span>
                            в анкете, то шанс получить <br/>
                            визу США
                            <span className="chance__block-info-bold"> будет равен 0 </span>
                        </p>
                    </div>
                </div>

            </div>
            </section>
    );
};

export default Chance;