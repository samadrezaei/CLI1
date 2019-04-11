//   1.1 Add the string to your file and log it.
//   1.2 Log the length of myString. 
//   1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
//   1.4 Log myString to see if you succeeded.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g , " ");
console.log(myString);
//2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.   
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
//2.2 Log your new array!
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
 //2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
//2.7 Jason does not like 'giraffe', delete this animal from the array.
delete favoriteAnimals[3];
console.log(favoriteAnimals);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
//2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?0);
 //2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log("the meerkat that I am looking for at the index = ",index);
favoriteAnimals.splice(index,1);
console.log(favoriteAnimals)
//1.Create a function that takes 3 arguments and returns the sum of the these arguments.
function addition(x,y,z){
  return x+y+z;
}
let exampel = addition(2,3,5);
console.log(exampel);
//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color){
  return console.log("My car color is",color);
}
let myCar = "red";
colorCar(myCar);
//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let person = {firstName:"samad",lastName:"rezaei",adress:"greece"};
function print(info){
 return console.log(info);
}
print(person);
//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color,code){
  if(code == 1){
  return console.log("A ",color,"car")}
  else if(code == 2){
    return console.log("A ",color,"motorbike")}
}
vehicleType("blue", 2);
//5.Can you write the following without the if statement, but with just as a single line with console.log(...);?
3 === 3 ? console.log("yes") : console.log("no");
//6.Create a function called vehicle, like before, but takes another   parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color,code,age){
  if(code == 1){
    if(age == 5){
     console.log("a",color,"used car");}
    else{  console.log("a",color,"car");}
  }
  else if(code == 2 ){return console.log("a",color,"motorbike");}
else {return console.log("This is not a vehicle");}
}
//calling the function with diffrent cases
vehicle("blue",1,5);
vehicle("blue",1,2);
vehicle("blue",2,5);
vehicle("blue",2,3);
vehicle("blue",3,5);
vehicle("blue",3,0);
//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles = ["motorbike", "caravan", "bike","car"];
//8.How do you get the third element from that list?
console.log(vehicles[2]);
//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
console.log(vehicles);
function vehicleList(color,code,age){
  let c;
  if(code == indexOf vehicles[0]){c = vehicles[0];} else if(code == 2){c = vehicles[1];} else if(code == 3){c = vehicles[2]} else if(code == 4){c = vehicles[3]} else{c = " ";}
  let a;
  if(age == 1){a = "new";}else if (age == 5){a = "used";} else {a = " ";}
   console.log("a",color,a,c);
}
vehicleList("red",4,5);
//10.Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
let vehicleToService="";
for(let counter=0; counter<vehicles.length ;counter++){
  if(counter == vehicles.length - 1){vehicleToService += vehicles[counter] + "s.";}
 else {vehicleToService += vehicles[counter] + "s, ";}
 
}
 console.log(" \"Amazing Joe's Garage, we service" , vehicleToService,"\"");
 /*let vehicleToService="";
 vehicleToService = vehicles.join(",");
  console.log("Amazing Joe's Garage, we service ", vehicleToService,".");*/
  //11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
  vehicles.push("SaipaPride");
  console.log(vehicles);
 vehicleToService="";
for(let counter=0; counter<vehicles.length ;counter++){
  if(counter == vehicles.length - 1){vehicleToService += vehicles[counter] + "s.";}
 else {vehicleToService += vehicles[counter] + "s, ";}
 
}
 console.log(" \"Amazing Joe's Garage, we service" , vehicleToService,"\"");