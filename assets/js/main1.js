
function find(){
let s = document.getElementById("search-input").value
console.log(s)
let a = document.getElementById("article").innerHTML
b=a.replaceAll(`${s}`,"<span>"+`${s}`+"</span>")
document.getElementById("article").innerHTML = b

}