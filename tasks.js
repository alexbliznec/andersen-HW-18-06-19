// sortWords написать функцию, в которую мы передаем строку, в словах которой есть цифра, необходимо найти цифру и отсортировать 
// строку согласно цифрам из слов.

// 1. разбиваем строку в массив по словам
// 2. создаем пустой объект
// 3. в цикле for для каждого элемента массива, находим цифру в элементе и присваиваем ее в переменную индекс
// 4. в этой же итерации для объекта obj создаем ключ [index] со значением -- элемент массива (слово)
// 5. создаем переменную с пустой строкой
// 6. итерируем объект obj по ключам и в каждой итерации конкатенируем значение ключа к пустой строке
// 7. возвращаем получившуюся строку

function sortWords(str) {
    const wordsArr = str.split(' ');
    const obj = {};
    let result = '';
    for (let i = 0; i < wordsArr.length; i++) {
        let index = wordsArr[i].match(/[0-9]/g).join('');
        obj[index] = wordsArr[i];
    }
    for (let key in obj) {
        result += `${obj[key]} `;
    }
    console.log(result.trim());
    return result.trim();
 }


 sortWords('A3lice 2Bob Er1nst') //  'Er1nst 2Bob A3lice';
 sortWords('2Fiona Ig15or J1amila B3ob Ali5ce') //  'J1amila 2Fiona B3ob A3lice Ig15or';
 sortWords('Tes1t') //  'Tes1t';


// написать функцию, которая получает число и возвращает число развернутое наоборот
// приводим число к строке
// переводим строку в массив
// разворачиваем
// собираем в строкуприводим к числу

function reverse(num) {
    
    let res = +num.toString().split('').reverse().join('');
    console.log(res);
    return res;
}
reverse(123) /// 321
reverse(654) /// 456
reverse(123456789) /// 987654321
reverse(9876) /// 6879


// написать функцию, которая вернет true, если число может делится без остатка только на 1 и на само себя, иначе вернуть false
// если число <= 1 вернуть false
// для всех остальных случаев создаем цикл от 2 до самого числа 
// если хотя бы в одной итерации цикла остаток от деления числа на индекс итерации цикла будет равен 0
// значит число не простое, возвращаем false
// во всех остальных случаях возвращаем true



Number.prototype.isSimple = function() {
    if (this <= 1) {
        return false;
    }
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
        return true;
    }
}
console.log((6).isSimple());
