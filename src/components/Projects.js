import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import SSN from '../assets/img/0.0.0.0.html.jpg';
import Not_Twitter from '../assets/img/t1a1_api.png'
import club_img from '../assets/img/clubs.png'

export const Projects = () => {
    const projects = [
        {
            title: "SRCNN Image Enhancement",
            description: `Trained a machine learning model that uses super resolution convolutional neural network to increase
            the quality of images on GCP. Deployed as a Flask app, wrangled and processed image data with
            machine learning tools such as Torchvision and OpenCV.`,
            img: SSN,
            url: "https://github.com/RogerHXu/Capstone",
        },
        {
            title: "Club House App",
            description: `A club finding web application that allows users to search, find, contact, keep track of, and
            joining student hosted clubs within UCSD`,
            img: club_img,
            url: "https://github.com/JamesMcDougallJr/CSE110"
        },
        {
            title: "Social Media API",
            description: `Created a Twitter-like social media app backend API with Java Spring and Hibernate.
            It allows users to make tweets, retweet, and like/repost other tweets, stored these information inside a PostgresQL database.
            Implemented functionalities such as creating a user account, deleting it, and all other CRUD operations associated with the account.
            Parsed tweets so users can create hashtags and mention other users
            `,
            img: Not_Twitter,
            url: "https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-8-2023-assessment-1-team-1",
        },
    ]

    const pjs = projects.map((project, index) => {
        return (
            <ProjectCard key={index}{...project} />
        )
    })

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="project-tabs-example" defaultActiveKey="first">
                            <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">{pjs[0]}</Tab.Pane>
                                <Tab.Pane eventKey="second">{pjs[1]}</Tab.Pane>
                                <Tab.Pane eventKey="third">{pjs[2]}</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}