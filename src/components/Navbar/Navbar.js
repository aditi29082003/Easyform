import EasyForm from "../../assets/EasyForm.png"
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import SignIn from "../SignIn/SignIn.js";
import SignUp from "../SignUp/SignUp.js";
import Home from "../Home/Home.js"
import { useRoutes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HomeNavbar() {
    let routeElements = useRoutes([
        {
            path: "/",
            children: [
                {
                    index: true,
                    path:'/',
                    element:<Home/>
                },
            
                {
                    path: 'signin',
                    element: <SignIn />
                },
                {
                    path: "signup",
                    element: <SignUp />
                }
            ]
        }
     ])
    return (
        <>           
            <Navbar expand="xl" className="bg-body">
                <Container>
                <img src={EasyForm} alt='./' className="Easyform" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navtoggle nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mynav">                           
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Templates" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Integrations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Resources" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">pricing</Nav.Link>
                            <NavDropdown title="Support" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <button  className="btn login"><Link to={"/SignIn"} style={{textDecoration:"none",color:"black"}}>Login</Link></button>
                    <button  className="btn "><Link to={"/SignUp"} style={{textDecoration:"none",color:"black"}}>SignUp</Link></button>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {routeElements}
        </>
    )
}
export default HomeNavbar;
