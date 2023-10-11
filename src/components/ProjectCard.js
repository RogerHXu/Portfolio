import { Col } from "react-bootstrap";
export const ProjectCard = ({title, description, img, url}) => {
    return (
        <Col md="auto">
            <div className="proj-container">
                <img className="proj-img" src={img} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <a target="_blank" rel="noopener" href={url}>See Details</a>
            </div>
        </Col>
    )
}