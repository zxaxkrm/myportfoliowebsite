import React from "react";
import Header from "./reusable-components/Header";

export default function About() {
  return (
    <section id="about" className="my-20 mt-40">
      <Header title="About Me" />
      <div className="md:text-lg text-neutral-600 md:px-7 lg:px-45 dark:text-neutral-300 text-center flex justify-center items-center">
        <div>
          <p className="mb-3">
          Hi, I&apos;m Michael, a passionate web developer who loves turning
          ideas into clean, functional, and user-friendly digital experiences. I
          specialize in building modern websites and applications using HTML,
          CSS, JavaScript, React, and Node.js, and I&apos;m always exploring new
          tools and technologies to sharpen my craft. What excites me most about
          development is solving real-world problems with code. Whether
          it&apos;s creating responsive interfaces, building efficient backends,
          or integrating databases like Firebase and MySQL, I enjoy the process
          of bringing concepts to life.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll probably find me learning new design
          trends, experimenting with side projects, or studying how technology
          can make everyday life simpler. I&apos;m driven, detail-oriented, and
          always eager to collaborate — if you&apos;re looking for someone who can
          blend creativity with technical skills, let&apos;s connect!
        </p>
        </div>
      </div>
    </section>
  );
}
