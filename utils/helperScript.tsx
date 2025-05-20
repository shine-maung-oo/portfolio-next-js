'use client';

import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from "next/script";

const HelperScript = () => {
  return (
    <>
      {/* Google Analytics via nextjs-google-analytics */}
      <GoogleAnalytics trackPageViews gaMeasurementId="G-975S33NJ93" />

      {/* SMTP.js */}
      <Script
        src="https://smtpjs.com/v3/smtp.js"
        strategy="beforeInteractive"
      />
    </>
  );
};

export default HelperScript;
