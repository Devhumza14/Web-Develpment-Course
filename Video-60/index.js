console.log("Hello this is string maipulation practice tutorial")
let a = "Humza"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5])

// array lenght
console.log(a.length)

let real_name = "Humza"
let friend_name = "Harry"

console.log("my name is " + real_name + " and my friend name is " + friend_name)

/// template literals use to make upper thing easy for developers

console.log(`hi my name is ${real_name} and my friend name is ${friend_name}`)


let b = "papa"

console.log(b.toUpperCase()) // funtion need ()
console.log(b.toLocaleLowerCase())   
console.log(b.length)     // lenght is a property
console.log(b.slice(1,3))  // 1 is included the index number and 3 is not 
console.log(b.slice(0))  // from zero index to end all characters
console.log(b.replace("pa","ma")) // replace the string and if papa has papapa means more than two occurances than it will omly apply to first



console.log(b.concat(a,"Naqvi","Syed"))

let hello = "  shahg"
let new_hello = hello.trim()   // trim the spaces
console.log(new_hello) 

console.log(b)   // string are immutable mean they did change as we have applied so many peoperties and funcntion on b varable but he is still b as orignal (immubalitity mean cannot be changed)


