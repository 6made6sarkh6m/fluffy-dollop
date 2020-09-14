'use strict';

function execute(arg1, callback){//that one is being executed first and then calls callback function
    console.log(`This is demonstration of ${arg1}`);
    callback();
}   

function Call(){    //this is callback function. it executes itself only and only after execute()
    console.log(`Callback's statement result`);
}

execute('using interpolation and callback', Call);