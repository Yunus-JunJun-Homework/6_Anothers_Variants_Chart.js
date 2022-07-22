"use strict";
import users from "../user_rating.js";

new Chart(document.getElementById("line-chart"), {
  type: "line",
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
        backgroundColor: "#3e95cd",
        data: users.map((user) => user.rating),
        fill: true,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "React.JS rating",
    },
  },
});
