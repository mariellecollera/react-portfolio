import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const roles = ["UI/UX", "Frontend Development", "Graphic Design"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      const targetRole = roles[roleIndex];
      if (currentText.length < targetRole.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(targetRole.slice(0, currentText.length + 1));
        }, 80);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero">
      <Container>
        <Row className="align-items-start g-4">
          <Col lg={5}>
            <p className="hero-subtitle mb-0">Hello! I am </p>
            <h1 className="mt-0">
              <span className="circle-pill">Marielle</span><b>Collera</b>
            </h1>
            <p className="hero-subtitle">
              Specializing in <span className="typing-text">{currentText}</span>
            </p>
            <p className="hero-intro">
              As a 3rd year BS Computer Science student, I am passionate about
              bridging the line between tech and design.
            </p>
          </Col>

          <Col xs={11} lg={7} className="mx-auto d-flex flex-column justify-content-center align-items-center align-items-lg-end">
            <div className="hero-card-container">
              <div className="business-card">
                <section className="heading d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <p className="business-card-title circle-pill">
                      Personal
                    </p>
                    <p className="business-card-title">
                      <b>Information</b>
                    </p>
                  </div>
                  <div className="card-id text-end">
                    IDENTIFICATION CARD
                    <br />
                    NO. 20051008
                  </div>
                </section>

                <div className="card-main-content d-flex flex-row gap-2 gap-sm-3 gap-md-4">
                  <img
                    className="profile-image flex-shrink-0"
                    src="/profile_img.png"
                    alt="Photo of Marielle Collera"
                  />

                  <section className="info flex-grow-1">
                    <div className="personal-info">
                      <span className="ident">Last Name</span>
                      <span className="value">Collera</span>
                    </div>
                    <div className="personal-info">
                      <span className="ident">First Name</span>
                      <span className="value">Marielle Anne</span>
                    </div>
                    <div className="personal-info">
                      <span className="ident">Program</span>
                      <span className="value">BS Computer Science</span>
                    </div>
                    <div className="personal-info">
                      <span className="ident">Email</span>
                      <span className="value">
                        marielleannecollera@gmail.com
                      </span>
                    </div>
                    <div className="description mt-3">
                      <p className="card-text mb-1">
                        UI/UX | Frontend Development | Graphic Design
                      </p>
                    </div>
                  </section>
                </div>
              </div>

              <section className="socials d-flex justify-content-center gap-3 mt-4">
                <a
                  href="https://www.facebook.com/marielle.collera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/mariellecollera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mariellecollera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  GitHub
                </a>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
