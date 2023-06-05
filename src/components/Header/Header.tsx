import './header.scss'



const Header = () => {
    return (
        <header className={'header'}>
            <div className="container">
                <div className="header__row">
                    <nav className="header__nav">
                        <a href="#" className="header__link">Стоимость</a>
                        <a href="#" className="header__link">Преимущества</a>
                        <a href="#" className="header__link">Консультация</a>
                    </nav>
                    <a href="tel:+9999999999" className="header__link">+telephone</a>
                    <a href="mailto:artyom.valeriyevich@gmail.com">test@mail.com</a>
                </div>
            </div>
        </header>
    );
};

export default Header;