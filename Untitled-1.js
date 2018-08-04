let input = 3

let input2 = Number(input)
input2 -= 1
let a = ['0', '1'] 
let lN = []
let rLN = []
let fL = [...a]
let fLL = []
fLL.push(a)
for(let i = 0; i<input2; i++){
    lN = [...fL]
    rLN = [...fL]
    rLN.reverse()
    lN = lN.map(val => {
        return '0' + val
    })
    rLN = rLN.map(val => {
        return '1' + val
    })
    fL = lN.concat(rLN)
    fLL.push(fL)
}
let fLL2 = [...fLL[input2]]
fLL2
for(let i = 0; i<fLL2.length; i++){
    if((i + input2 + 1) >= fLL2.length){
    console.log(fLL2[i])
    process.stdout.write(fLL2[i])
    }
}

fL
fLL
