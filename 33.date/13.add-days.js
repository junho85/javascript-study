
var tomorrow = new Date(new Date().setDate(new Date().getDate()+1));

console.log(tomorrow);

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();
console.log(date);
console.log(date.addDays(5));
