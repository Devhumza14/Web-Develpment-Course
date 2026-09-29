// faulty calculator

let random_number = Math.random()
console.log(random_number)

let num1 = Number(prompt("Enter your first number"))
let num2 = Number(prompt("Enter secound number"))
let operation = prompt("Enetr you operation")


let fault = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random_number > 0.1){
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)


}

else{
    operation = fault[operation]
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)
}
    

