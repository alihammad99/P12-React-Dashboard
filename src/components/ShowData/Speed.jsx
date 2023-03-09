import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis } from "recharts";

const Speed = ({ data }) => {
  if (data) {
    return (
      <>
        <p
          style={{
            color: "#ffffff",
            textAlign: "left",
            padding: 24,
            opacity: 0.7,
          }}
        >
          Average speed of your sessions
        </p>
        <LineChart
          width={220}
          height={120}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="day" stroke="#ffffff" />
          <Tooltip />
          <Line
            type="basis"
            strokeWidth={3}
            dot={false}
            dataKey="sessionLength"
            stroke="#ffffff"
          />
        </LineChart>
      </>
    );
  }
  return <div>Not Found Data</div>;
};

export default Speed;
