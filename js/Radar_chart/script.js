"use strict";
import users from "../user_rating.js";

new Chart(document.getElementById("radar-chart"), {
  type: "radar",
  data: {
    labels: users.map((item) => {
      const getFullName = () => {
        return `${item.firstName} ${item.lastName}`;
      };
      return getFullName();
    }),
    datasets: [
      {
        label: "React Course current rating(2022)",
        fill: true,
        pointBorderColor: "#fff",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        data: users.map((user) => user.rating),
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
