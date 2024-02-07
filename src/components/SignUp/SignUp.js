import {Container,Col,Row} from "react-bootstrap";
import EasyForm from "../../assets/EasyForm.png";
import girl from "../../assets/girl.png";
import "../SignUp/SignUp.css"
import {Link} from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmpassword,setConfirmPassword]=useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
                setName(e.target.value);
                setSubmitted(false);
            };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value)
        setSubmitted(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "" || confirmpassword ==="") {
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
                <h1>{name} successfully registered!!</h1>
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
    return (
        <Container fluid className="container">
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <Row>
                <Col>
                    <img src={EasyForm} alt="./"/>
                    <div className="form">
                        <div>
                            <span className="user"><h2>Join Easyform</h2></span>
                            <p>Sign up for free</p>
                        </div>
                        <form>
                            <label className="label1">Name</label>
                            <input
                                onChange={handleName}
                                className="email"
                                value={name}
                                type="text"
                            />
                            <label className="label1">Email</label>
                           
                            <input
                                onChange={handleEmail}
                                className="email"
                                value={email}
                                type="text"
                            />
                            <label className="label1">Password</label>
                            <input
                                onChange={handlePassword}
                                className="password"
                                value={password}
                                type="password"
                            />
                            <label className="label1">ConfirmPassword</label>
                            <input
                                onChange={handleConfirmPassword}
                                className="confirmpassword"
                                value={confirmpassword}
                                type="password"
                            />
                            <button onClick={handleSubmit} className="btn" type="submit" style={{ backgroundColor: "#00D78B", margin: "10px 0px", width: "554px", color: "white" }}>
                                create account
                            </button>
                        </form>
                    </div>
                    <p style={{ color: "grey", fontSize: "medium", marginLeft: "190px" }}>Already have an account yet?
                    <Link to="./"className="terms">log in</Link></p>
                </Col>
                <Col style={{ backgroundColor: "#00D78B", height: "650px", width: "600px", marginTop:"40px"}}>
                    <div className="whiteRectangle">
                        <img src={girl} alt="./" className="frame"/>
                        <p><FontAwesomeIcon icon="fa-solid fa-envelope" /></p>
                    </div>
                </Col>                
            </Row>
        </Container>
    );
}

