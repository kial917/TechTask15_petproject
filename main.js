//Шаг 1
const mass1 = [1, "Семен", false, 35667.76, "кружка", true, 32112, "Серевное сияние", 0, true];
console.log(mass1);
for (let i = 0; i < mass1.length; i = i + 2) {
    console.log(mass1[i]);
}

//Шаг 2
const cats = {
    abyssinian: '😸',
    'american-bobtail': '🐱',
    'siam': '🙀',
    'bombay': '😼'
}
let catsKey = Object.keys(cats);
for (let i = 0; i < catsKey.length; i++) {
    if (catsKey[i].length > 4) {
        const htmlElement = document.getElementById('catsKey');
        htmlElement.innerHTML += cats[catsKey[i]];
    }
}
//Шаг 3
const someObject = {};
const inputKey = document.querySelector("#some-object-key");
const inputValue = document.querySelector("#some-object-value");
const buttonSub = document.querySelector("#buttonSub");
const objOutputSel = document.querySelector("#objOutput");

buttonSub.onclick = () => {
    someObject[inputKey.value] = inputValue.value;
    objOutputSel.innerHTML = JSON.stringify(someObject, null, 2);
};

//Шаг 4

const d = [0, 2, 5, -4, 6, 22, -9, -12, , 13, 78];
const a1 = [];
const a2 = [];

for (let i = 0; i < d.length; i++) {
    if (typeof d[i] !== 'number') {
        console.log("шаг 4:этот элемент массива не число :" + d[i]);
        continue;
    }
    const toPush = d[i] % 2 === 0 ? a1 : a2;
    toPush.push(d[i]);
}
document.querySelector("#arr1").innerHTML = a1;
document.querySelector("#arr2").innerHTML = a2;
