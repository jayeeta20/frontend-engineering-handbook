let person ={
    name: "jayeeta",
    age:30,
    city:"kolkata",
    favoriteBrand: "plum",
    onlineShopping: true,
}

console.log("name :" + person.name);
console.log("age :" + person.age);
console.log("city :" + person.city);
console.log("favoriteBrand :" + person.favoriteBrand);
console.log("onlineShopping :" + person.onlineShopping);

person.city= "delhi";
person.favoriteBrand= "mamaearth";

console.log("city :" + person.city);
console.log("favoriteBrand :" + person.favoriteBrand);


person.email="jayeeta@example.com";
person.cartItems= 5;
person.isLoggedIn= true;


console.log(person);

person.cartItems= 7;
person.isLoggedIn= false;

console.log(person.cartItems);
console.log(person.isLoggedIn);


//let 
let x = "Hello";
let y = x;

y = "Hi";

console.log(x);
console.log(y);

let product = {
    price: 100
};

let item = product;

item.price = 500;

console.log(product.price);
console.log(item.price);


let cartTotal = 500;

console.log(cartTotal);

cartTotal = 1000;

console.log(cartTotal);


let productName = "Face Wash";
let stock = 20;
let inStock = true;

console.log("productName :" + productName);
console.log("stock :" + stock);
console.log("inStock :" + inStock); 

stock = 15;

console.log("stock :" + stock);

inStock = false;

console.log("inStock :" + inStock);


//const
// const pi = 3.14;

// pi = 3.14159;

// console.log(pi);


const person1 = {
    name: "Jayeeta"
};

person1.name = "Priya";
console.log(person1.name);
//Allowed ✅
//Because we're changing a property inside the object.
//We're not changing what person points to.


const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

const user = {
    name: "Jayeeta",
    city: "Kolkata"
};

user.city = "Delhi";

console.log(user.city);

let count = 5;

function add() {
    count++;
}

add();
add();

console.log(count);

if (true) {
    const x = 100;
}

console.log(x);

let a = 10;

{
    let a = 20;

    console.log(a);
}

console.log(a);