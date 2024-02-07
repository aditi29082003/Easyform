import { Row, Col, Container, Button } from "react-bootstrap";
import "../Easyform2/Easyform2.css";
import envelope from "../../assets/envelope.png";
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import "./Sendscreen.css"
const Sendscreen = () => {
  return (
    <>
      <Navbar expand="xl">
        <Container>
          <h4>Logo</h4>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Request</Nav.Link>
              <Nav.Link href="#link">Response</Nav.Link>
              <Nav.Link href="#link">Setting</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Col xs="auto">
            <Button type="submit">Login</Button>
          </Col>
          <Col xs="auto">
            <Button type="submit">SignUp</Button>
          </Col>
        </Container>
      </Navbar>
      <Container fluid className="body">
        <Row>
          <Col x-sm className='boxenv'>
            <Image src={envelope} alt="./" className="envelop" />
          </Col>
        </Row>
        <Row className="contact3">
          <Col x-sm className=" menu3">
            <ul>
              <li><b>Contact Information</b></li>
              <li><b>Choose from color:</b></li>
              <li><NavDropdown title="Green" id="basic-nav-dropdown" className="navdropdown">
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
              </li>
              <li><b>Form Border:</b></li>
              <li><NavDropdown title="Grey" id="basic-nav-dropdown" className="navdropdown">
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
              </li>
              <textarea class="textarea3" col="30" row="30" placeholder="Form description"></textarea>
            </ul>
          </Col>
        </Row>
        <Row className="namerow">
            <Col>
            <p>Name</p>
            <input type="text" className="name"></input>
            </Col>
        </Row>
        <Row className="untitled">
        <Col x-sm className=" easyform2footer menu3">
          <h5>Untitled Question</h5>
            <ul>
              <li className="list1">Add text field</li>
              <li className="list">Paragraph</li>
              <li className="list">Radio button</li>
              <li className="list">Checkbox</li>
              <li className="list">Dropdown</li>
              <li className="list">Date</li>
              <li className="list">Time</li>
                </ul>
                <input type="text" placeholder="Question"></input><br/>                
                <label htmlFor="select" className="select">Select input type: </label>
                <NavDropdown title="Grey" id="basic-nav-dropdown" className="navdropdown">
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
              <Button className="submit">save</Button>
              </Col>
             </Row>
             <Row className="untitled">
              <Col x-sm>
                <h5>Send Via</h5>
                <label >Email</label>
                <p>To</p>
              </Col>
              <input type="text" className="subject" placeholder="Enter Email Address"></input>
              <input type="text" className="subject" placeholder="Subject"></input>
              <input type="text" className="subject" placeholder="Message"></input>
              <br/>
              <div>
              <Button className="savebtn">save</Button>
              <Button  className="cancelbtn">save</Button>
              </div>
              
             </Row>
      </Container>
      
    </>
  )
}

export default Sendscreen;
