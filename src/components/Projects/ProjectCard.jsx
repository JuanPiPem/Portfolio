// src/components/Projects/ProjectCard.js
import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, visit, source } = project;
  const [showCarousel, setShowCarousel] = useState(false);

  const handleDemoClick = (e) => {
    e.preventDefault();
    if (title === "Box Delivery") {
      setShowCarousel(true);
    } else {
      window.open(demo, "_blank");
    }
  };

  const boxDeliveryImages = [
    getImageUrl("projects/boxCarousel/boxlogin.png"),
    getImageUrl("projects/boxCarousel/createacount.png"),
    getImageUrl("projects/boxCarousel/declaracionjurada.png"),
    getImageUrl("projects/boxCarousel/gestionarpedidos.png"),
    getImageUrl("projects/boxCarousel/repartoencurso.png"),
    getImageUrl("projects/boxCarousel/repartidores.png"),
    getImageUrl("projects/boxCarousel/agregarpaquetes.png"),
    getImageUrl("projects/boxCarousel/paquetes.png"),
    getImageUrl("projects/boxCarousel/iniciarjornada.png"),
  ];

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} onClick={handleDemoClick}>
            Demo
          </a>
        )}
        {visit && (
          <a href={visit} className={styles.link}>
            Visit
          </a>
        )}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
      {showCarousel && title === "Box Delivery" && (
        <ImageCarousel images={boxDeliveryImages} />
      )}
    </div>
  );
};
