// let num =  6;
// let factorial = 1;

// for (i = num ; i > 1 ;i--){
//     factorial = factorial * i
//     // num--
// }

// console.log(factorial)



// let num = 6;
// let factorial = 1;

// for (i = 1 ; i <= num ; i++){
//     factorial = factorial * i
// }
// console.log(factorial)

// const factorial =  (num) =>{
//     let fact =  1
//     for(i = 1 ; i<= num; i++){
//         fact = fact * i
//     }
//     return fact
// } 

// console.log(factorial(6))


const factorial = (number)=>{
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c

}   

console.log(factorial(6))