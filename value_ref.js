let a = 5, //передача данных по значению в другую переменную
    b = a;
b = b + 10; // модификация значения 

console.log(a);
console.log('\n');
console.log(b); // вывод данных каждой переменной 


const obj = {
    a: 5,
    b: 10
};
const copy = obj; // здесь идет передача данных по ссылке 
copy.b +=10;// модифицируя значение в этом обьекте, мы также изменяем и предыдущий обьект
console.log(obj);
console.log('\n');
console.log(copy); // вывод данных из каждого обьекта



function copyObj(obj){ // создал функцию для КОПИРОВАНИЯ данных из обьекта в другой обьект
    const newObj = {};
    for(let key in obj){
        newObj[key] = obj[key];
    }
    return newObj;

}
const firstObj = {
    a: 1,
    b: 2,
    c: {
        a: 3,
        b: 5
    }
};

const copyOfFirst = copyObj(firstObj);// теперь здесь мы передаем значения,а не ссылки
copyOfFirst.a = 666;// Здесь мы поменяли значение а в этом обьекте, но при этом не сделали изменения в обьекте firstObj
copyOfFirst.c.a = 33; // здесь мы изменили значение a обьекта с в нашем обьекте copyOfFirst, НО при этом же поменяли
                    // в структуре с в обьекте firstObj. Прочти про поверхностные и глубокие копии в txt файле
console.log(firstObj);
console.log('\n');
console.log(copyOfFirst);
