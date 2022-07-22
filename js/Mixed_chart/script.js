"use strict";
import users from "../user_rating.js";

new Chart(document.getElementById("mixed-chart"), {
  type: "bar",
  data: {
    labels: users.map((item) => {
      const getFullName = () => {
        return `${item.firstName} ${item.lastName}`;
      };
      return getFullName();
    }),
    datasets: [
      {
        label: "React Course(2022)",
        type: "bar",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#6D0343",
          "#20ff56",
          "#9999c0",
          "#336655",
          "#447799",
          "#c099aa",
        ],
        backgroundColorHover: "#3e95cd",
        data: users.map((user) => user.rating),
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "React.JS rating",
    },
    legend: { display: false },
  },
});
