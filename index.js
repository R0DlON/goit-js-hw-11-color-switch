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
  isActive: null,
  intervalId: null,

  start() {
    if (!this.isActive === true) {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const changeBckgrndColor = () => {
        return (document.body.style.backgroundColor =
          colors[randomIntegerFromInterval(0, colors.length - 1)]);
      };
      intervalId = setInterval(changeBckgrndColor, 1000);
      this.isActive = true;
      console.log(this.isActive);
    }
    return;
  },

  stop() {
    clearInterval(intervalId);
    this.isActive = null;
    console.log(this.isActive);
  },
};

startBtn.addEventListener("click", timer.start);
stopBtn.addEventListener("click", timer.stop);
