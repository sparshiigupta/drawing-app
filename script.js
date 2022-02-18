const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
const increaseEl = document.querySelector(".increase");
const decreaseEl = document.querySelector(".decrease");
const sizeEl = document.querySelector(".size");
const colorEl = document.querySelector(".color");
const clearEl = document.querySelector(".clear");

let draw = false;
let x, y;
let size = 10;
let color = "black";

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  draw = true;
  //   console.log(x, y);
});

canvas.addEventListener("mouseup", (e) => {
  x = undefined;
  y = undefined;
  draw = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (draw) {
    drawCircle(e.offsetX, e.offsetY);
    drawLine(x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});
colorEl.addEventListener("input", (e) => {
  color = colorEl.value;
});

increaseEl.addEventListener("click", () => {
  if (size <= 50) size += 5;

  sizeEl.innerHTML = size;
});

decreaseEl.addEventListener("click", () => {
  if (size > 5) size -= 5;
  sizeEl.innerHTML = size;
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
