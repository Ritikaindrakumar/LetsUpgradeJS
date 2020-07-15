//Methods of Strings
//charAt()
var str = "LetsUpgrade";
var res = str.charAt(0)
console.log(res);

//concat()
var str1 = "Hello ";
var str2 = "world!";
var result = str1.concat(str2);
console.log(result);

//toLocaleUpperCase()
var str = "Hi lu team!";
var ans = str.toLocaleUpperCase();
console.log(ans);

//toLowerCase()
var str = "JAVASCRIPT!";
var res1 = str.toLowerCase();
console.log(res1);

//toString()
var str = "Hello World!";
var res2 = str.toString();
console.log(res2);

//split()
var str = "How are you doing today?";
var res3 = str.split(" ");
console.log(res3);

//replace()
var str = "Visit LetsUpgrade!";
var res4 = str.replace("LetsUpgrade", "Javascript Essentials");
console.log(res4);


//Methods of Array
//concat()
var car = ["Innova", "BMW", "Audi"];
var color = ["Silver", "Blue", "Red"];
var res5 = car.concat(color);
console.log(res5);

//copyWithin()
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.copyWithin(2, 0);
console.log(fruits1);

//sort() 
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2);

//map()
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log(x);

//join()
var lu = ["AI-ML", "Python", "JavaScript", "Blocked chains"]
var res6 = lu.join();
console.log(res6);

//pop()
var lu = ["AI-ML", "Python", "JavaScript", "Blocked chains"]
var res7 = lu.pop();
console.log(res7);

//push()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);