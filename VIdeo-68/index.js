// console.log("hello world") 

// let boxes = document.getElementsByClassName("box") 
// console.log(humza) 

// // Check this line very carefully for spelling:
// boxes[2].style.backgroundColor = "green"




// let red_boxes = document.getElementById("red")
// red_boxes.style.backgroundColor = "green"

// or

// document.getElementById("red").style.backgroundColor = "blue"


// query selector

// document.querySelector(".box").style.backgroundColor = "yellow" // it will select the first box element that matches .box

// this is inline css with the help of javascript 

// but if we want to slect all and target all box 
// we use this it return html collection in this all of the element in whic class in box
// it return a node list and we need loop to target the element as this is array 

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "yellow"     // it  returns a node list
// })


// now we have get  element by there tag name and it will list all yag includeing the prent containor tag as he is also a fov

// console.log(document.getElementsByTagName("div")) // it also return a html collection 

// now there is an example of matches it return true and fasle of whatever this partiular element can be targeted by the css style or not 

// console.log(document.getElementsByTagName("div"))  

// matches 
// let e = document.getElementsByTagName("div")
// e[3].matches("#red")

// closest it check that the nearest ansectot that matches the given css 

// can be used with "html"  "containor" it check for parent of e[4] if we use containor it che for his parents also 


// there is another which shows that it contains means 
// document.querySelector(".containor").contains(e[4]) // it will show yes 