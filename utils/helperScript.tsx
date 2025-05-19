import React from "react";
import Script from "next/script";

const HelperScript = () => {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-975S33NJ93"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-975S33NJ93');
          `}
      </Script>

      {/* SMTP.js */}
      <Script
        src="https://smtpjs.com/v3/smtp.js"
        strategy="beforeInteractive"
      />
    </>
  );
};

export default HelperScript;
