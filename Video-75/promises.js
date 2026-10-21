console.log('this is a promise');

let prom1 = new Promise((resolve, reject)=>{
    let a =  Math.random();
    if (a<0.5){
        reject("no the random number is not supporting you")
    }

    else{
        setTimeout(() => {
            console.log('yes i am done');
            resolve("Humza")
            
            
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a =  Math.random();
    if (a<0.5){
        reject("no the random number is not supporting you 2")
    }

    else{
        setTimeout(() => {
            console.log('yes i am done 2 ');
            resolve("Humza 2")
            
            
        }, 1000);
    }
})



// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })

p4 = Promise.allSettled([prom1,prom2])
p4.then((e)=>{
    console.log(e);
}).catch((err)=>{
    console.log(err)
})