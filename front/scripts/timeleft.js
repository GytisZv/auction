export default function timeLeft(dateValue) {
  var date = Math.abs((new Date().getTime() / 1000).toFixed(0));
  var date2 = Math.abs((new Date(dateValue).getTime() / 1000).toFixed(0));

  var diff = date2 - date;

  var days = Math.floor(diff / 86400);
  var hours = Math.floor(diff / 3600) % 24;
  var minutes = Math.floor(diff / 60) % 60;
  var seconds = diff % 60;

  var daysStr = days;
  if (days < 10) {
    daysStr = '0' + days;
  }

  var hoursStr = hours;
  if (hours < 10) {
    hoursStr = '0' + hours;
  }

  var minutesStr = minutes;
  if (minutes < 10) {
    minutesStr = '0' + minutes;
  }

  var secondsStr = seconds;
  if (seconds < 10) {
    secondsStr = '0' + seconds;
  }

  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    daysStr = '00';
    hoursStr = '00';
    minutesStr = '00';
    secondsStr = '00';

    console.log('close');
    if (typeof interval !== 'undefined') {
      clearInterval(interval);
    }

    return 'ended';
  }

  return daysStr + ' days, ' + hoursStr + ':' + minutesStr + ':' + secondsStr;
}
