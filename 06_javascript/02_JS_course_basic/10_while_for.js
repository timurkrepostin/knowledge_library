
// Циклы
// Практически любой цикл, кроме for of и for in состоит из нескольких частей 
// 1. Итератор - счетчик, который определяет сколько прошло итераций, шаг, с которым надо считать
// 2. Условие, пока условие действительно, код будет выполняться, условие работать
// 3. Действие, которое манипулирует шагом или делает так, что условие сохраняется правдивым или в какой-то момент становится неправдивым

/** Синтаксис циклов
 * while - в фигурных скобках тело цикла, которое будет выполняться, пока в круглых скобка выражение будет true
//   пока цикл не выполнится, следующая часть кода выполняться не будет
 * do while - в отличии от while, сначала выполнит какое-то действие, а потом произойдет проверка условия.
//  do, фигурные скобки, while условие
 * for - ключевое слово for (указываем инициализацию; далее идет условие; увеличение итератора) точки запятые обязательно
// последовательность работы: сначала идет инициализация (только при запуске), проверка условия, выполняется тело цикла, проверка условия, выполняется тело, прка условие true
 * for of
 * for in
 */

// 1. while

// let i = 0; // i - итератор
// while (i < 10) {
// сonsole.log(i);
// } 
// такой цикл будет бесконечным, по причине того, что условие никогда не будет false, потому что i = 0, поэтому i нужно увеличивать

// let i = 0; 
// while (i < 10) {
//     console.log(i);
//     i++; 
// }

// запустился цикл, проверил i < 10, вывел console.log, увеличил i на единицу, пошел на следующий шаг и так до конца, пока i не дошел до 10
// это можно упростить, перенеся увелечение итераратора в while

// let i = 0; 
// while (i++ < 10) {
//     console.log(i);
// }

// так как инкримент стоит после переменной, работа началась на следующем шаге, поэтому вывод цикла начался с 1, а не с 0, а закончилось на 10, не как в предыдущем примере

// let i = 10;
// while(i--) {
//     console.log(i);
// }

// цикл остановил работу дойдя до нуля, потому 0 - false, 

// 2. do while

// let i = 10;
// while(i--) {
// console.log(i);
// }
// do {
//     console.log('action');
// } while(i > 0); 

// цикл прошел, выполнив сначала действие 10-1 и так на протяжении всей итерации дойдя до 0, после 0 вывел 'action'

// 3. for

// for (let i = 0; i < 10; i++ ) {
//     console.log(i);
// }
// 1. инициализировалась i (0), 2. прошла проверка i < 10, 3. выполнилось тело console.log(i); 4. прошла итерация i++ . и далее выполнялись 2, 3, 4 
// пока при проверке i === 10; 

// Перебор строк 