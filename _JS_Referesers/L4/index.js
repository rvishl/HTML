
// // 0 parameters
// const helloWorld = () => {
//     console.log("Hello World");
// }
// helloWorld();

// // 1 parameter
// const printSquare = (num) => {
//     const approach1 = num * num; // Multiple by itself to make square
//     const approach2 = num ** 2; // Raise to the power of 2 using ** operator
//     const approach3 = Math.pow(num, 2); // Using a Math function.       
//     console.log(approach1, approach2, approach3);
// }

// printSquare(5);

// // More than 1 parameters
// const addition = (num1, num2) => {
//     console.log(num1 + num2);
// }
// addition(10, 5);

// // 1 instruction and we will return that.

// const addition_one_liner = (num1, num2) => console.log(num1 + num2);

// addition_one_liner(30, 5);

// const generateRandomNumber() = _ => Math.random();

// console.log(generateRandomNumber());

//First Class function, a function that has been defined to a variable.
// const hellworld = => console.log("Hello World");

//It takes 2 arguments, a function and a time(milliseconds)
// Calls the function afer the given time has passed

// setTimeout(_ => console.log("Hello World"), 4000);

// element.addEventListener('click', () => {});

// console.log(_ => console.log("Hello World from Timeout"));

// Anonymous - ❌ 
// Function Expreesion - ✔ 
// Named function - ✔
// HOF | FOF - FOF
// FCF - ✔
// cons hello = function hello1() {
//     console.log("Hello from Named");
// }

// setTimeout(hello, 6000);

// console.log(1, 2, 3, 4, 5, 6, "abcd", "blah", 8, 10);

// const addition = (a, b, c, d, ...others) => {
//     const sum = a + b + c + d;
//     console.log(sum);
//     console.log(others);
// }

// const addition = (...numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) 
//         sum += numbers[i];

//     console.log(sum);
// }

// addition(10, 5, 7, 8, 5, 7, 15, 4, 1, 2);

// const some_function = _ => {
//     const child_function = () => {
//         console.log("From child function");
//     }

//     return child_function;
// }

// const parent = some_function();
// console.log(parent);
// parent();


const some_function = (a) => {
    const child_function = (b) => {
        console.log("From child function");
        console.log(a+b);
    }

    return child_function;
}

some_function()(2);