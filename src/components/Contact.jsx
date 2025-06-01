import { myInfo } from "../utils/MyInfo";

function Contact() {
  return (
    <section id="contact" className="container py-5 text-center">
      <h2 className="mb-4">Let’s Connect</h2>
      <p className="lead mb-4">
        Want to collaborate, commission a design, or ask a question? I’d love to
        hear from you.
      </p>
      <div className="row pt-4 g-4 justify-content-center">
        {/* Contact Info Section */}
        <aside className="col-12 col-lg-4 order-2 order-lg-1 justify-self-center">
          <div className="contact-info p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center">
            <div>
              <h5 className="text-accent mb-4">Contact Info</h5>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <a
                  href={`mailto:${myInfo.email}`}
                  className="text-accent fs-4 me-3"
                >
                  <i className="far fa-envelope"></i>
                </a>
                <a href={`mailto:${myInfo.email}`}>
                  <div>{myInfo.email}</div>
                </a>
              </div>
            </div>

            <div
              className="rounded-4 overflow-hidden mt-4"
              style={{ height: "100%" }}
            >
              <iframe
                title="locationMap"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=gl17&t=&z=7&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </aside>

        {/* Contact Form Section */}
        {/* <section className="col-12 col-lg-8 order-1 order-lg-2">
        <div className="bg-slate-100 text-slate-900 p-4 rounded-4 shadow-sm">
          <h2 className="mb-4 text-accent">Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your full name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputEmail1" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label fw-semibold">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="e.g. Project Inquiry"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-accent px-4">
              Submit
            </button>
          </form>
        </div>
      </section> */}
      </div>
    </section>
  );
}

export default Contact;
