
function diffDays(baseDay, today) {
    return (today - baseDay) / 24 / 60 / 60 / 1000;
}

const startDay = new Date('2018-10-15');
const today = new Date('2019-01-22');

console.log(diffDays(startDay, today));
