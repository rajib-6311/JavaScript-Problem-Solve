function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number); 
            odds.push(number);
        }
    }
    let sum = 0;
    for (const odd of odds) {
        sum += odd;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;

    
}
const arr = [10, 11, 23, 45, 67,11];
const oddAvg = oddAverage(arr);
console.log(oddAvg);