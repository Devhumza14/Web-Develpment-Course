const faculty_calculator =()=>{

    let num1 = Number(prompt("Enter number 1: "));
let num2 = Number(prompt("Enter number 2: "));

let operation = prompt("Enter the operation you want to do: + , * , - , /")

if (operation === "+") {
    if (Math.random() < 0.1) {

        console.log(num1 - num2)

    }
    else {
        console.log(num1 + num2)
    }

}

else if(operation === "*"){
    if(Math.random() < 0.1){
        console.log(num1 + num2)

    }
    else{
        console.log(num1 * num2)
    }
}

else if(operation === "-"){
    if(Math.random() < 0.1){
        console.log(num1 / num2)

    }
    else{
        console.log(num1 - num2)
    }
}
else if  (operation === "/"){
    if(Math.random() < 0.1){
        console.log(num1 ** num2)

    }
    else{
        console.log(num1 / num2)
    }
}


}

faculty_calculator(2)