



/*Write a function that will allow you to calculate 
how many slices of pizza x 
each person y 

would get if they shared evenly. 

The function should return an interpolated string 
like Each person gets 4.00 slices of pizza;
 from our 8-slice pizza 
 x being a decimal in case there is no way to split the pizza evenly.


 function
 8/ (amount of people)
*/


const whlPizza=8;
let people=5;
let slicesEach;

function sharePizza(){
    slicesEach = (whlPizza / people);
    return slicesEach;}

sharePizza();

console.log(`There were ${people}  people sharing the pizza so each person got ${slicesEach} slices each`)





