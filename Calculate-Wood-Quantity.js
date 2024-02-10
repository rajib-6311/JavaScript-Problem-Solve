function woodQuantity(chairQuantity,tableQuantity,bedQuantity) {
    const perChairWood = 30;
    const perTableWood = 40;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(0, 0, 1);
console.log(wood);