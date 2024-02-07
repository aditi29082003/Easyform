import "../Home/Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import boyp3 from '../../assets/boyp3.png';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap"
import logoimg from "../../assets/logoimg.png";
import Mailchimp from "../../assets/Mailchimp.png";
import Canva from "../../assets/Canva.png";
import Comma from "../../assets/Comma.png";
import Cpomma from "../../assets/Cpomma.png";
import carousel from "../../assets/carousel.png";
import Boyy from "../../assets/Boyy.png";
import man from "../../assets/man.png";
import Whitelogo1 from "../../assets/Whitelogo1.png";
import call from "../../assets/call.png";
import message from "../../assets/message.png";
import location from "../../assets/location.png";
import fIcon from "../../assets/fIcon.png";
import xIcon from "../../assets/xIcon.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
function Home() {
  return (
    <>   
      <Container fluid className="home">
        <Row>
          <Col x-sm={6}>
            <img src={boyp3} alt='../' className='boyp3' style={{ padding: "20px", backgroundColor: "white"}} />
          </Col>
          <Col x-sm={6}>
            <h1 className='Embed'>How to Embed Easy Forms On Your Site (Easy)</h1>
            <button className='btn getstarted'>Get Started It's Free</button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col x-sm={6} >
            <h2 className='Lorem'>To get started,you first need to create a easy form.</h2>
            <p className='smalltext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
          </Col>
          <Col x-sm={6}>
            <img src={logoimg} alt={logoimg} className="logoimg"></img>
          </Col>
        </Row>
        <Row>
          <Col x-sm={6}>
            <img src={logoimg} alt={logoimg} className="logoimg"></img>
          </Col>
          <Col x-sm={6}>
            <h2 className="Lorem">Create an online forms as easily as creating a document</h2>
            <p className='smalltext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="home Works">
        <Row>
          <Col x-sm={6}>
            <h1 className='Arrowpart'>Works with your existing workflow</h1>
            <Link to='./' className='Arrowpart' style={{ color: "#2defab" }}>Browse 50+ Integrations</Link>
          </Col>
          <Col x-sm={6}>
            <Carousel indicators={false} interval={null}>
              <Carousel.Item >
                <img src={Canva} className="Canva" alt={Canva} />
                <img src={Mailchimp} className="Mailchimp" alt={Mailchimp} />
              </Carousel.Item>
              <Carousel.Item >
                <img src={Canva} className="Canva" alt={Canva} />
                <img src={Mailchimp} className="Mailchimp" alt={Mailchimp} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Canva} className="Canva" alt={Canva} />
                <img src={Mailchimp} className="Mailchimp" alt={Mailchimp} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col x-sm>
            <h3 className="boxes">You Can Do It All With A Form</h3>
            <p style={{ fontSize: "small", marginLeft: "180px", marginRight: "170px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of<br />type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
          </Col>
        </Row>
        <Row>
          <Col x-sm>
            <Card style={{ width: '23rem', marginLeft: '120px', padding: "15px", backgroundColor: "whitesmoke" }}>
              <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text className="boxtext">
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Easy Form</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Product Research</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Product Feedback</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col x-sm>
            <Card style={{ width: '23rem', marginLeft: '10px', padding: "15px", backgroundColor: "whitesmoke" }}>
              <Card.Body>
                <Card.Title>Creators</Card.Title>
                <Card.Text style={{ margin: "0", padding: "0" }}>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Contact Details</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Customer Feedback</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>product Recommendations</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col x-sm>
            <Card style={{ width: '23rem', marginRight: "180px", padding: "25px", backgroundColor: "whitesmoke" }}>
              <Card.Body>
                <Card.Title>Response</Card.Title>
                <Card.Text>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Request</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Response</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col x-sm>
            <Card style={{ width: '23rem', marginLeft: '120px', padding: "10px", backgroundColor: "whitesmoke" }}>
              <Card.Body>
                <Card.Title>Marketing</Card.Title>
                <Card.Text className="boxtext">
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Signups</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Branding</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Customer Feedback</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col x-sm>
            <Card style={{ width: '23rem', marginLeft: '10px', padding: "10px", backgroundColor: "whitesmoke" }}>
              <Card.Body>
                <Card.Title>General Business</Card.Title>
                <Card.Text>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Referal</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Registration</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Client Onboarding</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col x-sm={12}>
            <Card style={{ width: '23rem', marginRight: "180px", padding: "10px", backgroundColor: "whitesmoke" }}>
              <Card.Body>
                <Card.Title>Customer Success</Card.Title>
                <Card.Text>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>FAQ builder</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Net Promoter</p>
                  <p style={{ margin: 0, padding: 0 }}><i class="fa-solid fa-arrow-right"></i>Customer satisfaction</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer3">
        <Row>
          <Col className="Customers">
            <h4>Customers Love EasyForm</h4>
            <p>Lorem ipsum dolor sit amet,consectur adipiscing elit,sed do eiumpsed tempor incididunt ut labore et dolore magna aliqua</p>
            <img src={Boyy} alt="../" style={{ width: "10%" }} />
            <div className="Ipsum"><img src={Comma} alt="./" />Lorem ipsum dolor sit amet,consectur adipiscing elit,sed do eiumpsed tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation uliamco laboris nisi ut aliquip ex ea commodo consequent.<img src={Cpomma} /></div>
            <h4 style={{ color: "#00D78B", marginTop: "5px" }}>Suman Chakraborty</h4>
            <h6>Business Developer</h6>
            <img src={carousel} alt="./" style={{ width: "5%", marginLeft: "20px" }} />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col>
            <img className="manimage" src={man} alt="../" width="600px"></img>
          </Col>
          <Col>
            <>
              <div className='col WhyEasyforms' style={{ marginTop: "70px" }}>
                <h1>Why Easyform</h1>
                <h6 style={{ fontSize: '25px' }}>Because after switching to us...</h6>
                <>
                  <h1>95% </h1>
                  <p className="ninetyfive">of Customers say they have a better
                    <br></br> brand experience</p>
                </>
                <>
                  <h1>92% </h1>
                  <p className="ninetyfive">of Customers say they have a better
                    <br></br> brand experience</p>
                </>
                <>
                  <h1>85% </h1>
                  <p className="ninetyfive">of Customers say they have a better
                    <br></br> brand experience</p>
                </>
              </div>
            </>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer">
        <Row>
          <Col x-sm={3}>
            <img src={Whitelogo1} alt="./" style={{ marginLeft: "70px" }} />
            <p class='footerbox1'>Lorem Ipsum dolor sit amet,
              <br></br>consecter adipiscing elit,sed do<br></br> eiusmed tempor incididunt ut labore<br></br>et dolore magna aliqua </p>
          </Col>
          <Col x-sm={3} className="footerbox2">
            <h6 style={{ font: "medium" }}> Quick Links</h6>
            <p>Home<br></br>Product<br></br>Creator<br></br>Response<br></br>Blog<br></br>Contact</p>
          </Col>
          <Col x-sm={3} className="footerbox3">
            <h6 style={{ font: "medium" }}>Company</h6>
            <p>About<br></br>FAQs<br></br>Terms & Conditions<br></br>Privacy Policy</p>
          </Col>
          <Col x-sm={3} className="footerbox3">
            <h6 style={{ font: "medium" }}>Contact us</h6>
            <p><img src={call} alt={call} className='call' />+91 8076909119</p>
            <p><img src={message} alt={message} className='call'></img>support@easyform.com</p>
            <p><img src={location} alt={location} className='call'></img>B-70,First Floor,Sector-2,Noida,<br></br>Gautam Buddha Nagar,<br></br>U.P-201301</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer1">
        <Row>
          <Col x-sm={7}>
            <p className="Copyright"> Copyright @ 2023 EasyForm |Product of Edureify</p>
          </Col>
          <Col x-sm={3} className="groupicon">
            <img src={fIcon} alt="./"></img>
            <img src={xIcon} alt="./" className='icons'></img>
            <img src={linkedin} alt="./" className='icons'></img>
            <img src={youtube} alt="./" className='icons'></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;