/* eslint-disable */
import * as moment from "moment/moment";
function parseTime(t) {
  var d = new Date();
  var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

Date.prototype.addHours = function (hours) {
	var date = new Date(this.valueOf());
	date.setHours(date.getHours() + hours);
	return date;
};

function getDates(startDate, stopDate) {
	var dateArray = new Array();
	var currentDate = startDate;
	while (currentDate <= stopDate) {
		dateArray.push(new Date(currentDate));
		currentDate = currentDate.addDays(1);
	}
	return dateArray;
}

function getHours(startTime, endTime) {
	var timeArray = new Array();
	var currentTime = startTime;
	while (currentTime <= endTime) {
		timeArray.push(new Date(currentTime));
		currentTime = currentTime.addHours(1);
	}
	return timeArray;
}

const CalendarGenerator = () => {
  // input: timeStart, timeEnd, dayStart, dayEnd (inclusive)
	var dateList = [];
  var timeList = [];
  let timeStart = "9am";
  let timeEnd = "5pm";
  let dayStart = "2020-03-20".split("-");
  let dayEnd = "2020-03-27".split("-");
  var startDate = new Date(dayStart[0], dayStart[1] - 1, dayStart[2]);
  var endDate = new Date(dayEnd[0], dayEnd[1] - 1, dayEnd[2]);

  dateList = getDates(startDate, endDate);

  // Adding time
  var startTime = parseTime(timeStart);
  const endTime = parseTime(timeEnd);
	timeList = getHours(startTime, endTime);
	return {dateList, timeList}
};

export default CalendarGenerator;
