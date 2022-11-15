// // // var a;

// // // function add(num1, num2) {
// // //     return num1 + num2;
// // // }

// // // console.log(add(5, 6))

// // // Decalration
// // // Thread of Excecution

// // function foo() {
// //     console.log("Omniful");
// //     function bar() { // func
// //         return 3;
// //     }
// //     return bar(); // 8
// //     console.log("Hello")
// //     function bar() {
// //         return 8;
// //     }
// // }
// // // function foo(){
// // //     return 1;
// // // }
// // alert(foo());


// // const person = {
// //     "name": "Kshitij"
// // }

// // const person1 = new person

// // person1.name = "Arpit";
// // console.log(person.name)


// var name = "Arpit";
// var obj = {
//     name: "Kshitij",
//     prop: {
//         name: "Hello Kshitij",
//         getName: function (a) { return this.name + a }
//     }
// }

// console.log(obj.prop.getName()); // Hello Kshitij
// var x = obj.prop.getName; // Defination
// var y = obj.prop.getName(); // Function Reference
// console.log(x.call(obj.prop));
// console.log(x.apply(obj.prop));
// console.log(x.bind(obj.prop));

// // Read this
// // hositing
// // clousres
// // scopes
// // this
// Type Conversion


// var arr = [1,0,5,0,0,6,2,0]
// // 1 5 6 2 0 0 0 0 
// // time : O(n)
// // space: O(1)

// function moveZeros(arr){
//     for(let i =0; i<arr.Size(); i++){
//         let temp;
//         if(arr[i]=== 0 && arr[i+1]===0){
//             // 1 && 0
//             i++;
//         }
//         if(arr[i]!== 0 || arr[i+1]!==0){
//             // 1 && 0
//             temp = arr[i]; 
//             arr[i+1] = arr[i];
//             arr[i]= temp ;
//         }
//     }
// }

// [1,0,2,5,0,0,7]
// [1,2,0,5,0,0,7]
// [1,2,5,0,0,0,7]


var a = false - true; // false
var b = "abc" && true; // abc
var c = "1" + 1 // 11
var d = 1 + "1" // 11
var e = 0 && "abc" // false
var f = -1 && "abc" // false
var g = false !== -1 // true

console.log(a, b, c, d, e, f, g)