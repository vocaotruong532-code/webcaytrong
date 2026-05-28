window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (loading) {
    setTimeout(() => {
      loading.style.display = "none";
    }, 1500);
  }
});

let sensorData = {
  humidity: 65,
  temp: 28,
  ph: 6.5,
  light: 850,
};

function darkMode() {
  document.body.classList.toggle("dark");

  localStorage.setItem("theme", document.body.classList.contains("dark"));
}

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

function updateSensors() {
  sensorData.humidity = Math.floor(Math.random() * 50) + 40;

  sensorData.temp = Math.floor(Math.random() * 15) + 20;

  sensorData.ph = (Math.random() * 3 + 5).toFixed(1);

  sensorData.light = Math.floor(Math.random() * 1000) + 500;

  updateText("humidity", sensorData.humidity + "%");

  updateText("temp", sensorData.temp + "°C");

  updateText("ph", sensorData.ph);

  updateText("light", sensorData.light + " Lux");

  updateWidth("humidity-bar", sensorData.humidity + "%");

  updateWidth("temp-bar", sensorData.temp * 2 + "%");

  updateWidth("ph-bar", sensorData.ph * 10 + "%");

  checkAlerts();

  updateChart();
}

function updateText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = value;
  }
}

function updateWidth(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.style.width = value;
  }
}

function updateHumidity() {
  updateSensors();
}

function updateTemp() {
  updateSensors();
}

function updatePH() {
  updateSensors();
}

setInterval(updateSensors, 4000);

function checkAlerts() {
  const alertBox = document.getElementById("alert-box");

  if (!alertBox) return;

  if (sensorData.temp > 32) {
    alertBox.innerHTML = " Nhiệt độ vượt ngưỡng an toàn!";

    alertBox.style.borderLeft = "5px solid red";
  } else if (sensorData.humidity < 45) {
    alertBox.innerHTML = " Độ ẩm đất thấp. Cần tưới nước!";

    alertBox.style.borderLeft = "5px solid orange";
  } else if (sensorData.ph > 7) {
    alertBox.innerHTML = " Độ pH đất quá cao!";

    alertBox.style.borderLeft = "5px solid purple";
  } else {
    alertBox.innerHTML = " Hệ thống hoạt động ổn định";

    alertBox.style.borderLeft = "5px solid green";
  }
}

function systemOn() {
  alert(" Hệ thống đã bật");
}

function systemOff() {
  alert(" Hệ thống đã tắt");
}

function waterOn() {
  alert(" Hệ thống tưới nước đã bật");
}

function waterOff() {
  alert(" Hệ thống tưới nước đã tắt");
}

function waterDeviceOn() {
  updateText("waterStatus", "ĐANG BẬT");
}

function waterDeviceOff() {
  updateText("waterStatus", "ĐÃ TẮT");
}

function fanOn() {
  updateText("fanStatus", "ĐANG BẬT");
}

function fanOff() {
  updateText("fanStatus", "ĐÃ TẮT");
}

function lightOn() {
  updateText("lightStatus", "ĐANG BẬT");
}

function lightOff() {
  updateText("lightStatus", "ĐÃ TẮT");
}

const chartCanvas = document.getElementById("sensorChart");

let sensorChart;

if (chartCanvas) {
  sensorChart = new Chart(chartCanvas, {
    type: "line",

    data: {
      labels: ["1", "2", "3", "4", "5"],

      datasets: [
        {
          label: "Độ ẩm",

          data: [60, 65, 70, 68, 75],

          borderColor: "green",

          backgroundColor: "transparent",

          borderWidth: 3,

          tension: 0.4,
        },

        {
          label: "Nhiệt độ",

          data: [28, 29, 30, 27, 31],

          borderColor: "orange",

          backgroundColor: "transparent",

          borderWidth: 3,

          tension: 0.4,
        },

        {
          label: "pH đất",

          data: [6.2, 6.4, 6.5, 6.7, 6.3],

          borderColor: "blue",

          backgroundColor: "transparent",

          borderWidth: 3,

          tension: 0.4,
        },
      ],
    },

    options: {
      responsive: true,
    },
  });
}

