//1 Вывести знак тире 3 раза
let n=3, i=1;
while(i<=n){
    console.log('-')
    i=i+1;
}

//2 Решить предыдущую задачу, но количество повторений задаёт пользователь
let n=prompt("Введите значение n"), i=1;
while(i<=n){
    console.log('-')
    i=i+1;
}

//3 Оформить решение задачи 2 в виде функции
function printMin(countYourMin){
    while(countYourMin>0){
        console.log('-');
        countYourMin--;
    }
}
printMin(prompt('text'));

//4 Написать функции AddNumbers(), SubNumbers(), MultNumbers(), DivNumbers(), которые выполняют простейшие операции между числами и вызвать их. Для тестирования числа спросить у пользователя
let x=prompt('Введите значение x'), y=prompt('Введите значение y');
function AddNumbers(numbers) {
    result=Number(x)+Number(y);
    return result;
}
console.log(AddNumbers(x, y));

//let x=prompt('Введите значение x'), y=prompt('Введите значение y'); только заменить x и y на другие значения, т.к. будет ошибка, если закинуть одним кодом все 4 функции
function SubNumbers(numbers) {
    result=Number(x)-Number(y);
    return result;
}
console.log(SubNumbers(x, y));

//let x=prompt('Введите значение x'), y=prompt('Введите значение y'); только заменить x и y на другие значения, т.к. будет ошибка, если закинуть одним кодом все 4 функции
function MultNumbers(numbers) {
    result=Number(x)*Number(y);
    return result;
}
console.log(MultNumbers(x, y));

//let x=prompt('Введите значение x'), y=prompt('Введите значение y'); только заменить x и y на другие значения, т.к. будет ошибка, если закинуть одним кодом все 4 функции
function DivNumbers(numbers) {
    result=Number(x)/Number(y);
    return result;
}
console.log(DivNumbers(x, y));

//5 пользователь вводит число.   Вывести все числа от введённого до нуля

let i=0,n=prompt('Введите число');
while (n>=0) {
    console.log(n);
    n--;
}