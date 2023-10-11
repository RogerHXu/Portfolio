import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import in_icon from '../assets/img/linkedin.svg';
import git_icon from '../assets/img/github.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const downloadResume = () =>{
    fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'SampleResume.pdf';
        alink.click();
      })
    })
  }

  return (
    <Router>
      <Navbar collapseOnSelect expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="navbar-logo"><img src=""  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/roger-xu-80422a173/"><img src={in_icon} alt="" /></a>
                <a target="_blank" rel="noopener" href="https://github.com/RogerHXu"><img src={git_icon} alt="" /></a>
              </div>
              <button className="resume-btn" onClick={downloadResume}>
                Resume
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}