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

  const buttonClicked: React.MouseEventHandler<HTMLInputElement> = async () => {
    var templateParams = {
      from_name: from_name,
      reply_to: reply_to,
      message: message
    };
    await emailjs.send('service_qwulxkm','template_l4jqz77', templateParams,"vGFUIhNZVdftPsY03")
    setName(name => "");
    setReply_to(replyTo => "");
    setMessage(message => "");
  }

    return (
      <main className={styles.Content} style={{display:"flex"}}>
        <article className={styles.AsideLeft}>
          <h2>Contact</h2>
          <p>Contact me with the form below or find me on other channels:</p>
          <ul>
            <li><a href='https://winderickx.me'> Linktree</a></li>
            <li><a href='https://github.com/winderickxeli'> Github</a></li>
            <li><a href='https://www.linkedin.com/in/eli-winderickx-507944223'> LinkedIn</a></li>
            <li><a href='https://twitter.com/WinderickxEli'> Twitter</a></li>

          </ul>
        </article>
        <article className={styles.AsideRight}>
        <form className='ContactPage' title='Contact'>
          <label>Name</label>
          <input type="text" name="from_name" id="from_name" onChange={from_nameChange} placeholder="Your name"/>
          <label>Email</label>
          <input type="email" name="reply_to" id="reply_to" onChange={reply_ToChange} placeholder="Your email address"/>
          <label>Message</label>
          <textarea name="message" id="message" onChange={messageChange} rows={5} placeholder="Your message"/>
          <input type="button" disabled={buttonState} onClick={buttonClicked} value="Send"/>
          {showMessage ? <p>{confirmationText}</p> : ""}
        </form>
        </article>
      </main>
    )
  }

  export default Contact;