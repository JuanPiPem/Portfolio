// src/components/Projects/ProjectCard.js
import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Modal from "../Modal/Modal";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, visit, source } = project;
  const [showModal, setShowModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleDemoClick = (e) => {
    e.preventDefault();
    if (title === "Box Delivery") {
      setShowModal(true);
    } else {
      window.open(demo, "_blank");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDescription = () => {
    setShowFullDescription(!showFullDescription);
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
      <div
        className={`${styles.descriptionContainer} ${
          showFullDescription ? styles.expanded : ""
        }`}
      >
        <p className={styles.description}>
          {showFullDescription
            ? description
            : `${description.slice(0, 138)}...`}
        </p>
        {description.length > 138 && (
          <button className={styles.readMore} onClick={handleDescription}>
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )}
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
          <a
            href={demo}
            className={styles.link}
            onClick={handleDemoClick}
            target="_blank"
          >
            Demo
          </a>
        )}
        {visit && (
          <a href={visit} className={styles.link} target="_blank">
            Visit
          </a>
        )}
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
      {showModal && title === "Box Delivery" && (
        <Modal onClose={handleCloseModal}>
          <ImageCarousel images={boxDeliveryImages} />
        </Modal>
      )}
    </div>
  );
};
