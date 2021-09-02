import React from "react";
import { Button, Form } from "semantic-ui-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  const iconSize = 30;
  return (
    <section className="ui segment vertical container">
      <h2>Contact me</h2>
      <div className="ui stackable grid">
        <div className="eight wide column">
          <p>
            Get in touch here, or send me an email at coltan.franke@gmail.com.
          </p>
          <div className="ui relaxed stackable grid">
            <div className="one wide middle aligned column">
              <SiLinkedin size={iconSize} />
            </div>
            <div className="fourteen wide middle aligned column link">
              <a href="https://www.linkedin.com/in/coltan-franke-124515177/">
                LinkedIn
              </a>
            </div>
            <div className="one wide middle aligned column">
              <SiGithub size={iconSize} />
            </div>
            <div className="eight wide middle aligned column link">
              <a href="https://github.com/ColtanF">GitHub</a>
            </div>
          </div>
        </div>
        <div className="eight wide column">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  const [formContent, setFormContent] = React.useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formContent);
  };
  return (
    <Form>
      <Form.Input
        label="Name"
        type="text"
        value={formContent.name}
        onChange={(e) =>
          setFormContent({ ...formContent, name: e.target.value })
        }
      />
      <Form.Input
        label="Subject"
        type="text"
        value={formContent.subject}
        onChange={(e) =>
          setFormContent({ ...formContent, subject: e.target.value })
        }
      />
      <Form.Input
        label="Email"
        type="text"
        value={formContent.email}
        onChange={(e) =>
          setFormContent({ ...formContent, email: e.target.value })
        }
      />
      <Form.TextArea
        label="Message"
        type="text"
        value={formContent.message}
        onChange={(e) =>
          setFormContent({ ...formContent, message: e.target.value })
        }
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default Contact;
