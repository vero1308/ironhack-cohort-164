
const moment = require("moment");

function formatDate(object, key, rule = "YYYY-MM-DD" ) {
    let copy = object.toJSON(); // make a copy of the mongoose method to convert into JSON
    copy[key] = moment(object[key]).format(rule); // modify the date related key
    return copy; // return an updated version of the copied obkect
}

module.exports = formatDate;