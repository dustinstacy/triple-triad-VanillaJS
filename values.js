// get random number from predefined interval
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

// set rarity equal to random total of values based on rarity ranges
const common = randomIntFromInterval(8, 14);
const rare = randomIntFromInterval(14, 20);
const epic = randomIntFromInterval(20, 26);
const legendary = randomIntFromInterval(26, 32);
// max of any single direction value
const max = 10;

// divide total of values in 4 random integers with 10 as max value
const randomValues = (max, rarity, len = 4) => {
    let values = new Array(len);
    let sum = 0;
    do {
        for (let i = 0; i < len; i++) {
            values[i] = Math.random();
        }
        sum = values.reduce((acc, val) => acc + val, 0);
        const scale = (rarity - len) / sum;
        values = values.map(val => Math.min(max, Math.round(val * scale) + 1));
        sum = values.reduce((acc, val) => acc + val, 0);
    } while (sum - rarity);
    return values;
};

console.log(randomValues(max, common));
console.log(randomValues(max, rare));
console.log(randomValues(max, epic));
console.log(randomValues(max, legendary));




