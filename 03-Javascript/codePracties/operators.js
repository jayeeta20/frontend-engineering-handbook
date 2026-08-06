//arithematic operator

let price1 = 500;
let price2 = 300;

let add= price1 + price2;
let minus= price1 - price2;
let mal= price1 * price2;
let div=price1 / price2;

console.log(add);
console.log(minus);
console.log(mal);
console.log(div);


//assigment operator

let wallet = 1000;
wallet += 500;
console.log(wallet);

let stock = 25;
stock -= 7;
console.log(stock);

let quantity = 6;
quantity *= 2;
console.log(quantity);

let marks = 80;
marks /= 4;
console.log(marks);

let x = 10;
x += 5;
x *= 2;
console.log(x);


//comparison operator

console.log(10 == "10");
console.log(10 === "10");
console.log(20 > 15);
console.log(8 <= 5);
console.log(5 !== "5");


//logical operator

console.log(true && false);
console.log(true || false);
console.log(!true);

let isLoggedIn = true;
let hasCartItems = true;
console.log(isLoggedIn && hasCartItems);

let hasCoupon = false;
let isPremium = false;

console.log(hasCoupon || isPremium);

//nullish coaleseing
let userName = null;

console.log(userName ?? "Guest");

//optional chaining
let user = {
    name: "Jayeeta"
};

console.log(user.address?.city);

//increment and drecrement
let count = 5;
count++;
console.log(count);


let stocko = 10;
stocko--;
console.log(stock);


let z = 5;

console.log(z++);
console.log(z);

let y = 5;

console.log(++y);
console.log(y);