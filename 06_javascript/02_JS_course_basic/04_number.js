
// Numbers

const num1 = 10;
const num2 = 20;
let value; // это будет результатом работы с переменными

// 1. простые арифмитические операторы: + - * / 
value = num1 + num2;
value = value + 100; // чтобы прибавить к value 100
value += 100; // та же операция, что и выше, в более коротком виде

// 2. % взятие остатка 
// value = 4 % 2; // этот оператор дает остаток от условного деления, при делении 4 на 2, остаток 0

// 3. Инкримент - увеличение на 1, дикримент - уменьшение на 1
value++; // инкримент, изменение происходит в след. строке
value--; // дикримент, изменение происходит в след. строке
++value; // инкримент, изменение происходит в этой строке
++value; // дикримент, изменение происходит в этой строке

// 4. Неточные вычисления
value = 0.6 + 0.7;
value = value.toFixed(1); // округление до 1 числа после запятой, typof string


// 5. Объект Math. Свойства методов вызываются через точку. Методы - это функции, записанные в свойства объекта
value = Math.PI; // pi
value = Math.random(); // возвращает рандомное число 0 до 1 в дробном виде
value = Math.round(2.4) // округляет, как обычно
value = Math.ceil(2.1) // округляет в большую сторону 3
value = Math.floor(2.1) // округляет в меньшую сторону 2
value = Math.min(2, 12, 15, 1); // возвращает минимальное число из списка
value = Math.max(2, 12, 15, 1); // возвращает максимальное число из списка
value = Math.floor(Math.random() * 10 + 1) // возвращает рандомное число от 0 до 10 в целом виде, + 1 чтобы включительно 10

// 6. Рандомное вычисление с массивом 
const arr = ['black', 'red', 'yellow', 'pink', 'green', 'purple'];
value = Math.floor(Math.random() * arr.length); // leight - длина массива, 
console.log(value, arr[value]);