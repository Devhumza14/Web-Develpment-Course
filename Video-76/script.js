// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 5000);
//     })
// }


async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await x.json()
    console.log(data)
}


async function main() {


    console.log("loading modeules");

    console.log('do somemthing else');


    console.log("load data")

    let data = await getdata()

    //    data.then((v) => {

    console.log(data)

    console.log("process data")
    //    })
}

main()





