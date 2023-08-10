import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactUsImg from '../assets/images/contact-us.png'
const ContactUs = () => {
    return (
        <div>
            <div className="contact-us-container">
                <h1>Связаться с нами</h1>
                <div className="form-container">
                    <div className="form-actions">
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="Номер телефона" />
                        <input type="email" placeholder="E-mail" />
                        <input type="text" placeholder="Интересующий товар/услуга" />
                        <input id="mail-input" type="text" placeholder="Сообщение" />
                    </div>
                    <div className="form-img">
                        <img src={ContactUsImg} alt="" />
                    </div>
                </div>
                <p>
                    Отправляя заявку Вы соглашаетесь
                    с политикой<br />
                    конфиденциальности
                </p>
                <button className="grey-btn left hover-filled-slide-down">
                    <span>отправить<FontAwesomeIcon icon={faArrowRight}/></span> </button>

            </div>
        </div>
    )
};

export default ContactUs;