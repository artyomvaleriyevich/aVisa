import './buyVisa.scss'


interface IBuyVisa {
    statusPopup:boolean,
    setStatusPopup:(a: boolean) => void
}


const BuyVisa = ({setStatusPopup,statusPopup}:IBuyVisa) => {
    return (
        <section id={'buyVisa'} className={'buyVisa'}>
            <div className="container">
                <h2 className="buyVisa__title">
                    Сколько стоит получить <br/>
                    визу в США?
                </h2>
                <div className="buyVisa__row">

                    <div className="buyVisa__card">
                        <img src="" alt="" className="buyVisa__card-img"/>
                        <h2 className="buyVisa__card-title">
                            Базовый
                        </h2>
                        <ul className="buyVisa__card-list">
                            <li className="buyVisa__card-item">• Гарантированная запись <br/> на собеседование</li>
                            <li className="buyVisa__card-item">• 1 бесплатная консультация</li>
                            <li className="buyVisa__card-item">• Определение пакета документов</li>
                        </ul>

                        <p className="buyVisa__card-price">Стоимость: 20 000 ₽*</p>

                        <button onClick={()=> setStatusPopup(!statusPopup)} className="buyVisa__card-btn">Заказать</button>
                    </div>

                    <div className="buyVisa__card">
                        <img src="" alt="" className="buyVisa__card-img"/>
                        <h2 className="buyVisa__card-title">
                            Базовый
                        </h2>
                        <ul className="buyVisa__card-list">
                            <li className="buyVisa__card-item">• Гарантированная запись <br/> на собеседование</li>
                            <li className="buyVisa__card-item">• 1 бесплатная консультация</li>
                            <li className="buyVisa__card-item">• Определение пакета документов</li>
                        </ul>

                        <p className="buyVisa__card-price">Стоимость: 20 000 ₽*</p>

                        <button onClick={()=> setStatusPopup(!statusPopup)} className="buyVisa__card-btn">Заказать</button>
                    </div>

                    <div className="buyVisa__card">
                        <img src="" alt="" className="buyVisa__card-img"/>
                        <h2 className="buyVisa__card-title">
                            Базовый
                        </h2>
                        <ul className="buyVisa__card-list">
                            <li className="buyVisa__card-item">• Гарантированная запись <br/> на собеседование</li>
                            <li className="buyVisa__card-item">• 1 бесплатная консультация</li>
                            <li className="buyVisa__card-item">• Определение пакета документов</li>
                        </ul>

                        <p className="buyVisa__card-price">Стоимость: 20 000 ₽*</p>

                        <button onClick={()=> setStatusPopup(!statusPopup)} className="buyVisa__card-btn">Заказать</button>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default BuyVisa;