let a = prompt ("Enter First Number")
let b = prompt ("Enter Secound Number")

if(isNaN(a) || isNaN(b)){
    throw  SyntaxError("Sorry this is not allowed");
    // in case of error throw the script stops  ut if we catch it we  can use it accrodingly
    
}

let sum  = parseInt(a) + parseInt(b)



try {
    console.log("The sum is ",sum*x)
} catch (error) {
    console.log("x tou define nhi ha error aagya baba")
    // alert(error.name)
    // alert(error.message)
    // alert(error.stack)
    
}


