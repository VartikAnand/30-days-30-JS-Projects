function updateClock() {
  const now = new Date();
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const year = now.getFullYear();

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${month}/${day}/${year}`;

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);

updateClock();
