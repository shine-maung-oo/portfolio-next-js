"use client";

import { Loading } from "@/components/loading";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchContacts } from "@/store/contactSlice";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline, IoPaperPlane } from "react-icons/io5";

declare global {
  interface Window {
    Email: any;
  }
}

const ContactClient: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const formValid = name !== "" && email !== "" && message !== "";
  const [showLoading, setShowLoading] = useState(true);

  const dispatch = useAppDispatch();
  const { contacts, loading, error } = useAppSelector(
    (state) => state.contacts
  );

  const hideAlert = () => {
    setShowAlert(false);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const ebody = `<b>Name : </b>${name}<br><b>Email : </b>${email}<br><b>Message : </b> <p>${message}</p>`;

    window.Email.send({
      SecureToken: "197b6bad-f76b-4f7b-b050-b64a81c5edac",
      To: "shinemaungoo.dev@gmail.com",
      From: "shinemaungoo.dev@gmail.com",
      Subject: "Contact From " + name,
      Body: ebody,
    }).then((response: string) => {
      if (response === "OK") {
        window.Email.send({
          SecureToken: "197b6bad-f76b-4f7b-b050-b64a81c5edac",
          To: email,
          From: "shinemaungoo.dev@gmail.com",
          Subject: "Thank you for contacting me",
          Body: "Thank for contacting me, " + name + ".",
        });

        setAlertMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setAlertMessage("Error sending email: " + response);
      }

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    });
  };

  useEffect(() => {
    dispatch(fetchContacts());
    window.scrollTo(0, 0);
    // Show loader for minimum 3 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <>
      <article className="contact active">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        {showLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <>
            <section className="contact-form">
              {showAlert && (
                <div id="alertBox">
                  <span id="alertMessage">{alertMessage}</span>
                  <span className="closeBtn" onClick={hideAlert}>
                    <IoCloseCircleOutline />
                  </span>
                </div>
              )}

              <h3 className="h3 form-title">Contact Me</h3>
              <div className="input-wrapper">
                {contacts.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div className="contact-info">
                      <p className="contact-title">{item.title}</p>
                      <a
                        href={item.link}
                        className="contact-link"
                        target={
                          item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        title={
                          item.title === "LinkedIn"
                            ? "Shine Maung Oo"
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="h3 form-title">Send Me A Message</h3>
              <form onSubmit={submitForm} className="form">
                <div className="input-wrapper">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <textarea
                  className="form-input"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button className="form-btn" disabled={!formValid}>
                  <IoPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </>
        )}
      </article>
    </>
  );
};
export default ContactClient;
