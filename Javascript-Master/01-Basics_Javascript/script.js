// // let a = "Tausif"
// // var b = "shaikh"

// // console.log(window.a,window.b)

// // Hoisting

// // getName();
// // console.log(x)
// // console.log(getName)

// // var x = 8;
// // function getName(){
// //     console.log("Shaikh Tausif")
// // }
// // console.log(typeof(getName))
// // // getDetails();
// // var getDetails = ()=>{
// //     console.log("Get Detail Function")
// // }

// // console.log(getDetails)
// // getDetails();

// // Scope, Lexical Enviornment

// // function a (){
// //     console.log(b)
// // }

// // // var b = 10;
// // let b = 10;

// // a();

// // function a (){
// //     c();

// //     function c (){
// //         console.log(b)
// //     }

// // }

// // let b = 110;
// // a();

// // console.log(a)
// // console.log(b)

// // let a = 10;
// // var b = 100;

// // function x(){
// //     var a =7;
// //     function y(){
// //         console.log(a)
// //     }

// //     return y;

// // }

// // var z = x();

// // console.log(z)

// // z();

// // function z() {
// //   var b = 900;
// //   function x() {
// //     var a = 7;
// //     function y() {
// //       console.log(a, b);
// //     }
// //     y();
// //   }
// //   x();
// // }

// // z();

// // function x(){
// //     var i=1;
// //     setTimeout(function(){
// //         console.log(i)
// //     },3000)
// //     console.log("Namaste Javascript ")
// // }

// // x();

// // function x() {
// //   for (var i = 1; i <= 5; i++) {
// //     setTimeout(function () {
// //       console.log(i);
// //     }, i* 1000);
// //   }

// //   console.log("Javascript");
// // }
// // x();


// // function x(){

// //     for(var i=1; i<=5; i++){
// //         function close(i){
// //             setTimeout(function(){
// //                 console.log(i)
// //             },i*1000)
// //         }

// //         close(i)
// //     }

// //     console.log("Namaste Javascript")

// // }

// // x();



// // function a(){
// //     var i =1;
// //     function b(){
// //         console.log(i)
// //     }
// //     b();
// //     i = 2;

// //     function c(){
// //         console.log(i);
// //     }
// //     c();

// //     b();
// // }


// // a();




// var a = function s(){
//     console.log("Helllo")
// }

// a();



// setTimeout(function(){
// console.log("Callback Function Of SetTimeout")
// },2000)

// function x(y){
//      console.log("x")
//      y();
// }

// x(function y(){
//     console.log("Y")
// })


// Another Example of callback
function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printStr('A', () => {
    printStr('B', () => {
      printStr('C', () => {});
    });
  });
}
printAll(); // A B C // in order




