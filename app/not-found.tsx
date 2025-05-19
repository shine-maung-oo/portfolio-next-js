'use client';
import { Loading } from "@/components/loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3s delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <article className="active">
        {loading ? (
          <Loading />
        ) : (
          <>
            <header>
              <h2 className="h2 article-title">Page Not Found</h2>
            </header>

            <section className="about-text mt-5">
              <h4 className="h3">404</h4>
              <p>
                The Page you are looking for doesn't exist or an other error
                occured. 😞
              </p>
              <Link className="form-btn ms-0" href="/">
                Go back
              </Link>
            </section>
          </>
        )}
      </article>
    </>
  );
};

export default NotFound;
