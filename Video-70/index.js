// console.log("DOM Excercise no 12")

// let cont = document.body.firstElementChild

// let box_1, box_2, box_3 , box_4, box_5;

// let random_1 = Math.random()

// if (random_1 <= 0.33){
//     box_1 = cont.children[0]

//     box_1.style.backgroundColor = "red"

// }

// else if(random_1 < 0.66 && random_1 >= 0.33){
//     box_1 = cont.children[0]

//     box_1.style.backgroundColor = "yellow"
// }

// else{
//      box_1 = cont.children[0]

//     box_1.style.backgroundColor = "blue"

// }
// let random_2 = Math.random()
// if(random_2 <= 0.33){
//     box_2 = cont.children[1]
//     box_2.style.backgroundColor = "red"

// }

// else if(random_2 < 0.66 && random_2 >= 0.33){
//     box_2 = cont.children[1]
//     box_2.style.backgroundColor = "green"

// }
// else{
//     box_2 = cont.children[1]
//     box_2.style.backgroundColor = "yellow"
// }

// let random_3 =  Math.random()
// if (random_3 < 0.33){
//     box_3 = cont.children[2]
//     box_3.style.backgroundColor = "red"

// }

// else if(random_3 < 0.66 && random_3 >= 0.33){
//     box_3 = cont.children[2]
//     box_3.style.backgroundColor = "blue"
// }

// else{
//     box_3 = cont.children[2]
//     box_3.style.backgroundColor = "yellow"
// }

// let random_4 = Math.random()

// if(random_4 < 0.33){
//     box_4 = cont.children[3]
//     box_4.style.backgroundColor = "red"
// }

// else if(random_4 < 0.66 && random_4 >= 0.33){
//     box_4 = cont.children[3]
//     box_4.style.backgroundColor = "blue"
// }

// else{
//     box_4 = cont.children[3]
//     box_4.style.backgroundColor = "green"
// }

// let random_5 = Math.random()
// if (random_5 < 0.33){
//     box_5 = cont.children[4]
//     box_5.style.backgroundColor = "red"
// }
// else if(random_5 < 0.66 && random_5 >= 0.33){
//     box_5 = cont.children[4]
//     box_5.style.backgroundColor = "blue"
// }
// else{
//     box_5 = cont.children[4]
//     box_5.style.backgroundColor = "green"
// }

// NOW WE WILL MAKE IT USING LOOPS

console.log("Now using loop")
let cont = document.body.firstElementChild
const color = ["red",  "blue", "green", "yellow"]

const random_color = () => {
    let randomindex = Math.floor(Math.random() * color.length)
    return color[randomindex]
}

// FIXED: Added 'let' to both 'i' and 'box'
for (let i = 0; i < 5; i++) {
    let box = cont.children[i]

    if (box) {
        box.style.backgroundColor = random_color()
    }
}

