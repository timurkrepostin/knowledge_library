
// 1. Объявить переменную
let yolochka1;

// 2. Присвоить значение переменной yolochka1;
yolochka1 = 12;

console.log("=== 3")
// 3. Вывести значение yolochka1
console.log("yolochka1 = " + yolochka1)

console.log("=== 4")
// 4. Арифмитические операции
let yolochka2 = 20;
let yolochka3 = 30;
let result = yolochka2 + yolochka3;
console.log("result — " + result)

console.log("=== 5")
// 5. Типы данных - функция тайпоф -  строка, число и т.д. зарезервирована в самом ДЖС
let yolochka4 = 10;
let yolochka5 = "hello";
let yolochka6 = "100"
let let_type = typeof yolochka4;
let let_type2 = typeof yolochka5;
let let_type3 = typeof yolochka6;
console.log("let_type — " + let_type)
console.log("let_type2 — " + let_type2)
console.log("let_type3 — " + let_type3)

console.log("=== 6")
// 6. Приведение типов данных - если перед строкой типа стринг поставить +,
// то будет суммирование и тип данных намбер
let yolochka7 = 4;
let yolochka8 = "100";
let sum_body = yolochka7 + yolochka8;
let sum_body_type = typeof(sum_body);
console.log("sum_body = " + sum_body);
console.log("sum_body_type — " + sum_body_type);

console.log("=== 7.1")
// 7.  Булевый тип данных. Тру/Фолс зарезервированы в самом ДЖС 
// 7.1 Что есть true/false и boolean
let n1 = 10;
let n2 = 30;
let compare_1 = n1 > n2;
let compare_2 = n1 < n2;
console.log("compare_1 — " + compare_1)
console.log("compare_2 — " + compare_2)
console.log("type compare_1 — " + typeof(compare_1))
console.log("type compare_2 — " + typeof(compare_2))

console.log("=== 7.2")
// 7.2 == сравнивание, тк n1 < n2, то значение false
let compare_3 = n1 == n2;
console.log("compare_3 — " + compare_3)

console.log("=== 7.2.1")
// 7.2.1 возьмем два равных значений переменных, значение true
let n3 = 30;
let n4 = 30;
let compare_4 = n3 == n4;
console.log("compare_4 — " + compare_4)
console.log("=======")

console.log("=== 7.3")
// 7.3 сравнение больше или равно >= , значение true 
let n5 = 60;
let n6 = 50;
let compare_5 = n5 >= n6;
console.log("compare_5 — " + compare_5)

console.log("=== 7.4")
// 7.4 оператор неравно != , значение true
let compare_6 = n5 != n6;
console.log("compare_6 — " + compare_6)

// 8. Операции ветвления if else в сравнение
// конструкция if: if - условие(true/false) - в {} код, который будет выполняться при true
console.log("=== 8.1")
// Пример по переменным из 7.3 и 7.4
if (compare_4) {
    let t_3 = 5;
    let t_4 = 10;
    let result_3 = t_3 + t_4;
    console.log(result_3 + " - its ok")
} 
if (compare_5) {
    let t_1 = 5;
    let t_2 = 10;
    let result_2 = t_1 + t_2;
    console.log(result_2 + " - its ok")
}
console.log("=== 8.2")
// Чтобы выполнился false, else - по переменным 7.2
if (compare_3) {
    let t_3 = 5;
    let t_4 = 10;
    let result_3 = t_3 + t_4;
    console.log(result_3 + " - its ok")
} 
else {
    console.log("vottakvota")
}
console.log("=== END")