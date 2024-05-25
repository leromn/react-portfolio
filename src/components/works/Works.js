/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import Spline from "@splinetool/react-spline";

import "./Works.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      ytLink: "https://www.youtube.com/embed/hymtATx1QXw?si=4mmXBrnv1VOo7mhU",
    },
    {
      id: 2,
      title: "VeriTru Project",
      description: `An advocacy project website built using
      MEAN stack with fact-checking tool to promote actions against
      fake news.`,
      alter: "VeriTru Project",
      ytLink: "https://www.youtube.com/embed/hymtATx1QXw?si=4mmXBrnv1VOo7mhU",
    },
    {
      id: 3,
      title: "LoFo Project",
      description: `Logistics and Forwarding website built using
      ReactJS to design and develop its front-end.`,
      alter: "LoFo Project",
      ytLink: "https://www.youtube.com/embed/hymtATx1QXw?si=4mmXBrnv1VOo7mhU",
    },
    {
      id: 4,
      title: "Startup Project",
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: "Startup Project",
      ytLink: "https://www.youtube.com/embed/hymtATx1QXw?si=4mmXBrnv1VOo7mhU",
    },
    {
      id: 5,
      title: "LaCalle Cafe",
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: "Startup Project",
      ytLink: "https://www.youtube.com/embed/hymtATx1QXw?si=4mmXBrnv1VOo7mhU",
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <iframe
                src={project.ytLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
        spline container is going to be placed here
        <Spline scene="https://prod.spline.design/JT8tZe2b8jSxGm6n/scene.splinecode" />
      </Container>
    </section>
  );
};
