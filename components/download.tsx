'use client';

import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
export const Download = () => {
  return (
    <>
      <div className="download">
        <a
          href="/pdf/Shine_Maung_Oo_CV.pdf"
          className="contact-link"
          target="_blank"
        >
          <div className="download-icon-box">
            <IoDownloadOutline />
          </div>
        </a>
      </div>
    </>
  );
};

