

let count = 0
let number = 13;
for(let i=1; i<=number; i++){
    if(number%i===0){
        count++
    }
}
if(count==2){
    console.log("yes")
}
else{
    console.log("No")
}
