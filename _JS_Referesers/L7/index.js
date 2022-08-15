// console.log("Hey, How are you!!!");

// // const arr = ["Anything", 1234, "ABCD", flase, _ => {}, "Another string"];

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(typeof arr[i]);
// // }

// // for(let element of arr) {
// //     console.log(typeof element);
// // }

// // arr.forEach((element, idx) => {console.log(typeof element)});

// // arr.forEach(e => console.log(typeof e));

// // Manipulate and store of each element of the array.

// const numbers = [2, 3, 5, 1, 7];
// const sqrt_arr = [];

// console.log(numbers);
// console.log(sqrt_arr);

// // const sqrt_arr_map = numbers.map((element, index) => {
// //     const sqrt = element * element;
// //     return sqrt;
// // });

// const sqrt_arr_map = numbers.map(e => {return e * e });

// console.log(sqrt_arr_map);

// From the marks, check if any student is failing or not.
const marks = [45, 50, 30, 15, 60, 40, 70, 20, 5];

// const didFail = marks.some(e => e < 40 ? true : false);
// const didFail = marks.some(e => {
//     if(e < 40) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(didFail);

// const failed_list = marks.filter(e => e < 40 ? true : false);
const failed_list = marks.filter(e => {
    if(e < 40) {
        return true;
    } else {
        return false;
    }
});

console.log(failed_list);


const marks_arr_of_obj = [{
    name: "Abcd1",
    marks: 54
}, {
    name: "Abcd2",
    marks: 43
}, {
    name: "Abcd3",
    marks: 65
}, {
    name: "Abcd4",
    marks: 61
}];

// const pass_obj_list = marks.filter(e => {
//     if(e.marks >= 40) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(pass_obj_list);

const first_fail = marks.find(e => {
    if(e.marks < 20 ) {
        return true;
    } else {
        return false;
    }
});

console.log(first_fail);

const menu = [{
    name: "Burger",
    price: 150
}, {
    name: "Pizza",
    price: 210   
}, {
    name: "Noodles",
    price: 175
}, {
    name: "Pasta",
    price: 250
}];

// Get the price of noodles.
// const menu_book = menu.find(e => {
//     if(e.name == "Noodles") {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(noodle);
// console.log(noodle.price);


const budget_item = menu.filter(e => {
    if(e.price < 200) {
        return true;
    } else {
        return false;
    }
});

console.log(budget_item);