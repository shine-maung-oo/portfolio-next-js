"use client";

import React from "react";
import {
  IoChevronDown,
  IoMailOpenOutline,
  IoPhonePortraitOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // This will re-render on route change

  useEffect(() => {
    setIsOpen(false); // close sidebar on route change
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src="/images/my_photo.png" alt="naoki" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Shine Maung Oo">
              Shine Maung Oo
            </h1>

            <p className="title" data-text="Web Developer">
              Web Developer
            </p>
          </div>

          <button className="info_more-btn" onClick={toggleMenu}>
            <span>Show Contacts</span>
            <IoChevronDown />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            {[
              {
                title: "Email",
                value: "shinemaungoo.dev@gmail.com",
                href: "mailto:shinemaungoo.dev@gmail.com",
                icon: <IoMailOpenOutline />,
              },
              {
                title: "Phone",
                value: "+959 979092815",
                href: "tel:+09979092815",
                icon: <IoPhonePortraitOutline />,
              },
              {
                title: "Github",
                value: "shine-maung-oo",
                href: "https://github.com/shine-maung-oo",
                icon: <IoLogoGithub />,
              },
              {
                title: "Facebook",
                value: "Shine Maung Oo",
                href: "https://www.facebook.com/profile.php?id=100036778868811",
                icon: <IoLogoFacebook />,
              },
              {
                title: "LinkedIn",
                value: "shinemaungooo",
                href: "https://www.linkedin.com/in/shinemaungoo/",
                icon: <IoLogoLinkedin />,
              },
            ].map((item) => (
              <li className="contact-item" key={item.title}>
                <div className="icon-box">{item.icon}</div>
                <div className="contact-info">
                  <p className="contact-title">{item.title}</p>
                  <a
                    href={item.href}
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
