document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("hellodiv");
  let header = document.querySelector(".h2");
  function ampm() {
    currentHour = new Date().toJSON().slice(11, 13);
    currentMinute = new Date().toJSON().slice(14, 16);
    time = parseInt(currentHour) + 5.5 + parseInt(currentMinute) / 60;
    console.log(time);
    if (time >= 18) {
      return 1;
    } else if (time >= 12 && time < 18) return 0;
    else return -1;
  }

  function setHeader() {
    let k = ampm();
    if (k === 1) {
      header.textContent = "Guten Abend, This Is LEGEND...";
      container.innerText = "hello";
    } else if (k === 0) {
      header.textContent = "Guten Tag, This Is LEGEND...";
      container.innerText = "hello";
    } else {
      header.textContent = "Guten Morgen, This Is LEGEND...";
      container.innerText = "hello";
    }
  }
  setHeader();
});
