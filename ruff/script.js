

str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let pass = ''
let length = 8

for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
   

    pass += str.charAt(char)
    console.log(char)
    console.log(pass)
   }
