'use strict';

//const circle1 = document.getElementsByClassName('circle');
let box = document.getElementById('box');
//circle1.style.backgroundColor= 'black';
 // circle1.style.cssText = 'background-color:red; width: 250px;';
let heart = document.querySelectorAll('.heart');

const circles = document.querySelectorAll('.circle');
console.dir(circles);
 circles.forEach(element => {
     element.style.backgroundColor = 'red';
 });

 heart.forEach(item=>{
    // item.style.backgroundColor = 'black';
    item.style.cssText = 'background-color: black; width:200px;';
 });
 const div = document.createElement('div');
 div.classList.add('black');
 const div2 = document.createElement('div');
 div2.classList.add('black');

  document.querySelector('.wrapper').append(div);
 document.querySelector('.wrapper').prepend(div2);

 heart[1].before(div);

 heart[2].remove();
// for(let i = 0; i<circles.length;i++){
//     circles[i].style.backgroundColor = 'red';
// }

