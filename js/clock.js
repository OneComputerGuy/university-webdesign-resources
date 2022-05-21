console.log('Clock loaded');

const clockDay = document.querySelector('.clock-date-day');
const clockDDMM = document.querySelector('.clock-date-dd-mm');
const clockYYYY = document.querySelector('.clock-date-yyyy');
const clockNumbers = document.querySelector('.clock-time-numbers');

let currentWeekday;
let currentDay;
let currentMonth;
let currentYear;
let currentMinutes;
let test;

const clock = setInterval(() => {
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    new Date()
  );

  const rawDate = new Date().toString().split(' ');

  const day = rawDate[2];
  const monthFull = rawDate[1];
  const year = new Date().getFullYear();

  const hours = rawDate[4].split(':')[0];
  const minutes = rawDate[4].split(':')[1];

  if (
    currentWeekday !== weekday ||
    currentDay !== day ||
    currentMonth !== monthFull ||
    currentYear !== year ||
    currentMinutes !== minutes
  ) {
    clockDay.innerHTML = weekday;
    clockDDMM.innerHTML = `${day}&nbsp;&nbsp;${monthFull}`;
    clockYYYY.innerHTML = year;
    clockNumbers.innerHTML = `${hours}:${minutes}`;

    currentWeekday = weekday;
    currentDay = day;
    currentMonth = monthFull;
    currentYear = year;
    currentMinutes = minutes;
  }
}, 1000);

//* Clears the clock to avoid Chrome issues.
window.addEventListener('beforeunload', () => {
  clearInterval(clock);
});
