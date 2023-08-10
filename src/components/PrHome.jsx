import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import homeImg from '../assets/images/home-1.png'
const PrHome = () => {
    return (
        <div className="container-pr-h">
            <div className="pr-home-carousel-controls">
                <h1 >
                    <span id="grey">Project</span>
                    Home
                </h1>
                <div className="btns">
                    <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="parts">
                </div>
            </div>
            <div className="pr-home-carousel">
                <Image src={homeImg} alt="" fluid />
                <button className="show-more white">взглянуть <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    )
};

export default PrHome;