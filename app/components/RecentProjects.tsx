import React from "react";
import Header from "./reusable-components/Header";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { projects } from "@/data/projects";

export default function RecentProjects() {
  return (
    <section id="recent-projects">
      <Header title="Recent Projects" />
      <div className="grid lg:grid-cols-2">
        {projects.map((project) => {
        return (
          <CardContainer className="inter-var" key={project.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.projectTitle}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.projectDescription}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.projectImage}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.projectPreviewLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Visit →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href={project.projectSourceCode}>Source Code</a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        );
      })}
      </div>
    </section>
  );
}
