import { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Message Sent Successfully!");

    // Reset Form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="ftco-section contact-section bg-light">
        <div className="container">

          {/* Contact Info */}
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100"></div>

            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721
                  New York NY 10016
                </p>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel:+1235235598">
                    +1 235 2355 98
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@yoursite.com">
                    info@yoursite.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website:</span>{" "}
                  <a href="https://yoursite.com">
                    yoursite.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form + Map */}
          <div className="row block-9">

            {/* Contact Form */}
            <div className="col-md-6 order-md-last d-flex">

              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 contact-form"
              >

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary py-3 px-5"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>

            {/* Map Section */}
            <div className="col-md-6 d-flex">
              <div
                id="map"
                className="bg-white w-100"
                style={{ minHeight: "400px" }}
              >
                {/* Add Google Map Here Later */}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;