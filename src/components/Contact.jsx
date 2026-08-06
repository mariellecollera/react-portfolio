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
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center">
          <h2 className="circle-pill">Contact Me</h2>
          <p className="section-title">[ get in touch ]</p>
        </div>

        <form
          ref={formRef}
          id="contactForm"
          className={`row g-4 mx-auto needs-validation ${validated ? "was-validated" : ""}`}
          style={{ maxWidth: "40rem" }}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
            <div className="invalid-feedback">Please enter your name.</div>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
            <div className="invalid-feedback">Please enter a valid email address.</div>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            <div className="invalid-feedback">Please enter a message.</div>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn button">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
