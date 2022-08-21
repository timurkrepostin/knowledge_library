
// 1. Традиционно в программировании ИЛИ предназначено только для манипулирования булевыми значениями:
// в случае, если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.
// Существует всего четыре возможные логические комбинации:
// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); // false

// Логический оператор "И" && 
let hour = 18
if (hour < 18 && hour >=8 ) {
    console.log("open")
} else {
    console.log("close")
}
// 