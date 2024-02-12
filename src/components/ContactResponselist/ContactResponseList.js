import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import { Navbar, Nav } from "react-bootstrap"
import Manas from "../../assets/Manas.png";
import envelope from "../../assets/envelope.png";
import Pagination from 'react-bootstrap/Pagination';
import "../ContactResponselist/ContactResponseList.css"

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
        <Row  className="contact3">
          <Col md={3}>
            <Row className='responseContact'>
              <h5>Contact Response</h5>
              <div className ="colresponse" style={{ border: "1px solid grey",borderRadius:"5px" }}>
              <p >Response</p>
              <p><input type="checkbox"></input>Request</p>
              <p><input type="checkbox"></input>Received</p>
              <p className='setting'>Setting</p>
              <p>logout</p>              
              </div>
            </Row>
          </Col>
          <Col x-sm={11} style={{ border: "1px solid grey", marginTop: "60px", padding: "30px",marginRight:"30px" }}>
            <Row style={{ border: "1px solid grey", marginTop: "5px"}}>
              <Col><h6>Request Contact information</h6></Col>
              <Col>Date</Col>
              <Col>Time</Col>
              <Col>View</Col>
            </Row>
            <Row style={{ border: "1px solid grey", marginTop: "10px" }}>
              <Col><b>1.Contact information </b><br />Name:Suman Saha</Col>
              <Col><br />04 Aug,2023</Col>
              <Col><br />4:15PM</Col>
              <Col>i</Col>
            </Row>
            <Row style={{ border: "1px solid grey", marginTop: "10px" }}>
              <Col><b>2.Contact information </b><br />Name:Suman Saha</Col>
              <Col><br />04 Aug,2023</Col>
              <Col><br />4:15PM</Col>
              <Col>i</Col>
            </Row>
            <Row style={{ border: "1px solid grey", marginTop: "10px" }}>
              <Col><b>3.Contact information </b><br />Name:Suman Saha</Col>
              <Col><br />04 Aug,2023</Col>
              <Col><br />4:15PM</Col>
              <Col>i</Col>
            </Row>
            <Row style={{ border: "1px solid grey", marginTop: "10px" }}>
              <Col><b>4.Contact information </b><br />Name:Suman Saha</Col>
              <Col><br />04 Aug,2023</Col>
              <Col><br />4:15PM</Col>
              <Col>i</Col>
            </Row>
            <Row style={{ border: "1px solid grey", marginTop: "10px" }}>
              <Col><b>5.Contact information </b><br />Name:Suman Saha</Col>
              <Col><br />04 Aug,2023</Col>
              <Col><br />4:15PM</Col>
              <Col>i</Col>
            </Row>
            <Row style={{ border: "1px solid grey", marginTop: "10px"}}>
              <Col><b>6.Contact information </b><br />Name:Suman Saha</Col>
              <Col><br />04 Aug,2023</Col>
              <Col><br />4:15PM</Col>
              <Col>i</Col>
            </Row>
            <Row>
              <Col x-sm={10}>Showing 1 to 260 entries</Col>
              <Col x-sm={2}className='pagination'>
                <Pagination>                 
                  <Pagination.Item active>{1}</Pagination.Item>              
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item >{65}</Pagination.Item>  
                  <button>Next</button>               
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ContactResponseList;