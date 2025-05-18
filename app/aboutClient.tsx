"use client";

import { useEffect } from "react";
declare global {
  interface Window {
    Email: any;
  }
}

export default function aboutClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Hi, I'm Shine Maung Oo, a web developer from Yangon, Myanmar, with a
            passion for front-end development. I specialize in creating dynamic,
            responsive web applications, focusing on technologies like
            JavaScript and frameworks such as React.js, Next,js and Vue.js.
          </p>
          <p>
            While I have experience with backend development using PHP and
            Laravel, my true passion lies in crafting intuitive and engaging
            user interfaces. I believe that a well-designed interface
            significantly enhances user experience and satisfaction.
          </p>
          <p>
            I'm always eager to learn new technologies and improve my skills.
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/shinemaungoo"
              className="about-link"
              target="_blank"
              title="Shine Maung Oo"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="mailto:shinemaungoo.dev@gmail.com" className="about-link">
              shinemaungoo.dev@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/images/icon-design.svg
                "
                  alt="design icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>

                <p className="service-item-text">
                  The most modern and high-quality design made at a average
                  level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the average level.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">Skills</h3>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HTML & CSS</h4>
              <span>
                {" "}
                Strong foundation in web design and responsive layouts.
              </span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Javascript</h4>
              <span>
                Advanced knowledge, with experience in frameworks like React and
                Vue.js.
              </span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">TypeScript</h4>
              <span> Experience in building scalable web applications.</span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">PHP</h4>
              <span> Proficient in backend development using Laravel.</span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">WordPress</h4>
              <span>
                Proficient in creating and managing websites using WordPress,
                with experience in theme and plugin development, and customizing
                designs and functionality to meet client needs.
              </span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Bootstrap</h4>
              <span>
                Proficient in using Bootstrap for responsive and modern web
                design.
              </span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Tailwind CSS</h4>
              <span>
                Skilled in using Tailwind CSS for utility-first CSS framework to
                build custom designs quickly.
              </span>
            </li>
          </ol>
          <div className="slideshow" style={{ marginBottom: 0 }}>
            <div className="move">
              <img src="/images/html5.svg" alt="icon" />
              <img src="/images/css3-alt.svg" alt="icon" />
              <img src="/images/js.svg" alt="icon" />
              <img src="/images/bootstrap.svg" alt="icon" />
              <img src="/images/tailwind.svg" alt="icon" />
              <img src="/images/php.svg" alt="icon" />
              <img src="/images/laravel.svg" alt="icon" />
              <img
                src="/images/filament.svg"
                alt="icon"
                style={{ borderRadius: 5 }}
              />
              <img src="/images/wordpress.svg" alt="icon" />
              <img src="/images/vuejs.svg" alt="icon" />
              <img src="/images/react.svg" alt="icon" />
              <img src="/images/github.svg" alt="icon" />
              <img src="/images/figma.svg" alt="icon" />
            </div>
            <div className="move">
              <img src="/images/html5.svg" alt="icon" />
              <img src="/images/css3-alt.svg" alt="icon" />
              <img src="/images/js.svg" alt="icon" />
              <img src="/images/bootstrap.svg" alt="icon" />
              <img src="/images/tailwind.svg" alt="icon" />
              <img src="/images/php.svg" alt="icon" />
              <img src="/images/laravel.svg" alt="icon" />
              <img
                src="/images/filament.svg"
                alt="icon"
                style={{ borderRadius: 5 }}
              />
              <img src="/images/wordpress.svg" alt="icon" />
              <img src="/images/vuejs.svg" alt="icon" />
              <img src="/images/react.svg" alt="icon" />
              <img src="/images/github.svg" alt="icon" />
              <img src="/images/figma.svg" alt="icon" />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
