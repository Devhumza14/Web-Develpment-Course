let array = [512,124,789];
// let newArr = [];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element**2)
//     console.log(element)
    
// }
// console.log(newArr)



let newArr = array.map((e)=>{    // can use both index arr and vlaue in it also depending upin the situation
    return e**2
})
console.log(newArr)

