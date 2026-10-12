// console.log("Script working")

// let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children
// console.log(boxes)


// function getrandomcolor(){
//     val1 = Math.ceil(0 + Math.random() * 255);
//     val2 = Math.ceil(0 + Math.random() * 255);
//     val3 = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getrandomcolor()
//     e.style.color = getrandomcolor()
// })


/////////////////////////////////////////////////////////////////////////////

const getrandomcolor = () => {
    val1 = Math.floor(0 + Math.random() * 255) 
    val2 = Math.floor(0 + Math.random() * 255) 
    val3 = Math.floor(0 + Math.random() * 255)
    return `rgb(${val1},${val2}, ${val3})` 
}


let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getrandomcolor()
})