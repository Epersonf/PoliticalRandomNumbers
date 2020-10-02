const outputField = document.querySelector(".output-field");

let total = new FieldVar(".total-field", 100);
let amountOfNumbers = new FieldVar(".amount-of-numbers", 2);
let margin = new FieldVar(".margin", 5);

function clickNumber() {
    outputField.value = "";
    if (total.getInt() == undefined || amountOfNumbers.getInt() == undefined) return;

    let sum = 0;
    let nums = [];
    const division = total.getInt()/amountOfNumbers.getInt();
    for (let i = 0; i < amountOfNumbers.getInt() - 1; i++) {
        const point = Math.ceil(division);
        const start = clamp(point - margin.getInt(), 0, division);
        const end = clamp(point + margin.getInt(), division, total.getInt());
        let n = getRandomInt(start, end);
        n = clamp(n, 0, total.getInt() - sum);
        sum += n;
        nums.push(n);
        outputField.value += n + ", ";
    }
    const lastValue = total.getInt() - sum;
    
    nums.push(lastValue);
    outputField.value += lastValue;
    outputField.value += "\nSum: " + sumArray(nums);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function clamp(v, min, max) {
    return (v >= max) ? max : ((v <= min) ? min : v);
}

function sumArray(arr) {
    let sum = 0;
    for (let i in arr)
        sum += arr[i];
    return sum;
}

function distribute(arr, amt) {

}