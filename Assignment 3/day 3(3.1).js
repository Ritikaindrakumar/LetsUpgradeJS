  
//Using conditional statements

let marks = Number(prompt("Enter the marks : ","50"));
if (marks >= 80 && marks <= 100){
    console.log(`Marks are ${marks} and grade is A+`);
}else if (marks >= 65  && marks < 80){
    console.log(`Marks are ${marks} and grade is A`);
}else if (marks >= 50 && marks < 65){
    console.log(`Marks are ${marks} and grade is B`);
}else if (marks >= 40 && marks < 50){
    console.log(`Marks are ${marks} and grade is B+`);
}else if (marks >= 35 && marks < 40){
    console.log(`Marks are ${marks} and grade is C`);
}else if (marks < 35){
    console.log(`Marks are ${marks} and grade is C+`);
}else{
    console.log("There was some mistake while entering the input, try entering again!");
}