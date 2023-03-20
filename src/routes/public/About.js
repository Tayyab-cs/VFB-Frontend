import React from "react";
import HeaderComponent from "../../components/public/HeaderComponent";
import boy from "../../images/gym-boy.jpg";
import girl from "../../images/gym-girl.jpg";

const About = () => {
  return (
    <>
      <HeaderComponent />
      <div
        className="flexClass"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="aboutDetails" style={{ margin: "50px" }}>
          <h1>About Us</h1>
          <p>
            Exercise is any physical activity that is performed to improve or
            maintain physical fitness and overall health. It involves engaging
            in bodily movements that increase heart rate, breathing rate, and
            energy expenditure beyond the level of resting or daily activities.
            Exercise can range from low-intensity activities like walking or
            stretching to high-intensity workouts such as weightlifting or
            sprinting.
          </p>
          <img
            src={boy}
            alt="boyImage"
            style={{ width: "200px", height: "300px", margin: "10px" }}
          ></img>
          <img
            src={girl}
            alt="boyImage"
            style={{ width: "200px", height: "300px", margin: "10px" }}
          ></img>
          <p>
            The benefits of regular exercise are numerous and well-documented.
            Exercise can help improve cardiovascular health, strengthen bones
            and muscles, reduce the risk of chronic diseases such as diabetes
            and heart disease, improve mood and mental health, and enhance
            overall quality of life. Additionally, exercise can be a fun and
            enjoyable way to socialize, relieve stress, and achieve personal
            fitness goals.
          </p>
          <p>
            There are many different types of exercise, including aerobic
            exercise, resistance training, flexibility exercises, and balance
            and coordination exercises. Aerobic exercise is any activity that
            increases heart rate and breathing, such as walking, running,
            cycling, or swimming. Resistance training involves using weights,
            resistance bands, or bodyweight exercises to build strength and
            endurance in the muscles. Flexibility exercises focus on improving
            range of motion and reducing stiffness in the joints, while balance
            and coordination exercises help to improve stability and prevent
            falls.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
