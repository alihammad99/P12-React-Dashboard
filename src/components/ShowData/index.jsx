import React, { useState } from "react";
import Data from "../../Data";
import Header from "./Header";
import RightCards from "./RightCards";
import DailyActivity from "./DailyActivity";
import Speed from "./Speed";
import RadarCard from "./Radar";
import Bar from "./Bar";
import { Link } from "react-router-dom";

const ShowData = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  Data(id, setData, setLoading);

  if (!id) {
    return (
      <div style={styles.center}>
        <p>Please select a user</p>
        <Link to="/12">
          <h1>👉 Karl</h1>
        </Link>
        <Link to="/18">
          <h1>👉 Cecilia</h1>
        </Link>
      </div>
    );
  }
  if (loading) {
    return <h2 style={styles.center}>Loading ...</h2>;
  }
  if (!loading && !data) {
    return (
      <div style={styles.center}>
        <h1>404</h1>
        <p>Not Found, make sure to run the server or check user's ID</p>
      </div>
    );
  }

  return (
    <>
      <Header name={data.user.data.userInfos.firstName} />
      <div style={styles.box}>
        <div className="left" style={{ width: "60vw", maxWidth: 1500 }}>
          {/* Top Side */}
          <div className="top">
            <DailyActivity data={data.activity.data.sessions} />
          </div>
          {/* Bottom Side */}
          <div className="bottom" style={styles.bottom}>
            <div style={styles.sessions}>
              <Speed data={data.sessions.data.sessions} />
            </div>
            <div style={styles.performance}>
              <RadarCard data={data.performance.data.data} />
            </div>
            <div style={styles.score}>
              <Bar data={data.user.data.todayScore || data.user.data.score} />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="right" style={styles.user}>
          <RightCards data={data.user.data} />
        </div>
      </div>
    </>
  );
};

export default ShowData;

const styles = {
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "black",
    transform: "translate(-40%)",
    textAlign: "left",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sessions: {
    width: "17rem",
    height: "17rem",
    overflow: "hidden",
    backgroundColor: "red",
    borderRadius: 5,
  },
  performance: {
    width: "17rem",
    background: "#282D30",
    padding: 10,
  },
  score: {
    width: "17rem",
    height: "17rem",
    position: "relative",
    background: "#FBFBFB",
  },
  user: { width: 200, marginRight: 100 },
};
