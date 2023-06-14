import './consultation.scss'

interface IConsultation  {
    statusPopup:boolean,
    setStatusPopup:(a: boolean) => void
}

const Consultation = ({setStatusPopup,statusPopup}:IConsultation) => {
    return (
        <section id={'consultation'}  className={'consultation'}>
            <div className="container">
                <div className="consultation__row">

                    <div className="consultation__card">
                        <p className="consultation__card-title">
                            Оставьте заявку и получите
                            <span className="consultation__card-title-blue"> бесплатную личную консультацию </span>
                            от основателя компании "Visa to USA"
                        </p>
                        <button onClick={()=> setStatusPopup(!statusPopup)} className="consultation__card-btn" type={"button"}>Получить Консультацию</button>
                    </div>

                    <div className="consultation__image">
                        <img src="" alt="" className="consultation__image-png"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultation;