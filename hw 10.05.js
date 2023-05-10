// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a,b)
{
    return a * b;
}
 let A  = 5;
let B = 10;

console.log(calc (A, B));

// створити функцію яка обчислює та повертає площу кола з радіусом r

function calc1(r) {
    return Math.PI * Math.pow(r, 2);
}

let radius = 8;
console.log(calc1(radius));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calc2(h, r) {
    let AArea = Math.PI * Math.pow(r, 6);
    let BArea = 2 * Math.PI * r * h;
    return 2 * AArea + BArea;
}

let height = 8;
let radius0 = 4;
console.log(calc2(height, radius0));

//створити функцію яка приймає масив та виводить кожен його елемент

function calc3(h, r) {
    let AArea = Math.PI * Math.pow(r, 3);
    let BArea = 2 * Math.PI * r * h;
    return 2 * AArea + BArea;
}

let height1 = 6;
let radius1 = 3;
console.log(calc3(height1, radius1));

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

function  createParagraph(text) {
    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode(text);
    paragraph.appendChild(paragraphText);
    return paragraph;
}


let text = "Yuliia T";
let paragraph = createParagraph(text);
console.log(paragraph);

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий

function createList(text) {
    let list = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem);
    }

    return list;
}
let text1 = "Text lists";
let list = createList(text1);
console.log(list);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList1(text) {
    let list = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem);
    }

    return list;
}
let text3 = "Hello users";
let list1 = createList1(text3);
console.log(list1);


//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
    //та будує для них список

function createListFromArray(items) {
    let ulElement = document.createElement('ul');
    for (let i = 0; i < items.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = items[i];
        ulElement.appendChild(liElement);
    }
    let container1Element = document.getElementById('container1');
    container1Element.appendChild(ulElement);
}


let array = [1, 'Hello', true, 'World', false];
createListFromArray(array);


//створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayObjects(objects) {
    let container2Element = document.getElementById('container2');

    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        let divElement = document.createElement('div');

        let idElement = document.createElement('p');
        idElement.textContent = 'ID: ' + object.id;
        divElement.appendChild(idElement);

        let nameElement = document.createElement('p');
        nameElement.textContent = 'Name: ' + object.name;
        divElement.appendChild(nameElement);

        let ageElement = document.createElement('p');
        ageElement.textContent = 'Age: ' + object.age;
        divElement.appendChild(ageElement);

        container2Element.appendChild(divElement);
    }
}


let objects = [
    { id: 1, name: 'Roman', age: 35 },
    { id: 2, name: 'Ivan', age: 10 },
    { id: 3, name: 'Petro', age: 24 }
];
displayObjects(objects);


// - створити функцію яка повертає найменьше число з масиву

function findMinimumNumber(numbers) {
    let minimum = numbers10[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}


let numbers10 = [9, 2, 6, 3, 2, 8];
let minimumNumber = findMinimumNumber(numbers10);
console.log(minimumNumber);

//створити функцію яка повертає найменьше число з масиву

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let numbers = [6, 3, 8];
let result = sum(numbers);
console.log(result);

