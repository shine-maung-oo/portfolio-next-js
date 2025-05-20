'use client';

import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
export const Download = () => {
  return (
    <>
      <div className="download">
        <a
          href="/cv/Shine_Maung_Oo_Web_Developer_CV.pdf"
          className="contact-link"
          target="_blank"
          download={true}
        >
          <div className="download-icon-box">
            <IoDownloadOutline />
          </div>
        </a>
      </div>
    </>
  );
};

