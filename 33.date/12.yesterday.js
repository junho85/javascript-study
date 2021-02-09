// normal
var date = new Date();
date.setDate(date.getDate() - 1);
console.log(date);

// one line
var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
console.log(yesterday);

//
yesterday = (function () {
    this.setDate(this.getDate() - 1);
    return this;
}).call(new Date);
console.log(yesterday);

//
yesterday = function (date) {
    date.setDate(date.getDate() - 1);
    return date;
}(new Date);
console.log(yesterday);

// arrow function
yesterday = (date => new Date(date.setDate(date.getDate() - 1)))(new Date);
console.log(yesterday);

const getYesterday = () => {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
};
console.log(getYesterday());
