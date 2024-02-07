import "../Easyform1/Easyform1.css";
import { Row, Col, Container } from "react-bootstrap"
import Easyform from "../../assets/EasyForm.png";
import Request from "../../assets/request.png";
import response from "../../assets/response.png";
import Manas from "../../assets/Manas.png";
import envelope from "../../assets/envelope.png";
import leftRightArrow from "../../assets/leftRightArrow.png";
import createnew from "../../assets/createnew.png";
import contactinformation from "../../assets/contactinformation.png";
import travelinformation from "../../assets/travelinformation.png";
import eventbookinform from "../../assets/eventbookinform.png";
import {Card,Button} from "react-bootstrap";
const Forms = () => {
    return (
        <>
            <Container fluid className="header">
                <Row>
                    <Col x-sm={7}>
                        <img src={Easyform} alt="./" style={{marginLeft:"70px"}}></img>
                    </Col>
                    <Col x-sm={5} className="Req">
                        <img src={Request} className="Request" alt="./"></img>
                        <img src={response} className="response" alt="./"></img>
                        <img src={Manas} className="Manas" alt="./"></img>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="part1">
                <Row>
                    <Col x-sm className="envelopcol">
                        <img src={envelope} alt="./" className="envelop"></img>
                    </Col>
                </Row>                
                <Row className="part2">                   
                        <h5 style={{ borderBottom: "1px solid grey",padding:"10px"}}>Create a new form</h5>                 
                  <Col>
                        <Card style={{ width: '15rem', height:"15rem",marginTop:"30px" }}>
                            <Card.Img src={createnew} className="createnew" alt='./'/>                           
                        </Card>
                        <h5 className="text">Create new</h5>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem', height:"15rem",marginTop:"30px",background:"whitesmoke" }}>
                            <Card.Img src={contactinformation} className="image" alt="./" />
                            <h5 className="text">Contact Information</h5>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem', height:"15rem",marginTop:"30px" ,background:"#ADFFBA"}}>
                            <Card.Img src={travelinformation} className="image" alt="./"/>                         
                               </Card>
                               <h5 className="text">Travel Booking Form</h5>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' , height:"15rem",marginTop:"30px",background:"#FFD3BC"}}>
                            <Card.Img src={travelinformation} className="image1" alt="./" />
                            <h5 className="text">Event Booking Form</h5>
                        </Card>
                    </Col>
                    <h5 class="recent">Recent Forms</h5>
                    <Col >
                    <Card style={{ width: '15rem', height:"15rem",marginTop:"30px",background:"whitesmoke" }}>
                            <Card.Img src={contactinformation} className="image" alt="./" />
                            <h5 className="text">Contact Information</h5>
                        </Card>
                    </Col>
                    <Col className="travel">
                    <Card style={{ width: '15rem', height:"15rem",marginTop:"30px" ,background:"#ADFFBA"}}>
                            <Card.Img src={travelinformation} className="image" alt="./"/>                         
                               </Card>
                               <h5 className="text">Travel Booking Form</h5>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
export default Forms;