// -------------------------------------------FROM NAMASTE JAVASRICPT--------------------------------------------

// console.log(x);
// getName();

// var x = 7;

// function getName(){
//     console.log("hello");
// }

// var x = 1;
// console.log(x);
// n();
// m();

// function n(){
//     var x = 10;
//     console.log(x);
// }

// function m(){
//     var x = 100;
//     console.log(x);
// }

// --------------------------------------------SCOPE CHAIN AND LEXICAL ENVIRONMENT------------------------------ 
// where u can access specific variable in the function and lexical means a hierarchy or sequence

// function m(){
//     console.log(k);
// }
// var n = 6;
// m();
// --------------------------------------------------CLOSURES---------------------------------------------------
//]function and lexical scope bundled together  
function l(){
    var a = 7;
    function p(){
        console.log(a);
    }
    p();
}
l();
