
let first, secound, third
let random1 = Math.random()
if(random1 < 0.33){
    first = "Crazy"
    
}
else if(random1 < 0.66 && random1 >=0.33){
    first = "Amazing"

}

else{
    first = "Fire"
}

let random2 = Math.random()
if(random2 < 0.33){
    secound = "Engine"
    
}
else if(random2 < 0.66 && random2 >=0.33){
    secound = "Food"

}

else{
    secound = "Garments"
}

let random3 = Math.random()
if(random3 < 0.33){
    third = "Bros"
    
}
else if(random3 < 0.66 && random3 >=0.33){
    third = "Limited"

}

else{
    third = "Hub"
}

console.log(`Your Business name is ${first} ${secound} ${third} `)



