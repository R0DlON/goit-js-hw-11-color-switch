const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('button[data-action="start"]');
console.log(startBtn);

const stopBtn = document.querySelector('button[data-action="stop"]');
console.log(startBtn);

const timer = {
  isActive: false,
  intervalId: null,

  start() {
    if (this.isActive === true) {
      return;
    }

    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const changeBckgrndColor = () => {
      return (document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]);
    };

    this.isActive = true;
    intervalId = setInterval(changeBckgrndColor, 1000);
    console.log(this.isActive);
  },

  stop() {
    clearInterval(intervalId);
    this.isActive = false;
    console.log(this.isActive);
  },
};

startBtn.addEventListener("click", timer.start);
stopBtn.addEventListener("click", timer.stop);
