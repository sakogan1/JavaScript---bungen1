
function checkAirQuality() {
     
    let quality = document.getElementById("myRange").value
    console.log(quality)
    if(quality<=50){
    document.getElementById("h1").innerHTML="Level of health concern: Good" 
    document.getElementById("h2").innerHTML="Level of health effect: Little or no risk"
    document.getElementById("body").style.backgroundColor="green"
    } else if(quality>=50 && quality<=100) {
    document.getElementById("h1").innerHTML="Level of health concern: Moderate" 
    document.getElementById("h2").innerHTML="Level of health effect: Acceptable quality"
    document.getElementById("body").style.backgroundColor="yellow"    
    }else{
        document.getElementById("h1").innerHTML="Level of health concern: Unhealthy for sensitive groups" 
    document.getElementById("h2").innerHTML="Level of health effect: Generable publics not likely affected  "
    document.getElementById("body").style.backgroundColor="orange"    
    }
}