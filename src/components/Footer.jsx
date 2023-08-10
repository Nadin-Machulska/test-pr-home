import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot, faEnvelope, faPhone, faPinterest, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/images/logo-white.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-nav">
                    <div className="info">
                        <span>Информация</span>
                        <ul>
                            <li>Главная</li>
                            <li>Галерея</li>
                            <li>Проекты</li>
                            <li>Сертификаты</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <span>Контакты</span>
                        <ul>

                            <li>
                                <span><FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <p>100000, Республика Казахстан,<br />
                                    г. Караганда, ул. Телевизионная 10</p>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPhone} /> </span>
                                <p>+38 (000) 000 00 00</p>

                            </li>

                            <li>
                                <span> <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <p>mail@gmail.com</p>

                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <span>Социальные сети</span>
                        <ul>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebook} />                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faTwitter} />                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faLinkedin} />                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faPinterest} />                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rights">
                © 2019 Digital Project. Все права защищены.
            </div>
        </footer>
    )
};

export default Footer;