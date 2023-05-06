export function addToLocalStorage(name, car) {
    let cars = JSON.parse(localStorage.getItem(name)) || [];
    let value = cars.find(item => item.objectId == car.objectId)
    if (!value) {
        cars.push(car)
    }
    localStorage.setItem(name, JSON.stringify(cars));
}

export function removeLocalStorage(name, car) {
    let cars = JSON.parse(localStorage.getItem(name)) || [];
    let index = cars.findIndex(item => item.objectId == car.objectId)
    cars.splice(index, 1)
    localStorage.setItem(name, JSON.stringify(cars));

}