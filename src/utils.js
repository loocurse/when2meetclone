"use strict";
exports.__esModule = true;
exports.getMonths = exports.getDay = exports.getDate = exports.splitToChunks = exports.getLabelTop = exports.timeLabelGenerator = void 0;
var monthNames = new Array();
monthNames[0] = "Jan";
monthNames[1] = "Feb";
monthNames[2] = "Mar";
monthNames[3] = "Apr";
monthNames[4] = "May";
monthNames[5] = "Jun";
monthNames[6] = "Jul";
monthNames[7] = "Aug";
monthNames[8] = "Sep";
monthNames[9] = "Oct";
monthNames[10] = "Nov";
monthNames[11] = "Dec";
var getMonths = function () {
    return monthNames;
};
exports.getMonths = getMonths;
var addDays = function (originalDate, days) {
    var date = originalDate;
    date.setDate(date.getDate() + days);
    return date;
};
var addHours = function (originalHour, hours) {
    var date = originalHour;
    date.setHours(date.getHours() + hours);
    return date;
};
function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
    }
    return dateArray;
}
function getHours(startTime, endTime) {
    var timeArray = new Array();
    var currentTime = startTime;
    while (currentTime <= endTime) {
        timeArray.push(new Date(currentTime));
        currentTime = addHours(currentTime, 1);
    }
    return timeArray;
}
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}
var timeLabelGenerator = function (firstDay) {
    var firstTime = new Date(firstDay[0] * 1000 - 28800000);
    var lastTime = new Date(firstDay[firstDay.length - 1] * 1000 - 28800000);
    var hours = getHours(firstTime, lastTime);
    return hours.map(formatAMPM);
};
exports.timeLabelGenerator = timeLabelGenerator;
/**
 * Takes in the array of the first day and produces the labels for the time and date.
 * @param {array} title - The first array of the list of days
 */
var getLabelTop = function (start, end) {
    var first = new Date(start * 1000 - 28800000);
    var last = new Date(end * 1000 - 28800000);
    return first.getDate() + " " + monthNames[first.getMonth() + 1] + " - " + last.getDate() + " " + monthNames[last.getMonth() + 1];
};
exports.getLabelTop = getLabelTop;
/**
 * Takes in all the available timings and split into n parts
 * @param {object} object object - The first array of the list of days
 * @param {parts} number parts - How many different arrays it is split into
 */
function splitToChunks(obj, parts) {
    var array = Object.keys(obj);
    var result = [];
    for (var i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}
exports.splitToChunks = splitToChunks;
var getDate = function (unixObject) {
    var a = new Date(unixObject * 1000);
    return a.getDate();
};
exports.getDate = getDate;
var getDay = function (unixObject) {
    var a = new Date(unixObject * 1000);
    return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(a);
};
exports.getDay = getDay;
