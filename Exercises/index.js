/*//1 - Variables and Conditionals//
//1
let age = 25;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

//2

let name = prompt("Enter your name:");
if (name === "John") {
  console.log("Hello, John!");
} else {
  console.log("you are not John");
}

//2 - Functions
//1
function sum(a, b) {
    return a + b;
  }
  console.log(sum(6, 8));
  console.log(sum(65, 723));
  console.log(sum(75, 28));

//2

//3 - Arrays and Loops:
//1
let fruit=["banana","orang",,'mango','watermelon'];
 for(i=0; i<fruit.length; i++){
console.log(frout[i])}

//2
let numbers = [20,40,60,80] 
function avg () 
 { return (numbers[0] + numbers[1] + numbers[2] +numbers[3])/4; }
 
let ruslet=avg();
 console.log(ruslet);

 //3
 let arr=[5, 15, 25, 35, 45];
let largNum=arr[0];
for(let i=0; i<=arr.length; i++)

{

if (arr[i]>largNum){
    largNum=arr[i];
}
console.log('The largest number is :', largNum);

//4
const array = ['Hello','this','is','me','!'];


let sentence = '';

for (let i = 0; i < array.length; i++) {
  sentence += array[i] + ' '; 
}

console.log(sentence.trim());

//5
let nameofArr = ["SAM", "ABOUD", "ISLAM", "AHMED","BASHAR","KHALED"];

let nameofCheck = prompt("pleas write the name that you what to check");
function existednames(nameofArr, nameofCheck) {
  for (let i = 0; i <= nameofArr.length; i++) {
    if (nameofCheck === nameofArr[i]) {
      return true;
    }
  }
  return false;
}

console.log(existednames(nameofArr, nameofCheck.toUpperCase()));

//6
let evenarry=[];
for (let i=0; i<=20; i++)
{
  if (i % 2 === 0){
    console.log([i]);
  }
}


//4- Objects:
//1
let book =
{
title:"What I know for sure",
author:"Oprah Winfrey",
year:"2014"
}
console.log("The book's details are:")
console.log('Title: ' + book.title);
console.log('Author: ' + book.author);
console.log('Year: ' + book.year);

//2
let personinfo =
{
name:"Abduallah",
age:"24 y/o",
gender:"male"
}
function info(personinfo){
return personinfo
}
console.log("person information is :")
console.log(" Name : "+ info(personinfo.name) );
console.log(" Age : "+ info(personinfo.age) );
console.log(" Gender : "+ info(personinfo.gender) );


//5- Objects as Classes:
//1
let carproperties  =
{
name:" BMW i7 M70 xDrive ",
make:" By German automakers.",
madel:" 2023",
Price:"$150.471",
muthod: function(){
    
    return "The car is starting";
}

}
console.log(carproperties.muthod());
 var driving = Object.create(carproperties);
 console.log(driving.muthod());


//2
function user(){
    let prompet= window.prompt('what is your name?')
     return window.alert('hello user!')
 }
 user()

    */


