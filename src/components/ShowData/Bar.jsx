import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const Bar = ({ data = 0 }) => {
  const score = [
    { value: 100, fill: "#f6f6fa" },
    { value: data * 100, fill: "#E60000" },
  ];
  return (
    <>
      <div style={styles.box}>
        <h4 style={styles.title}>{score[1]["value"]}%</h4>
        <p style={styles.text}>of your goal</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="60%"
          barSize={10}
          data={score}
        >
          <RadialBar dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Bar;

const styles = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translateY(-50%) translateX(-50%)",
  },
  title: {
    lineHeight: "0",
    color: "#282D30",
    fontSize: 26,
    fontweight: 700,
  },
  text: {
    lineHeight: "0",
    color: "#74798C",
    fontSize: 16,
    fontweight: 500,
  },
};
