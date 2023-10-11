import { Container, Row, Col } from "react-bootstrap";
import in_icon from '../assets/img/linkedin.svg';
import git_icon from '../assets/img/github.svg';
import logo from '../assets/img/logo_placeholder.svg';


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-right">
                    <Col sm={6}>
                        <img src=""/>
                    </Col>
                    <Col sm={6} className="text-right text-sm-end">
                        <div className="right_end">
                        <p>Copyright 2023. All Rights Reserved</p>
                        <div className="social-icon">
                            <a href=""><img src = {in_icon}/></a>
                            <a href=""><img src = {git_icon}/></a>                          
                        </div>        
                        </div>               
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}