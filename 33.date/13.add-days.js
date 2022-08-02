// tomorrow
var date = new Date();
console.log(date);
date.setDate(date.getDate() + 1);
console.log(date);

// tomorrow in 1 line
var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
console.log(tomorrow);

// addDays prototype
console.log(">> addDays prototype");
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
console.log(date.addDays(1));

// add 5 days
var date2 = new Date();
console.log(date2); // today
console.log(date2.addDays(5)); // add 5 days


// function
console.log(">> addDays function");
function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
console.log(addDays(date, 1));
