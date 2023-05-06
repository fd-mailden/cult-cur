export function setAdvertising(car, adv) {
    const newCars = [...car];
    newCars.splice(5, 0, adv[0]);
    if (newCars.length < 12) {
        return newCars
    }
    newCars.splice(12, 0, adv[1]);
    if (newCars.length < 23) {
        return newCars
    }
    newCars.splice(21, 0, adv[2]);
    if (newCars.length < 37) {
        return newCars

    }
    newCars.splice(30, 0, adv[3]);
    newCars.splice(37, 0, adv[4]);
    return newCars

}

export function setNewsAdvertising(news, adv) {
    const newCars = [...news];
    newCars.splice(6, 0, adv);
    return newCars

}