import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const DailyActivity = ({ data }) => {
  if (data) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          overflow: "hidden",
        }}
      >
        <p>Daily activity</p>
        <div>
          <BarChart width={950} height={320} data={data}>
            <CartesianGrid strokeDasharray="1 2" />
            <XAxis dataKey={data.day} stroke="#9B9EAC" />
            <YAxis stroke="#9B9EAC" />
            {/* <Tooltip /> */}
            <Legend
              width={180}
              wrapperStyle={{
                top: -50,
                right: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            />
            <Tooltip />
            <Bar barSize={10} dataKey="calories" fill="#E60000" />
            <Bar barSize={10} dataKey="kilogram" fill="#282D30" />
          </BarChart>
        </div>
      </div>
    );
  } else {
    return <h4>Not Found Data</h4>;
  }
};

export default DailyActivity;
