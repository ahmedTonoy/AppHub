import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const RatingsStat = ({ ratings }) => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const listener = (e) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  console.log(isDesktop);

  return (
    <div className="mb-10">
      <h1 className="font-semibold text-2xl mb-3">Ratings</h1>
      {isDesktop ? (
        <BarChart
          style={{
            width: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
            paddingBottom: "40px",
            borderBottom: "1px solid #627382",
          }}
          data={ratings}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} dy={10} />
          <YAxis
            dataKey="name"
            type="category"
            reversed
            axisLine={false}
            tickLine={false}
            dx={-10}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      ) : (
        <BarChart
          style={{
            width: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
            paddingBottom: "25px",
            borderBottom: "1px solid #627382",
          }}
          data={ratings}
          barCategoryGap={20}
          layout="horizontal"
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <YAxis type="number" axisLine={false} tickLine={false} />
          <XAxis
            dataKey="name"
            type="category"
            reversed
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={40} />
        </BarChart>
      )}
    </div>
  );
};

export default RatingsStat;
