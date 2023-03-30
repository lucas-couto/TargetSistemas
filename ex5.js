function invertString(){
    const string = "Paralelepipedo"
    let newString = ""

    for (let i = string.length - 1; i >= 0; i--)
        newString += string[i];
    
    console.log(`String: ${string}`)
    console.log(`String invertida: ${newString}`)
}

invertString()