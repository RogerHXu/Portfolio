import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import temp from '../assets/img/logo_placeholder.svg';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {

    const [bio, setBio] = useState('')
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/RogerHXu')
            .then(res => res.json())
            .then(data => { setData(data) })
    }, []);

    const setData = ({avatar_url, bio}) => {
        setBio(bio)
        setAvatar(avatar_url)
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__swing" : ""}>
                                    <img className="avatar" src={avatar} alt="My Profile"/>
                                    <h1>{'Hi, I am Roger'}</h1>
                                    <p>{bio}</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}