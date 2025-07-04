import React from "react";
import styles from "./Extracurricular.module.css";
import { getImageUrl } from "../../utils";

export const Extracurricular = () => {
  const activities = [
    {
      title: "Student Volunteer — UIU CSE Fest 2023",
      date: "Sep 2023",
      description:
        "Volunteered in Science & Technology events at UIU CSE Fest 2023.\nAssisted in event management and guest coordination.",
      icon: getImageUrl("activity/hand-raising_18264486.gif"), // your icon file here
    },
    {
      title: "Champion — Art Competition (BD Japanese Festival & TASH Entertainment)",
      date: "Aug 2022",
      description:
        "Won an anime-style watercolor art contest themed around Sakura and Lolita fashion.\nEvent hosted by BD Japanese Festival and TASH Entertainment.",
      icon: getImageUrl("activity/painting.gif"), // add icon or leave empty
    },
    {
      title: "General Member — UIU Robotics Club",
      date: "2022–2024",
      description:
        "Participated in workshops, technical sessions, and club projects.\nInvolved in inter-university robotics events.",
      icon: getImageUrl("activity/settings.gif"),
    },
    {
      title: "Event Committee Member — Students’ International Affairs Society",
      date: "2022–2024",
      description:
        "Organized international programs on campus.\nManaged logistics, guest hospitality, and event promotions.",
      icon: getImageUrl("activity/calendar.gif"),
    },
  ];

  return (
    <section className={styles.container} id="extracurricular">
      <h2 className={styles.title}>Extracurricular Activities</h2>
      <div className={styles.cards}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.card}>
            <img src={activity.icon} alt="Activity icon" className={styles.icon} />
            <div className={styles.textContent}>
              <h3 className={styles.activityTitle}>{activity.title}</h3>
              <p className={styles.date}>{activity.date}</p>
              <p className={styles.description}>
                {activity.description.split("\n").map((line, i) => (
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
