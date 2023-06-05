import './Footer.scss'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="container">
                <div className="footer__row">
                    <button className={'footer__btn'} type={'button'}>Политика конфиденциальности</button>
                    <div className="footer__social">
                        <a target={"_blank"} href="https://www.instagram.com/a_visa_travel/" className={'footer__social-item'}><AiFillInstagram/></a>
                        <a target={"_blank"} href="https://api.whatsapp.com/send/?phone=996706228911" className={'footer__social-item'}><RiWhatsappFill/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;