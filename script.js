//messing with for statments
let i = 2000
for (let i = 0; i<10;i++){
    console.log(i)
}

console.log(i)

//trying to solve the square problem

let c = 10
for(let i=0; i < c ; i++ ) {
    let charstring= ""
    for ( let i = 0 ; i < c; i++ ) {
        charstring += "#"
    }

console.log(charstring)
}



//going over the answers in class
//answer for part one
for (let i = 0; i < 10; i++) {
    console.log('H H H H H H H H H H')
}
//or you could do this
for(let i = 0; i< 10; i++) {
    let line = ''
    for(let i = 0; i< 10; i++){
        line += 'H'

    }
    console.log(line)
}
//part 2 
for(let i =0; i < 10; i++){
    console.log('HHHHHHHHHH')
}

let line = ''
for (let i = 0; i< 10; i++) {
    line += 'H'
}
console.log(line)

//askiart triangle part

for(let i =0; i < 8; i++) {

    console.log(i + 1)
    console.log('H')
    for(let j = 0; j < (i + 1))
}

//thinking to myself
let line = ''
//this is saying that the value of-
//line is a empty string
line += 'H'
// += is saying take the current value of-
//line and add 'H' to it, so it would-
//add add 'H' to the string each time-
//this command is run