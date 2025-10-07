import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-classic">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact Me</h2>
          <p>
            I'd love to hear from you! Whether you have a question, want to
            collaborate, or just say hello — feel free to reach out.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> margaret@example.com</p>
            <p><strong>Phone:</strong> +233 555 123 456</p>
            <p><strong>Location:</strong> Accra, Ghana</p>
          </div>
        </div>

        <form className="contact-form-classic">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-classic">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
