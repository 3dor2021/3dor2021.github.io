function nth(d) {
	// source: https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
		case 1:  return "st";
		case 2:  return "nd";
		case 3:  return "rd";
		default: return "th";
	}
}

function timeOffset() {
	/* Use machine time to offset event timings */
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	var days = {1:"#day-1",2:"#day-2"};

	var flag = false; // modifier flag, check if text has been added

	for (var key in days) {
		var day_date = "0" + key;
		var day_id = days[key];
		var timeElements = document.querySelectorAll(day_id + ' #event-time');

		for (let i=0; i<timeElements.length; ++i) {
			var text = timeElements[i].innerHTML; // e.g. "13:00"
			var host_date = new Date("2021/09/"+day_date+" "+text+":00 GMT+01");

			var [day, month, year, hour, minutes] = [host_date.getDate(), host_date.getMonth(), host_date.getFullYear(), host_date.getHours(), host_date.getMinutes()];
			
			if (hour < 10) hour = "0" + hour;
			if (minutes < 10) minutes = "0" + minutes;

			if ((hour+":"+minutes) == text) continue;
			flag = true;

			if (day != key) { // event passes midnight
				timeElements[i].innerHTML += '<div class="font-italic">(local time: '+hour+":"+minutes+" on "+months[month]+" "+day+nth(day)+", "+year+')</div>';
			} else {
				timeElements[i].innerHTML += '<div class="font-italic">(local time: '+hour+":"+minutes+')</div>';
			}
		}
	}
	if (flag) {
		var description = document.getElementById("description");
		description.innerHTML += " The local time of "+Intl.DateTimeFormat().resolvedOptions().timeZone+" (based on your machine clock) is given within parentheses.";
	}
}

timeOffset();