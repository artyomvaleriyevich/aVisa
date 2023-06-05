import './visaSection.scss'
import Header from "../../../Header/Header";

const VisaSection = () => {
    return (
        <div className={'visaSection'}>
            <div className="container">
                <Header/>
                <p className="visaSection__title">
                    Оставьте заявку, чтобы начать оформление <br/>
                    визы в США <span className="visaSection__title-bold">уже сегодня</span>
                </p>

                <button className="visaSection__btn" type={'button'}>ХОЧУ ВИЗУ В США</button>

                <div className="visaSection__row">

                    <div className="visaSection__card">
                        <p className="visaSection__card-title">Оформляем любой тип виз: <span className="visaSection__card-title-blue"> от туристических (B1/B2 до групповых)</span></p>
                    </div>

                    <div className="visaSection__card">
                        <p className="visaSection__card-title">Запись на собеседование в течение <span className="visaSection__card-title-blue">1-2-х недель</span></p>
                    </div>

                    <div className="visaSection__card">
                        <p className="visaSection__card-title">Уже более <span className="visaSection__card-title-blue">2000 человек</span> получили визу с нами</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaSection;