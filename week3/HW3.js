                    //1
console.log("Hello World! // English"); //Hello World!
console.log("سلام دنیا! // persian"); //سلام دنیا!
console.log("Γειά Κόσμε! // Greek"); //Γειά Κόσμε
//.........................................................................
                    //2
console.log("I'm awesome"); //I'm awesome
//.........................................................................
                    //3
let x = 2019; //undefined
console.log(x); //100
console.log(typeof(x)); //number
console.log(x); //100
//.........................................................................
                    //4
let y = "SocialHackersAcademy"; //undefined
console.log("SocialHackersAcademy"); //SocialHackersAcademy
let y = "Greece";//undefined
console.log(Greece); //Greece
console.log(y); //Greece (First we have to refresh the page and after refresh we can put diferent y again.)
//.........................................................................
                    //5
let z = "7.25";//undefined
console.log(z);// 7.25
a = Math.round(z); //7
console.log(a); //7
let max_num;
if (a > z){
     max_num = a;
}
else {
     max_num = z;
}
console.log(max_num);
//.........................................................................
                    //6
let test = [];//undefined
console.log("test");//test
let pets = ["cats","dogs","mouses"];//undefined
console.log(pets);//(3) ["cats", "dogs", "mouses"]
pets.push("hours");
console.log("pets");//(4) ["cats", "dogs", "mouses", "hours"]
//.........................................................................
                    //7
let myString = "this is a test"; //undefined
console.log(myString); //this is a test
console.log(myString.length); //14
//.........................................................................‵ 
                    //8           
let x = 90;
console.log(x);
console.log(typeof(x)); //number
let y = "Hello";
console.log(y);
console.log(typeof(y)); //string
function compare(x,y){
if (typeof(x) === typeof(y)) {
    return console.log("SAME TYPE")
  }
else {
    return console.log("NOT SAME TYPE");
}
}
//.........................................................................
                    //9
let x = 7;
x = 7;
x = x % 3; //1
let x = 7;
let y = 3;
z=x/y //2.33333 = 2 + {(%)1}
console.log(z)
//.........................................................................
                    //10
let a = "my name is samad im ";
console.log(a)//my name is samad
let b = "31";
console.log(a)//31
let c = " years old.";//years old
console.log(a + b + c );// my name is samad im 31 years old

var x = 6/0;
var y = 10/0;
function compare(6/0,10/0) {
    if (x<y) {
      return -1;
    }
    if (x>y) {
      return 1;
    }
  }

//sources
//https://stackoverflow.com/questions/28020093/comparing-multiple-integers-in-if-statement-java
//https://www.geeksforgeeks.org/variables-in-java/
//https://swcarpentry.github.io/python-novice-inflammation/06-func/index.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//https://hackernoon.com/work-with-javascript-arrays-like-a-boss-97207a042e42
//https://stackoverflow.com/questions/39785320/how-to-compare-enums-in-typescript