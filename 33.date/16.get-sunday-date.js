// get sunday date
var date = new Date();
console.log(date);
date.setDate(date.getDate() - date.getDay());
console.log(date);
