const phones = [
    { name: 'samsung', price: 20000, camera: '12px', color: 'block'},
    { name: 'itel', price: 10000, camera: '12px', color: 'block'},
    { name: 'xmio', price: 24000, camera: '12px', color: 'block'},
    { name: 'Iphone', price: 100000, camera: '12px', color: 'block'},
    { name: 'walton', price: 29000, camera: '12px', color: 'block'},
    { name: 'symphony', price: 31000, camera: '12px', color: 'block'}
]

function getChipestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
const chipesPhone = getChipestPhone(phones);
console.log(chipesPhone);