import React from "react";
import styles from "./HonorsAwards.module.css";
import { getImageUrl } from "../../utils";

export const HonorsAwards = () => {
  const awards = [
    {
      title: "Silver Winner — TrustAid",
      date: "Feb 2025",
      description:
        "Blockchain Olympiad (National Round) at UIU CSE Fest 2025.\nDeveloped TrustAid, a blockchain-based NGO donation system enabling real-time, transparent donation tracking.",
      icon: getImageUrl("awards/silver-cup.png"),
    },
    {
      title: "1st Runner-Up — UniVerseHub (Final Year Project Showcase)",
      date: "Jul 2024",
      description:
        "United International University, Department of CSE.\nCreated UniVerseHub, an AI-powered academic support app offering study materials, video sessions, and smart FAQ.",
      icon: getImageUrl("awards/second-prize.png"),
    },
    {
      title: "1st Runner-Up — UniVerseHub (Software Engineering Project Showcase)",
      date: "Feb 2024",
      description:
        "United International University, Department of CSE.\nDeveloped UniVerseHub with centralized course resources, AI tutors, peer video study, and smart chat.",
      icon: getImageUrl("awards/second-prize.png"),
    },
    {
      title: "1st Runner-Up — UIUSAT System (System Analysis & Design Project Showcase)",
      date: "Jul 2022",
      description:
        "United International University, Department of CSE.\nBuilt a student achievement tracking system simplifying CV building and alumni records.",
      icon: getImageUrl("awards/second-prize.png"),
    },
    {
      title: "1st Runner-Up — Super Universe (Database Management System Showcase)",
      date: "Apr 2022",
      description:
        "United International University, Department of CSE.\nCreated a superhero card collection platform with search, unlock, and social features.",
      icon: getImageUrl("awards/second-prize.png"),
    },
    {
      title: "Merit-Based Scholarship (12 Trimesters)",
      date: "2020–2024",
      description:
        "United International University, Department of CSE.\nAwarded scholarships for 12 consecutive trimesters, with tuition waivers ranging from 50% to 100%.",
      icon: getImageUrl("awards/scholarship.png"),
    },
  ];

  return (
    <section className={styles.container} id="awards">
      <h2 className={styles.title}>Honors & Awards</h2>
      <div className={styles.cards}>
        {awards.map((award, index) => (
          <div key={index} className={styles.card}>
            <img src={award.icon} alt="Award icon" className={styles.icon} />
            <div className={styles.textContent}>
              <h3 className={styles.awardTitle}>{award.title}</h3>
              <p className={styles.date}>{award.date}</p>
              <p className={styles.description}>
                {award.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
