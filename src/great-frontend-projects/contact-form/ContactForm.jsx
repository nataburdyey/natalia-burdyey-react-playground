import submitForm from "./submitForm";

import "./styles.css";

export default function ContactForm() {
  return (
    <div className="contact-form-container">
      <h1 className="header">Contact Form</h1>
      <form
        onSubmit={submitForm}
        method="post"
        action="https://www.greatfrontend.com/api/questions/contact-form"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type here"
            required
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
