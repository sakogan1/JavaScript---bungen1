
// function ausgabe() {
//     let first =document.getElementById("feld").value
//     console.log(first)
//     let second=document.getElementById("button1").value
//     if(feld.value==0){
//         console.log("Fehler")
//     } else{
//         console.log(first)
//     }
// }


function adult(){
    
    let first =document.getElementById("textarea1").value
    console.log(first)
    let second=document.getElementById("button1").value
    if(textarea1.value>=18 && textarea1.length!=0){
        console.log(true)
        document.getElementById("erg").innerHTML = "<h1>Volljährig</h1>"
    } else{
        console.log(false)
        event.preventDefault();
        document.getElementById("erg").innerHTML = "<h1>Minderjährig</h1>"
        document.getElementById("warn").innerHTML = "<h1>Du darfst noch nicht Shisha rauchen</h1>"
    }

}

function weather(){
    let input =document.getElementById("textarea2").value
    console.log(input)
    
    if(input>=8 && input<=10){
        console.log(true)
        document.getElementById("erg1").innerHTML = "<h1>Super</h1>"
    } 
    else if(input>=6 && input<=7) {
        console.log(true)
        document.getElementById("erg1").innerHTML = "<h1>gut</h1>"
    }
    
        else if(input>=3 && input<=5){
        console.log(true)
        document.getElementById("erg1").innerHTML = "<h1>okay</h1>"
    } else {
        console.log(true)
        document.getElementById("erg1").innerHTML = "<h1>schlecht</h1>"
    }
}

function differenz(num){
    if (num>27){
      return num-27  
    } else {
    return "small number"   
    }

}
console.log(differenz(35))
console.log(differenz(74))
console.log(differenz(135))
console.log(differenz(5))


function berechnen(num1,num2){
if(num1 == num2){
    return (num1+num2)*5}
    else{
        return num1+num2
    }
}
console.log(berechnen(4,4))
console.log(berechnen(5,7))