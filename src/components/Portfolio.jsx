import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import projects from "../data/projects.jsx";

function Portfolio() {
  const [activeBg, setActiveBg] = useState(null); // holds bgClass string or null
  const [openModalId, setOpenModalId] = useState(null); // holds project id or null

  const handleTitleClick = (bgClass) => {
    setActiveBg((current) => (current === bgClass ? null : bgClass));
  };

  return (
    <>
      <section id="portfolio" className={activeBg || ""}>
        <div className="container">
          <p className="section-title">[ my portfolio ]</p>
          <div className="row g-4 justify-content-center">
            {projects.map((project) => (
              <div className="col-12 col-sm-6 col-md-4" key={project.id}>
                <div className="card h-100">
                  <img
                    className="card-img-top project-card-img"
                    src={project.image}
                    alt={`${project.title} project`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5
                      className="card-title project-title"
                      onClick={() => handleTitleClick(project.bgClass)}
                    >
                      {project.title}
                    </h5>
                    <p className="card-text">{project.cardText}</p>
                    <button
                      type="button"
                      className="btn button mt-auto"
                      onClick={() => setOpenModalId(project.id)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {projects.map((project) => (
        <Modal
          key={project.id}
          show={openModalId === project.id}
          onHide={() => setOpenModalId(null)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={project.image}
              className="project-card-img img-fluid rounded mb-3"
              alt={`${project.title} detail`}
            />
            <p>
              <strong>Stack/Software:</strong> {project.stack}
            </p>
            {project.description}
            {project.groupMembers && (
              <p>
                <strong>Group Members:</strong> {project.groupMembers}
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn button"
              onClick={() => setOpenModalId(null)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
}

export default Portfolio;
