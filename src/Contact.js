import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const url = "http://127.0.0.1:5001/send_email";

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
            <div className="row">
              <div className="one wide middle aligned column">
                <SiLinkedin size={iconSize} />
              </div>
              <div className="middle aligned column link">
                <a href="https://www.linkedin.com/in/coltan-franke-124515177/">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="row">
              <div className="one wide middle aligned column">
                <SiGithub size={iconSize} />
              </div>
              <div className="middle aligned column link">
                <a href="https://github.com/ColtanF">GitHub</a>
              </div>
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
  const [formContent, setFormContent] = useState({});
  const [formIssues, setFormIssues] = useState({});
  const [emailSent, setEmailSent] = useState(false);

  const sendData = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContent),
    };
    try {
      return fetch(url, requestOptions).then((data) => data.json());
    } catch (error) {
      console.log(error);
    }
  };

  const validateInfo = () => {
    const issues = {};
    if (!formContent.name) issues.name = "Please enter a name.";
    if (!formContent.email) issues.email = "Please enter an email.";
    if (!formContent.subject)
      issues.subject = "Please enter a subject for your message.";
    if (!formContent.message) issues.message = "Please enter a message.";
    return issues;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formContent);
    const issues = validateInfo();
    setFormIssues(issues);
    if (Object.keys(issues).length === 0) {
      const responseData = await sendData();
      console.log(responseData);
      setEmailSent(true);
    }
  };

  return (
    <Form>
      <Form.Input
        label="Name"
        error={formIssues?.name}
        type="text"
        value={formContent.name}
        onChange={(e) =>
          setFormContent({ ...formContent, name: e.target.value })
        }
      />
      <Form.Input
        label="Subject"
        error={formIssues?.subject}
        type="text"
        value={formContent.subject}
        onChange={(e) =>
          setFormContent({ ...formContent, subject: e.target.value })
        }
      />
      <Form.Input
        label="Email"
        error={formIssues?.email}
        type="text"
        value={formContent.email}
        onChange={(e) =>
          setFormContent({ ...formContent, email: e.target.value })
        }
      />
      <Form.TextArea
        label="Message"
        error={formIssues?.message}
        type="text"
        value={formContent.message}
        onChange={(e) =>
          setFormContent({ ...formContent, message: e.target.value })
        }
      />
      {emailSent ? (
        <Button disabled>Thanks!</Button>
      ) : (
        <Button onClick={handleSubmit}>Submit</Button>
      )}
    </Form>
  );
};

export default Contact;
