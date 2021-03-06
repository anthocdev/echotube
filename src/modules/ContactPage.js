import React from "react";
import "../style/contact.css";
import axios from "axios";
/* Contact Page used to contact the administrator, uses nodemailer API request. */
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      emailError: "",
      nameError: "",
      messageError: "",
    };
  }

  //Validation for fields, using multiple states to store messages
  validateData = () => {
    let emailError = "";
    let nameError = "";
    let messageError = "";

    let valid = true;
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email address";
      valid = false;
    }

    if (!this.state.email) {
      emailError = "Can't be blank";
      valid = false;
    }

    if (this.state.message.length < 100) {
      messageError = "Must contain at least 100 characters.";
      valid = false;
    }

    if (!this.state.message) {
      messageError = "Can't be blank";
      valid = false;
    }

    if (!this.state.name) {
      nameError = "Can't be blank";
      valid = false;
    }

    this.setState({ emailError });
    this.setState({ messageError });
    this.setState({ nameError });

    return valid;
  };

  //Overriding submission event
  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    //Getting validation state
    const validData = this.validateData();

    if (validData) {
      let dataToSend = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };
      this.sendToServer(dataToSend);
    }
  };

  //Async operation which waits for response before alerting the user
  async sendToServer(sendData) {
    await axios({
      method: "POST",
      url: "http://localhost:3001/api/sendmail",
      data: sendData,
    }).then((response) => {
      if (response.status === 200) {
        alert("Your inquiry has been received.");
        this.clearForm();
      } else if (response.status === 500) {
        alert("Your inquiry has failed to arrive.");
      }
    });
  }

  clearForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  onChange(event) {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="contact">
        <form
          className="contactForm"
          id="contactForm"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="formItem">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={this.onChange.bind(this)}
              value={this.state.name}
            />
            <div className="errorMessage">{this.state.nameError}</div>
          </div>
          <div className="formItem">
            <label htmlFor="exampleInputEmail1">Email Address: </label> <br />
            <input
              type="email"
              name="email"
              className="formItem"
              aria-describedby="emailHelp"
              onChange={this.onChange.bind(this)}
              value={this.state.email}
            />
            <br />
            <div className="errorMessage">{this.state.emailError}</div>
          </div>
          <div className="formItem">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="6"
              name="message"
              onChange={this.onChange.bind(this)}
              value={this.state.message}
            ></textarea>
            <div className="errorMessage">{this.state.messageError}</div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginTop: "20px",
              backgroundColor: "purple",
              borderColor: "purple",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
