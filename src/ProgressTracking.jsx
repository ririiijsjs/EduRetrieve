import React, { useEffect, useState } from "react";
import "./css/ProgressTracking.css";
import Sidebar from "./Sidebar";

const useTimeCounter = (targetHours, targetMinutes, duration = 1000) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const totalMinutes = targetHours * 60 + targetMinutes;
    let currentMinutes = 0;

    const stepTime = Math.max(10, Math.floor(duration / totalMinutes));

    const interval = setInterval(() => {
      currentMinutes += 1;
      const hours = Math.floor(currentMinutes / 60);
      const minutes = currentMinutes % 60;
      setTime({ hours, minutes });

      if (currentMinutes >= totalMinutes) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetHours, targetMinutes, duration]);

  return `${time.hours}h ${time.minutes}m`;
};

const ProgressTracking = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  const animatedTotalStudy = useTimeCounter(12, 30);
  const animatedAvgDaily = useTimeCounter(2, 5);

  return (
    <div className="progress-page">
      <div><Sidebar /></div>
      <div className="profile-section-container">
        <div className="vertical-line"></div>
      </div>
      <div className="main-content">
        <h1>Progress Tracking</h1>
        <hr className="title-divider" />

        <div className="progress-card">
          <h2 className="card-title">Your Learning Progress</h2>

          <div className="stats">
            <div className="stat-box blue">
              <span>Total Study Hours This Week</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: animated ? "100%" : "0%" }}
                >
                  {animatedTotalStudy}
                </div>
              </div>
            </div>
            <div className="stat-box purple">
              <span>Topics Completed</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: animated ? "65%" : "0%" }}
                >
                  65%
                </div>
              </div>
            </div>
            <div className="stat-box sky">
              <span>Pending Topics</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: animated ? "35%" : "0%" }}
                >
                  35%
                </div>
              </div>
            </div>
            <div className="stat-box teal">
              <span>Average Daily Study Time</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: animated ? "75%" : "0%" }}
                >
                  {animatedAvgDaily}
                </div>
              </div>
            </div>
          </div>

          <hr className="card-divider" />

          <div className="details">
            <p>
              <strong className="blue-text">Study Hours Completed</strong><br />
              You have studied {animatedTotalStudy} this week.
            </p>
            <p>
              <strong className="blue-text">Topics Completed</strong><br />
              You have completed 65% of total topics.
            </p>
            <p>
              <strong className="blue-text">Pending Topics</strong><br />
              You have 35% of topics remaining.
            </p>
            <p>
              <strong className="blue-text">Average Daily Study Time</strong><br />
              Your average daily study time is {animatedAvgDaily} per day.
            </p>
            <p>
              <strong className="blue-text">Next Recommended Action</strong><br />
              You're close to finishing Module X. Would you like to continue?<br />
              Try setting a study goal for next week to stay on track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;


