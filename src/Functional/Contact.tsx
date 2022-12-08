import styles from '../styles.module.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [from_name, setName] = useState<string>("");
  const [reply_to, setReply_to] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [buttonState, setButtonState] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const confirmationText: string = "Your message has been sent...";

  const form: React.MutableRefObject<any> = useRef();

  const checkButton = () => {
    if(from_name !== "" && reply_to !== "" && message !== "")
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

  const messageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
    checkButton();
  }

  const buttonClicked: React.MouseEventHandler<HTMLInputElement> = () => {
    var templateParams = {
      from_name: from_name,
      reply_to: reply_to,
      message: message
    };
      emailjs.send('service_qwulxkm','template_j253hn9', templateParams,"vGFUIhNZVdftPsY03")
    .then(function(response) {
      setName(name => "");
      setReply_to(replyTo => "");
      setMessage(message => "");
    }, function(err) {
      
    });


  }

    return (
      <main className={styles.Content}>
        <h1>Contact</h1>
          <label>Name</label>
          <input type="text" name="from_name" id="from_name" onChange={from_nameChange}/>
          <label>Email</label>
          <input type="email" name="reply_to" id="reply_to" onChange={reply_ToChange}/>
          <label>Message</label>
          <textarea name="message" id="message" onChange={messageChange}/>
          <input type="submit" disabled={buttonState} onClick={buttonClicked} value="Send" />
          {showMessage ? <p>{confirmationText}</p> : ""}
      </main>
    )
  }

  export default Contact;