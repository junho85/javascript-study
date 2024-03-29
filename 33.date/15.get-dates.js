const getDates = function (startDate, endDate) {
    let dates = [],
        currentDate = startDate,
        addDays = function (days) {
            const date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
};
let startDay = new Date("2021-01-05");
let endDay = new Date("2021-01-10");

const dates = getDates(startDay, endDay);

console.log(dates);

/*
[
  2021-01-05T00:00:00.000Z,
  2021-01-06T00:00:00.000Z,
  2021-01-07T00:00:00.000Z,
  2021-01-08T00:00:00.000Z,
  2021-01-09T00:00:00.000Z,
  2021-01-10T00:00:00.000Z
]
*/
