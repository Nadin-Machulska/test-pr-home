import { Nav } from "react-bootstrap";
import logo from '../assets/images/logo2.svg';
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
    return (
        <header>

            <Navbar expand="lg" >
                <Container className="nav">
                    <Navbar.Brand className="logo" href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-list"
                            activeKey="/home"

                        >
                            <Nav.Item >
                                <Nav.Link className='nav-item' href="/home">Главная</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link className='nav-item' eventKey="link-1">
                                    галерея
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link className='nav-item' eventKey="link-2">
                                    проекты
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link className='nav-item' eventKey="disabled" disabled>
                                    сертификаты
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link className='nav-item' eventKey="disabled" disabled>
                                    контакты
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
};

export default Header;