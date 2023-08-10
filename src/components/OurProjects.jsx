import LightboxModal from "./LightboxModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BoxOne from '../assets/images/grid-1-1.png';
import BoxTwo from '../assets/images/grid-1-2.png';
import BoxThree from '../assets/images/grid-2-1.png';
import BoxFour from '../assets/images/grid-2-2.png';
import BoxFive from '../assets/images/grid-3-3.png';
import { useState } from "react";
import { Container } from "react-bootstrap";

const OurProjects = () => {
    const [show, setShow] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1)
    const handleButtonClick = (n) => {
        setShow(true);
        setCurrentSlide(n)
    }

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    // function showSlides(n) {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     let dots = document.getElementsByClassName("demo");
    //     let captionText = document.getElementById("caption");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
    //     captionText.innerHTML = dots[slideIndex - 1].alt;
    // }

    return (
        <>
            <Container fluid className="our-project-container">
                <h1>Наши проекты</h1>
                <div className="projects-container">
                    <div className="project-row">
                        <div className="project-column">
                            <img onClick={() => handleButtonClick(1)} className="hover-shadow" src={BoxOne} alt="" />
                        </div>
                        <div className="project-column">
                            <img onClick={() => handleButtonClick(2)} className="hover-shadow" src={BoxTwo} alt="" />
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-column">
                            <img onClick={() => handleButtonClick(3)} className="hover-shadow" src={BoxThree} alt="" />
                        </div>
                        <div className="project-column">
                            <img onClick={() => handleButtonClick(4)} className="hover-shadow" src={BoxFour} alt="" />
                        </div>
                        <div className="project-column">
                            <img onClick={() => handleButtonClick(5)} className="hover-shadow" src={BoxFive} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-btn-container">
                    <button className="show-more grey-btn right hover-filled-slide-down">
                        <span>Все проекты <FontAwesomeIcon icon={faArrowRight} /></span>
                    </button>
                </div>
            </Container>
            <LightboxModal handleClose={handleClose} show={show} setShow={setShow} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
        </>
    )
};

export default OurProjects;