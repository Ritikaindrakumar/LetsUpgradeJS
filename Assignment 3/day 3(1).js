num = Number(prompt("Enter the Number : ","0"));
let evenodd = function(){
    if (num % 2 == 0){
        console.log(`The number entered is ${num} and Number is even`);
    }
    else{
        console.log(`The number entered is ${num} and Number is odd`);
    }
}
evenodd();