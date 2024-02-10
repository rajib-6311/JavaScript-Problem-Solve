function arrDuplicateCheek(array) {
    const withOutDupli = [];
    for (const item of array) {
        if (withOutDupli.includes(item)==false) {
            withOutDupli.push(item);
        }  
    }
    return withOutDupli;
}
const arrWithDuplicate = [5, 23, 45, 34, 5, 1, 2, 1, 23];
const uniqueArray = arrDuplicateCheek(arrWithDuplicate);
console.log(uniqueArray);