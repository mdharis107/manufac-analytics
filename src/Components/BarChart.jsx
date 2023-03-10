import EChartsReact from "echarts-for-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let addData = [];

    for (var i = 0; i < 3; i++) {
      //   console.log(data[i].Malic_Acid);
      addData.push(data[i].Malic_Acid);
    }
    setChartData(addData);
  }, []);

  //   console.log(chartData);

  return (
    <>
      {/* Link to go back to Home Page */}
      <div style={{ textAlign: "left", width: "75%", margin: "auto" }}>
        <Link to="/">
          <h1>Back</h1>
        </Link>
      </div>
      <div style={{ color: "blue" }}>
        <h1>Bar Chart</h1>
      </div>

      {/* Implementation of Chart */}
      <EChartsReact
        key={Date.now()}
        option={{
          title: {
            text: "Alcohol and Malic Acid",
          },
          theme: "night",
          grid: { top: 8, right: 8, bottom: 24, left: 36 },
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          dataZoom: {
            show: false,
            start: 50,
            end: 100,
          },
          legend: {
            data: ["Malic Acid", "Alcohol"],
          },
          grid: { top: 60, left: 30, right: 60, bottom: 30 },
          xAxis: [
            {
              name: "Alcohol",
              type: "value",
              scale: true,
              max: 15,
              min: 11,
              //   boundaryGap: [0.5, 0.2],
            },
          ],
          yAxis: [
            {
              scale: true,

              name: "Malic Acid",
              type: "value",
              scale: true,
              max: 20,
              min: 0,
              boundaryGap: [0.2, 0.2],
            },
          ],
          series: [
            {
              name: "Malic Acid",
              type: "bar",
              data: chartData,
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                },
                
              },
            },
            ,
          ],
        }}
        //Css for the Chart
        style={{ width: "80%", margin: "auto", height: 400, marginTop: "10%" }}
      />
    </>
  );
};

export default BarChart;
