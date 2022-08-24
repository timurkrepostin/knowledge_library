
console.log("=== 1. и или")
// 1. Традиционно в программировании ИЛИ предназначено только для манипулирования булевыми значениями:
// в случае, если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.
// Существует всего четыре возможные логические комбинации:
// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); // false

console.log("=== 1.1")
// Логический оператор "И" && 
let hour = 21
if (hour < 18 && hour >=8 ) {
    console.log("open")
} else {
    console.log("close")
}

console.log("=== 1.2")
// constrait на 24 часа и выхи для этой же задачи c ИЛИ
let hour2 = 17;
if (hour2 >= 24 || hour2 < 0) {
    console.log("error")
} else if (hour2 >=8 && hour2 < 18) {
    console.log("open")
}
else if ("saturday" || "sunday") {
    console.log("close")}
// добить рабочие и выходные дни с часами

console.log("=== 2. функции")
console.log("=== 2.1")
// Элементарная работа функции
function workDays (days, hours) {
    console.log("workDay = ", days)
    console.log("workHour = ", hours)
}
 workDays("monday" , 7)

 console.log("=== 2.2")
// Проверки на тип данных
function workDays2 (days2, hours2) {
    if (typeof days2 == 'string'){
        console.log("workDay = ", days2)
    }
    if (typeof hours2 == 'number'){
        console.log("workHours = ", hours2)
    }
}
workDays2 ("monday", 8)