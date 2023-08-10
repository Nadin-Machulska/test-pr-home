import pictureOne from '../assets/images/lightbox1.png';
import pictureTwo from '../assets/images/lightbox2.png';
import pictureThree from '../assets/images/lightbox3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Image } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="grey">
                <div className="images-container">
                    <Image className='img-resp' src={pictureOne} alt="" />
                    <Image className='img-resp' id="second" src={pictureTwo} alt="" />
                    <Image className='img-resp' src={pictureThree} alt="" />
                </div>
                <div className="title">
                    <h2>О компании</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button className="show-more white-sec">читать <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>

    )
};

export default AboutUs;