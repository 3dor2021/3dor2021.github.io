/*!
 * source: https://www.w3schools.com/howto/howto_js_countdown.asp
 */

/*var countDownDate = new Date("Apr 2, 2021 00:00:00 UTC-12:00").getTime();  1 minute past 23:59:59 on 01/04/2021 https://time.is/Anywhere_on_Earth */
/*var countDownDate = new Date("May 29, 2021 00:00:00 UTC-12:00").getTime();  1 minute past 23:59:59 on 28/05/2021 https://time.is/Anywhere_on_Earth */
var countDownDate = new Date("Jul 10, 2021 23:59:00 UTC+00:00").getTime(); /* 23:59:00 on 10/07/2021 (UTC) */

function countdownTimer() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if (days > 1) { 
    document.getElementById("countdown-timer").innerHTML = days + " days " + hours.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + ":"
    + minutes.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + ":" + seconds.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + " remaining";
  } else if (days == 1) { 
    document.getElementById("countdown-timer").innerHTML = days + " day " + hours.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + ":"
    + minutes.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + ":" + seconds.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + " remaining";
  } else {
  	document.getElementById("countdown-timer").innerHTML = hours.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + ":"
    + minutes.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + ":" + seconds.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false}) + " remaining";
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Deadline expired";
  }
}


countdownTimer();
var x = setInterval(countdownTimer, 1000);