function updateChart() {
  if (!sensorChart) return;

  sensorChart.data.labels.push("");

  sensorChart.data.datasets[0].data.push(sensorData.humidity);

  sensorChart.data.datasets[1].data.push(sensorData.temp);

  sensorChart.data.datasets[2].data.push(sensorData.ph);

  if (sensorChart.data.labels.length > 10) {
    sensorChart.data.labels.shift();

    sensorChart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  sensorChart.update();
}

const cards = document.querySelectorAll(".sensor-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

function updateHumiditySensor() {
  let value = Math.floor(Math.random() * 50) + 40;

  updateText("humidityValue", value + "%");
}

function updateTempSensor() {
  let value = Math.floor(Math.random() * 15) + 20;

  updateText("tempValue", value + "°C");
}

function updatePHSensor() {
  let value = (Math.random() * 3 + 5).toFixed(1);

  updateText("phValue", value);
}

function updateLightSensor() {
  let value = Math.floor(Math.random() * 1000) + 500;

  updateText("lightValue", value + " Lux");
}

function updateCO2Sensor() {
  let value = Math.floor(Math.random() * 300) + 300;

  updateText("co2Value", value + " ppm");
}

function updateWaterSensor() {
  let value = Math.floor(Math.random() * 100);

  updateText("waterValue", value + "%");
}

const analysisCanvas = document.getElementById("analysisChart");

if (analysisCanvas) {
  new Chart(analysisCanvas, {
    type: "bar",

    data: {
      labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],

      datasets: [
        {
          label: "Nhiệt độ trung bình",

          data: [28, 29, 30, 31, 29, 28, 27],

          backgroundColor: [
            "#4caf50",
            "#43a047",
            "#388e3c",
            "#2e7d32",
            "#43a047",
            "#66bb6a",
            "#81c784",
          ],

          borderRadius: 10,
        },
      ],
    },

    options: {
      responsive: true,

      plugins: {
        legend: {
          labels: {
            color: "#333",
            font: {
              size: 14,
            },
          },
        },
      },

      scales: {
        y: {
          beginAtZero: true,

          ticks: {
            color: "#333",
          },
        },

        x: {
          ticks: {
            color: "#333",
          },
        },
      },
    },
  });
}

const performanceData = [
  " Hệ thống hoạt động ổn định",
  " Độ ẩm đang giảm nhẹ",
  " Máy bơm hoạt động hiệu quả",
  " Nhiệt độ đạt mức tối ưu",
  "Dữ liệu cảm biến đang được cập nhật",
];

function updateAnalysisAlert() {
  const alertBox = document.getElementById("alert-box");

  if (!alertBox) return;

  const random =
    performanceData[Math.floor(Math.random() * performanceData.length)];

  alertBox.innerHTML = random;
}

setInterval(updateAnalysisAlert, 5000);

function randomData(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateRealtimeSystem() {
  updateText("temp", randomData(25, 35) + "°C");

  updateText("tempValue", randomData(25, 35) + "°C");

  updateText("realtimeTemp", randomData(25, 35) + "°C");

  updateText("humidity", randomData(40, 90) + "%");

  updateText("humidityValue", randomData(40, 90) + "%");

  updateText("realtimeHumidity", randomData(40, 90) + "%");

  updateText("ph", (Math.random() * 2 + 5.5).toFixed(1));

  updateText("phValue", (Math.random() * 2 + 5.5).toFixed(1));

  updateText("realtimePH", (Math.random() * 2 + 5.5).toFixed(1));

  updateText("light", randomData(500, 1500) + " Lux");

  updateText("lightValue", randomData(500, 1500) + " Lux");

  updateText("realtimeLight", randomData(500, 1500) + " Lux");

  updateText("co2Value", randomData(300, 700) + " ppm");

  updateText("waterValue", randomData(20, 100) + "%");

  updateWidth("humidity-bar", randomData(40, 90) + "%");

  updateWidth("temp-bar", randomData(40, 90) + "%");

  updateWidth("ph-bar", randomData(40, 90) + "%");
}

setInterval(updateRealtimeSystem, 3000);

updateRealtimeSystem();
