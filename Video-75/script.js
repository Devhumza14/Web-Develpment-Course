const callback = (arg) =>{
    console.log(arg)

}


const loadScript = (src , callback) => {
    let sc = createElement("script")
    sc.src = src
    sc.onload = callback("Humza")
    document.head.append(sc)
    
}

loadScript("", )
