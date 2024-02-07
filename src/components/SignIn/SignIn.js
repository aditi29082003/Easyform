import { Container,Row,Col } from "react-bootstrap";
import "../SignIn/SignIn.css";
import {useRoutes}from "react-router-dom";
import {Link} from"react-router-dom"
import EasyForm from "../../assets/EasyForm.png"
import { useState } from "react";
import Frame from "../../assets/Frame.png";
export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User successfully registered!!</h1>
            </div>
        );
    };
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return(
        <Container fluid className="container header">
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <Row>
                <Col>
                    <img src={EasyForm} alt={EasyForm}/>
                    <div className="form p-5">
                        <>
                            <span className="user"><h2>Welcome</h2></span>
                            <p>Log in to your Easyform</p>
                        </>
                        <form>
                            <label className="label">Email</label>
                            <>
                            <input
                                onChange={handleEmail}
                                className="email"
                                value={email}
                                type="text"                             
                            />
                            
                            </>
                            <label className="label">Password</label>
                            <input
                                onChange={handlePassword}
                                className="password"
                                value={password}
                                type="password"
                            />
                            <button onClick={handleSubmit} className="btn" type="submit" style={{ backgroundColor: "#00d78b", margin: "20px 0px ", width: "550px", color: "white" }}>
                                login
                            </button>
                        </form>
                        <Link to="./" className="forgot">Forgot Password?</Link>
                    </div>
                    <input type="checkbox" className="checkbox"></input>
                    <span className="conditions">i understand and agree with the</span>
                    <Link to="./blank" className="terms">Terms & conditions</Link>and
                    <Link to="./blank" className="terms">Privacy Policy</Link>
                    <p style={{ color: "grey", fontSize: "medium", marginLeft: "120px" }}>Doesn't have an account yet?
                    <Link  to={"./SignUp"} className="terms">Sign Up</Link></p>
                </Col>
                <Col className="greenrectangle" style={{ backgroundColor: "#00D78B", height: "650px", width: "600px" }}>
                    <div className="whiteRectangle">
                        <img src={Frame} alt={Frame} className="frame"/>
                    </div>
                </Col>
                
                </Row>
                </Container>
    );
}
