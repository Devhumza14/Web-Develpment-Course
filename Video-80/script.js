// let obj = {
//     a:"Humza",
//     b:"Sana"
// }

// console.log(obj)


// let animal = {
//     eat:true

// }

// let rabbit = {
//     jump:true


// }

// rabbit.__proto__ =  animal;


class animal {
    constructor(name) {
        this.name = name
        console.log("object is created")


    }

    eats() {
        console.log("i am eating")
    }

    jump() {
        console.log("i am juming")
    }
}

let a = new animal("Humza");
console.log(a);

class lion extends animal {
    constructor(name) {
        super("shera")
        this.name = name
        console.log("this is a object and its name is shera")

    }

}

let l = new lion ("shera")
console.log(l)