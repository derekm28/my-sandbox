'use strict'

var isHappy = function(n) {
    
    let sum = 0;
    
    while(sum !==1){
    //split the integer up by dividing n by 10
    let split = Math.floor(n / 10);
    let remainder = n % 10;

    //once we get the first digit, square it
    let squared = split ** 2;
    let squared2 = remainder ** 2;

    //get total for squared plus squared2
    let sum = squared + squared2
    
        if(sum === 1){
           return true;
        }
       else{
           return false;
       }
    }
};