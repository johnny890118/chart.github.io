const ctx = document.getElementById("myChart");
const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
        label: "人數",
        data: [
          210383, 213598, 208440, 193844, 181601, 177767, 165249, 153820,
          138986, 150931,
        ],
        backgroundColor: "#57C5B6",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx1, {
  type: "line",
  data: {
    labels: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
        label: "扶老比",
        data: [
          35.08, 35.28, 36.13, 36.95, 37.89, 38.96, 40.16, 41.27, 42.21, 43.6,
        ],
        borderWidth: 1,
      },
    ],
  },
});

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["0~14歲", "15~64歲", "65 歲以上"],
    datasets: [
      {
        label: "人數",
        data: [323231, 1981308, 461393],
        borderWidth: 1,
      },
    ],
  },
});
