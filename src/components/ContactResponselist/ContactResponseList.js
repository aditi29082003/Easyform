import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import {Navbar,Nav }from "react-bootstrap"
import Manas from "../../assets/Manas.png";
import envelope from "../../assets/envelope.png"
function ContactResponseList() {
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
          <Image src={Manas} alt="./"></Image>
    </Container>
    </Navbar>
    <Container fluid className="body">
    <Row>
      <Col x-sm className='boxenv'>
        <Image src={envelope} alt="./" className="envelop" />
      </Col>
    </Row>
    <Row className="contact3">
      {/* <h5>Contact Response</h5> */}
      <Col md={3}>      
        <Row style={{border:"1px solid grey"}}>
          <h5>Contact Response</h5>
          <p>Request</p>
          <p><input type="checkbox"></input>Request</p>
          <p><input type="checkbox"></input>Request</p>
        </Row>
        </Col>
        <Col x-sm={11}style={{border:"1px solid grey",marginTop:"20px",padding:"20px"}}>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col><h6>Request Contact information</h6></Col>
            <Col>jkljkljkljkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col>jkljkljkljkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col>jkljkljkljkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col>jkljkljkljkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col>jkljkljkljkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
          <Row style={{border:"1px solid grey",marginTop:"10px"}}>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
            <Col>jkl</Col>
          </Row>
        </Col>
        </Row>
        </Container>
        </>
  );
}
export default ContactResponseList;