import './header.scss'



const Header = () => {
    return (
        <header className={'header'}>
            <div className="container">
                <div className="header__row">
                    <nav className="header__nav">
                        <a href="#" className="header__link">Стоимость</a>
                        <a href="#getVisa" className="header__link">Преимущества</a>
                        <a href="#" className="header__link">Консультация</a>
                    </nav>
                    <div className="header__info">
                        <a target={"_blank"} href="https://api.whatsapp.com/send/?phone=996706228911" className="header__info-tel">+996 (706) 22-89-11</a>
                        <a href="mailto:test@mail.com" className={'header__info-email'}>test@mail.com</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;