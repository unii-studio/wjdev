import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Cell } from 'react-mdl';

import ContactForm from '../blocks/ContactForm';
import H2 from '../elements/H2';

Modal.setAppElement('div');

const modalStyles = {
  content: {
    top: 'calc(50% + 27.5px)',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '35%',
    minWidth: '250px',
    height: '25%',
    minHeight: '100px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '5px',
    borderRadius: '3px',
    border: 'solid',
    zIndex: '5'
  },
};

export default class Contact extends React.Component {
  state = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    subject: '',
    subjectError: '',
    message: '',
    messageError: '',

    resData: '',

    modalIsOpen: false,
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;

    if (name === '') {
      this.setState({
        nameError: 'Please provide your name',
      });
    } else {
      this.setState({
        nameError: '',
      });
    }

    if (email === '') {
      this.setState({
        emailError: 'Please provide an email address',
      });
    } else if (email === /^((?!@).)*$/ || email.indexOf('.') === -1) {
      this.setState({
        emailError: 'Please provide a valid email address',
      });
    } else {
      this.setState({
        emailError: '',
      });
    }

    if (subject === '') {
      this.setState({
        subjectError: 'Please provide a subject message',
      });
    } else {
      this.setState({
        subjectError: '',
      });
    }

    if (message === '') {
      this.setState({
        messageError: 'Please leave a message',
      });
    } else {
      this.setState({
        messageError: '',
      });
    }

    setTimeout(() => {
      const { nameError, emailError, subjectError, messageError } = this.state;

      if (
        nameError === '' &&
        emailError === '' &&
        subjectError === '' &&
        messageError === ''
      ) {
        axios
          .post(
            '/send-email',
            {
              name,
              email,
              subject,
              message,
            },
            {
              headers: {
                'content-type': 'application/json',
              },
            },
          )
          .then(response => {
            this.setState({
              resData: response.data,
            });

            this.setState({
              modalIsOpen: true,
            });

            this.setState({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          })
          .catch(function(error) {
            console.log(error.response);
          });
      } else {
        this.setState({
          resData: 'Oops! Something went wrong!',
        });
      }
    }, 10);
  };

  render() {
    const { name, email, subject, message } = this.state;
    const { nameError, emailError, subjectError, messageError } = this.state;
    const { modalIsOpen, resData } = this.state;

    return (
      <ContactForm>
        <ContactForm.Grid>
          <Cell col={6}>
            <ContactForm.Form>
              <H2>LET&apos;S CHAT</H2>
              <ContactForm.Split />
              <ContactForm.Label htmlFor="name">NAME</ContactForm.Label>
              <input
                name="name"
                value={name}
                onChange={e => this.change(e)}
                type="text"
                id="name"
                style={{
                  margin: `${nameError.length > 0 ? '0' : ''}`,
                }}
              />
              <ContactForm.Error>{nameError}</ContactForm.Error>
              <ContactForm.Label htmlFor="email">EMAIL</ContactForm.Label>
              <input
                name="email"
                value={email}
                onChange={e => this.change(e)}
                type="text"
                id="email"
                style={{
                  margin: `${emailError.length > 0 ? '0' : ''}`,
                }}
              />
              <ContactForm.Error>{emailError}</ContactForm.Error>
              <ContactForm.Label htmlFor="subject">SUBJECT</ContactForm.Label>
              <input
                name="subject"
                value={subject}
                onChange={e => this.change(e)}
                type="text"
                id="subject"
                style={{
                  margin: `${subjectError.length > 0 ? '0' : ''}`,
                }}
              />
              <ContactForm.Error>{subjectError}</ContactForm.Error>
              <ContactForm.Label htmlFor="message">MESSAGE</ContactForm.Label>
              <textarea
                name="message"
                onChange={e => this.change(e)}
                value={message}
                id="message"
                style={{
                  margin: `${messageError.length > 0 ? '0' : ''}`,
                }}
              />
              <ContactForm.Error>{messageError}</ContactForm.Error>
              <ContactForm.Button
                type="submit"
                onClick={e => this.onSubmit(e)}
              >
                Send
              </ContactForm.Button>
            </ContactForm.Form>
          </Cell>
        </ContactForm.Grid>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Email sent"
          style={modalStyles}
          closeTimeoutMS={150}
          overlayClassName="formOverlay"
        >
          <div className="modalHeader-container">
            <span className="modalHeader-container__text">
              {name || "Buddy"}, your message was sent!
            </span>
            <i
              className="fa fa-times modalHeader-container__close-icon"
              aria-hidden="true"
              onClick={this.closeModal}
              style={{float: "right", display: "inline-block", padding: "2px 5px", fontSize: "20px"}}
            />
          </div>

          <div className="modal-body">
            <p className="modal-body__text">{resData}</p>
            <p>I&apos;ll be in touch with you very soon.</p>
          </div>
        </Modal>
      </ContactForm>
    );
  }
}
