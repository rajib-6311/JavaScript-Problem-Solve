function leapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
        
}
const leap = leapYear(2001);
console.log(leap);