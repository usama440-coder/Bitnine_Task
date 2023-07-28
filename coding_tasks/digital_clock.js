const digital = () => {
  let date = new Date();
  let hours = date.getHours(); // 0 - 23
  let minutes = date.getMinutes(); // 0 - 59
  let seconds = date.getSeconds(); // 0 - 59
  let zone = "AM";

  // Convert to AM/PM
  if (hours >= 12) {
    zone = "PM";
    hours = hours === 12 ? 12 : hours - 12;
  } else {
    zone = "AM";
    hours = hours === 0 ? 12 : hours;
  }

  // leading 0 to single digit
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display
  let digitalClock = hours + ":" + minutes + ":" + seconds + " " + zone;
  console.log(digitalClock);
};

digital();
