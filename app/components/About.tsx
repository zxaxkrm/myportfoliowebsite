import React from "react";
import Header from "./reusable-components/Header";

export default function About() {
  return (
    <section id="about" className="my-20 mt-40">
      <Header title="About Me" />
      <div className="md:text-lg text-neutral-600 md:px-7 lg:px-45 dark:text-neutral-300 text-center flex justify-center items-center">
        <div>
          <p className="mb-3">
            I am a professional and skilled full-stack web
            developer with extensive experience in designing, building, and
            maintaining dynamic web applications. I&apos;m proficient in both
            front-end and back-end technologies, including HTML, CSS,
            JavaScript, ReactJS, NextJS, and NodeJS. With a strong grasp of
            database systems, I&apos;m passionate about developing user-focused,
            scalable solutions that provide exceptional digital experiences.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll probably find me learning new
            design trends, experimenting with side projects, or studying how
            technology can make everyday life simpler. I&apos;m driven,
            detail-oriented, and always eager to collaborate — if you&apos;re
            looking for someone who can blend creativity with technical skills,
            let&apos;s connect!
          </p>
        </div>
      </div>
    </section>
  );
}
