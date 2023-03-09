import React from "react";
import { PolarAngleAxis, PolarGrid, RadarChart, Radar } from "recharts";

const RadarCard = ({ data }) => {
  if (data) {
    const kind = {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    };

    const values = data.map((item) => ({
      value: item.value,
      kind: kind[item.kind],
    }));

    return (
      <RadarChart outerRadius={80} width={270} height={220} data={values}>
        <PolarGrid stroke="#fff" />
        <PolarAngleAxis dataKey="kind" stroke="#fff" />
        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    );
  }
  return <p style={{ textAlign: "center", color: "#fff" }}>Not Found Data</p>;
};

export default RadarCard;
