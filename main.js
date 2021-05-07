//Шаг 1
console.log("hi!");
let i = 2;
let mass1 = [1, "Семен", false, 35667.76, "кружка", true, 32112, "Серевное сияние", 0, true];
console.log(mass1);
for (let i = 0; i < mass1.length; i = i + 2) {
    // alert("Вывожу в консоль элемент под номером = " + i);
    // alert(mass1[i]);
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
    
    var z = document.getElementById('catsKey');

        
    if (catsKey[i].length > 4) {
        
        
        z.innerHTML += cats[catsKey[i]];
        } 
}
//Шаг 3
let someObject={};

let inputKey = document.querySelector("#some-object-key");
let inputValue = document.querySelector("#some-object-value");
let buttonSub = document.querySelector("#buttonSub");
let objOutputSel=document.querySelector("#objOutput");


buttonSub.onclick=()=>{
    //alert('Ура, работает!'+inputKey.value+inputValue.value);
    someObject[inputKey.value]=inputValue.value;
    
    console.log(someObject);
   
    objOutputSel.innerHTML= Object.entries(someObject);
       
};

//Шаг 4

let d=[0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];
let a1=[1,];
let a2=[1,];

for (let i = 0; i<d.length; i++){
    if (typeof d[i] === 'number'){
        // alert("Номер"+d[i]+"Номер")
        if (d[i]%2 === 0){
            // alert("прошло условие"+d[i])
            a1.push(d[i]);
        } else {
            // alert("не прошло условие"+d[i])
            a2.push(d[i]);
        }
    } else {console.log("шаг 4:этот элемент массива не число :"+d[i])}
}
// alert("Первый массив"+a1);
// alert("Второй массив"+a2);
let arr1OutputSel=document.querySelector("#arr1");
let arr2OutputSel=document.querySelector("#arr2");
arr1OutputSel.innerHTML=a1;
arr2OutputSel.innerHTML=a2;