import BoxOne from '../assets/images/grid-1-1.png';
import BoxTwo from '../assets/images/grid-1-2.png';
import BoxThree from '../assets/images/grid-2-1.png';
import BoxFour from '../assets/images/grid-2-2.png';
import BoxFive from '../assets/images/grid-3-3.png';
import { Modal } from "react-bootstrap";


const LightboxModal = ({ handleClose, show, setShow,  currentSlide, setCurrentSlide }) => {

    const images = [
        BoxOne, 
        BoxTwo,
        BoxThree,
        BoxFour,
        BoxFive];

    const nextSlide = () => {
        if (currentSlide === images.length) {
            return;
        }
    };
    const prevSlide = () => {
        if (currentSlide === 1) {
            return;
        }
    };
    return (
        <Modal show={show} onHide={handleClose} id="myModal" className="modal-lightbox">
            <span className="close cursor" onclick={(handleClose)}>&times;</span>
            {/* <div className="modal-content"> */}

                <div className="mySlides">
                    <div className="numbertext">{currentSlide / images.length}</div>
                    <img src={images[currentSlide - 1]} />
                </div>

                <a className="prev" onClick={prevSlide}>&#10094;</a>
                <a className="next" onClick={nextSlide}>&#10095;</a>

                <div className="column-demo-container">
                    {
                        images.map((image, index) => {
                            return <div className="column-demo">
                                <img className="demo" key={index} src={image} onClick={() => setCurrentSlide(index+1)} alt="" />
                            </div>
                        })
                    }


                </div>

            {/* </div> */}
        </Modal>
    )
};

export default LightboxModal;