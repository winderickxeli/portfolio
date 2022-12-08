import styles from '../styles.module.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [from_name, setName] = useState<string>("");
  const [reply_to, setReply_to] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [buttonState, setButtonState] = useState<boolean>(true);
  const confirmationText: string = "Your message has been sent...";

  const form: React.MutableRefObject<any> = useRef();

  const checkButton = () => {
    if(from_name != "" && reply_to != "" && message != "")
      setButtonState(false);
  }

  const from_nameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
    checkButton();
  }

  const reply_ToChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setReply_to(e.target.value);
    checkButton();
  }

  const messageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMessage(e.target.value);
    checkButton();
  }

  const buttonClicked: React.MouseEventHandler<HTMLInputElement> = () => {

  }

  const sendEmail:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwulxkm', 'template_j253hn9', form.current, 'vGFUIhNZVdftPsY03')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <main className={styles.Content}>
        <h1>Contact</h1>
        <form>
          <label>Name</label>
          <input type="text" name="from_name" id="from_name"/>
          <label>Email</label>
          <input type="email" name="reply_to" id="reply_to"/>
          <label>Message</label>
          <textarea name="message" id="message" />
          <input type="submit" disabled={buttonState} onClick={buttonClicked} value="Send" />
        </form>
      </main>
    )
  }

  export default Contact;