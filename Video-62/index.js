// console.log("This is a random buisness name generator")
// const adjective = {
//     1:"Crazy",
//     2:"Amazing",
//     3:"Fire"
// }

// const shop_name = {
//     1:"Engine",
//     2:"Food",
//     3:"Garments"
// }

// const word = {
//     1:"Bros",
//     2:"Limited",
//     3:"Hub"

// }

// // console.log(adjective,shop_name,word)

// function random_name_generator(adjobj,shopobj,wordobj) {
//     let roll1 = Math.random();
//     let key1;
//     if(roll1 < 0.3){ key1 = 1;}
//     else if(roll1 < 0.66){key1 = 2;}
//     else(key1 = 3)


    
//     let roll2 = Math.random();
//     let key2;
//     if (roll2 < 0.3){ key2 = 1;}
//     else if(roll2 < 0.6){key2 = 2;}
//     else{key2 = 3}

//     let roll3 = Math.random();
//     let key3;
//     if(roll3 < 0.3){key3 = 1;}
//     else if(roll3 < 0.6){key3 = 2;}
//     else(key3 = 3)

//     return `${adjobj[key1]} ${shopobj[key2]} ${wordobj[key3]}`

    
// }

// console.log("Your business name is " ,random_name_generator(adjective, shop_name , word))

// resturant name generator


console.log("resturant name generator")

const adjective = {
    1:"Sizziling",
    2:"Explosive",
    3:"Midnight"
}
    adjective[4] = "Morning" 

const shop_name = {
    1: "Chocolate",
    2: "Taco",
    3: "Burger"

}

const word = {
    1:"Prime",
    2:"Station",
    3:"99"

}

function random_resturant_name_generator(adjobj,shopobj,wordobj){

  let roll1 = Math.random();
  let key1;
  if(roll1 < 0.4){
    key1 = 1;
  }
  else if (roll1 < 0.6){
    key1=2;
  }
    
  else if(roll1 < 0.8){
    key1 = 3;
  }
  else{
    key1 = 4;
  }

  let roll2 = Math.random();
  let key2;
  if(roll2 < 0.3){
    key2 = 1
  }
  else if (roll2 < 0.6){
    key2 =2; 
  }
  else{
    key2 = 3;
  }

  let roll3 = Math.random();
  let key3;
  if(roll3 < 0.3){
    key3 = 1;
  }
  else if(roll3 < 0.6){
    key3 = 2;
  }
  else{
    key3 = 3;
  }

  return `${adjobj[key1]} ${shopobj[key2]} ${wordobj[key3]}`

  }

console.log("your resturant name is ," ,random_resturant_name_generator(adjective, shop_name , word))
