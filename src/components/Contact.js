import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () =>{
    const formInititalDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInititalDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails, [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers:{
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInititalDetails);
        console.log(result.code)
        if(result.code == 200) {
            setStatus({success: true, message: 'Message sent successfully'});
        }
        else {
            setStatus({success: false, message: 'Message failed to send'})
        }
    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center"> 
                    <Col md={12}>
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) =>onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) =>onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) =>onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row='100' value={formDetails.message} placeholder="Enter your message here..." onChange={(e) =>onFormUpdate('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success===false ? "failed" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}