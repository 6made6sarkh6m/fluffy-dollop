'use strict';
/*
function execute(arg1, callback){//that one is being executed first and then calls callback function
    console.log(`This is demonstration of ${arg1}`);
    callback();
}   

function Call(){    //this is callback function. it executes itself only and only after execute()
    console.log(`Callback's statement result`);
}

execute('using interpolation and callback', Call);
*/
let arr  = [];

for (let i = 0; i<10; i++){
    arr.push(i);
}

console.log(arr);


arr.forEach(function(value, index, array)/*that one is also callback function*/{
    console.log(`${index} : this ${value} is value of ${array}`);
});

