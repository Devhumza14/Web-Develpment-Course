let student  = ["aon" , "haseeb" ,"sherhriyar" , "athar ali", "shahbdddddddddddddddaiz" ]

let houses = []

for (const students of student) {
    if(students.length < 6){
        houses.push("Gryfindor")
    } 
    
    else if(students.length < 8){
        houses.push("hufflepuff")
    }

     else if(students.lenght < 12){
        houses.push("ravenclaw")
    }
    else{
        houses.push("slytherin")
    }
}

   
console.log(houses)