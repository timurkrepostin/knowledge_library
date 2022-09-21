
// Функции

// function declaration доступны в любом месте кода

// function sayHello() { // function название (параметры функции, которые она будет принимать)
//     console.log('Hello world'); // тело функции, в которой заключена вся логика работы этой функции
// }
// sayHello()

// функции должны быть чистыми - не должна изменять глобальные переменные, должна работать только с входными данными

// 1. Входные параметры для функции

// function sayHello(firstName, lastName) { // объявляем параметры, которые будут приниматься фунция
//     console.log(firstName, lastName);
//     console.log('Hello world'); // тело функции, в которой заключена вся логика работы этой функции
// }
// sayHello('Denis', 'Petrov'); // для того чтобы передать аргументы, записываем их себя в том же порядке,
//  в котором объявлены параметры, которые будут приниматься функциями
// Когда мы передали аргументы, мы по сути объявили переменные

// 2. return

// function sayHello(firstName, lastName) { // объявляем параметры, которые будут приниматься фунцкцией
//     console.log(firstName, lastName);
//     console.log('Hello world'); // тело функции, в которой заключена вся логика работы этой функции
//     return `Hello ${firstName} ${lastName}`; // после return функция прекращает свою работу
// }
// let res = sayHello('Denis', 'Mescheryakov');
// let res2 = sayHello('Dima', 'Mescheryakov');
// console.log(res, res2);

// 3. Область видимости функции

// let x = 10; // 3. потом в аргументах функции, а потом глобальное пространство вне функции
// function foo() { // 2. то эта переменная сначала ищется в рамках функции,
//     x = 20; // 1. если мы обращаемся к переменной внутри функции без её объявления, 
//     console.log(x);  
// }
// foo();
// console.log(x);

// 4. Функции не должны переопредять переменные вне своего пространства 

// let x = 10; 
// function foo() { 
//    let x = 20; // если мы объявляем внутри, то она локальная
//    console.log(x); // возврщаем либо так
//    return x; // либо так
// }
// foo();
// console.log(x);

// Это же касается и объектов

// const user = {
//     name: 'Denis',
//     age: 30
// };
// function getObj(obj) {
//     obj.name = 'Den';
// }
// getObj(user);
// console.log(user);

// 5. function expression
// Меняется только формат объявления, она доступна только при объявлении переменной

// const square = function (x) {
//     return x * x;
// };

// 6. Самовызывающиеся функции

// (function (принятие аргументов) {
// тело функции
// })(вызов функции, сюда же передаем параметр)

// (function(msg) {
//     console.log(msg);
// })('Hello world')