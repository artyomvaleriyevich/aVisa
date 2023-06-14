import './popup.scss'
interface IPopup {
    statusPopup:boolean,
    setStatusPopup:(a: boolean) => void
}

const Popup = ({setStatusPopup,statusPopup}:IPopup) => {

    const ClickBG = (e:any ) => {
        if(e.target.className.includes('overlay')){
            setStatusPopup(!statusPopup)
        }
    }

    return (
        <div onClick={(e) => ClickBG(e)} className={'overlay'} style={{display: statusPopup ? 'flex' : 'none'}}>
            <div className="popup">
                <h3 className="popup__title">Оставьте заявку</h3>
                <p className="popup__subtitle">
                    и мы с вами свяжемся в течение 15 минут <br/>
                    и ответим на все ваши вопросы
                </p>
                <form action="#" className="popup__form">
                    <input placeholder={'Ваше имя'} type="text" className="popup__form-input"/>
                    <input placeholder={'Ваш номер телефона'} type="tel" className="popup__form-input"/>
                    <input placeholder={'Ваша почта'} type="email" className="popup__form-input"/>
                    <button className="popup__form-btn" type={"submit"}>Оставить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;