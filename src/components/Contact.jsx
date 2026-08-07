import { useState, useRef } from "react";

function Contact() {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    const form = formRef.current;
    e.preventDefault();

    if (!form.checkValidity()) {
      setValidated(true);
      form.reportValidity();
      return;
    }

    const name = form.elements["name"].value.trim();

    alert(`Thank you for getting in touch, ${name}! I'll get back to you soon.`);

    form.reset();
    setValidated(false);
  };

  return (
    <section id="contact" className="py-4">
      <div className="container">
          <p className="section-title italic-text">[ contact me ]</p>
        <form
          ref={formRef}
          id="contactForm"
          className={`row g-4 mx-auto needs-validation ${validated ? "was-validated" : ""}`}
          style={{ maxWidth: "40rem" }}
          noValidate
          onSubmit={handleSubmit}
        >

          <div className="folder-lg me-2">
            <h2 className="contact-pill">Get In Touch</h2>
            <div className="col-12 col-md-8 mb-2">
              <label htmlFor="name" className="form-label">Name<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="name" name="name" required />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>
            <div className="col-12 col-md-8 mb-2">
              <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
              <input type="email" className="form-control" id="email" name="email" required />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="message" className="form-label">Message<span className="text-danger">*</span></label>
              <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
              <div className="invalid-feedback">Please enter a message.</div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn button mt-2">Send Message</button>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;
