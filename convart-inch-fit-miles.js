// Normal conversion

function inchToFit(inch) {
    const feet = inch / 12;
    return feet;
}

const menHeight = inchToFit(75);
// console.log(menHeight);


// conversion in inch to feet
function inchToFit2(inch) {
    const feetFaction = inch / 12;
    const feetNumber = parseInt(feetFaction); //for int value
    const inchReaming = inch % 12;
    const result = feetNumber + ' ft ' + inchReaming + ' inch ';
    return result;
}
const menHeight2 = inchToFit2(78);
// console.log(menHeight2);

// mile to kilometers
function mileToKilometers(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const kiloCalculate = mileToKilometers(10);
console.log("Kilo: ",kiloCalculate);