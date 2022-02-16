let meterFeet = document.getElementById("meterFeet-el");
let litersGallons = document.getElementById("litersGallons-el");
let kgPounds = document.getElementById("kgPounds-el");
let num = document.getElementById("num");
let sum;
let lab = document.getElementById("mainLab")
lab.addEventListener("click", function(){
    meterFeet.textContent = `${num.value} meters = ${meterToFeet(3.28084)} feet | | ${num.value} feet  =  ${feetToMeter(3.2808)} meters`;
    litersGallons.textContent = `${num.value} liters  =  ${litersToGallons(3.785)} gallons | | ${num.value} gallons  =  ${gallonsToLiters(3.78541)} liters`
    kgPounds.textContent = `${num.value} kilos  =  ${kgToPounds(2.20462)} pounds | | ${num.value} pounds  = ${poundsToKg(2.205)} kilos`;
})
function meterToFeet(metersmultiply){
    sum = num.value * metersmultiply;
    return (sum.toFixed(3));

}
function litersToGallons(litersmultiply){
    sum = num.value / litersmultiply;
    return (sum.toFixed(3));
}
function kgToPounds(kgmultiply){
    sum = num.value * kgmultiply;
    return (sum.toFixed(3));
}
function feetToMeter(feetmultiply){
    sum = num.value / feetmultiply;
    return (sum.toFixed(3))
}
function gallonsToLiters(gallonsmultiply){
    sum = num.value * gallonsmultiply;
    return (sum.toFixed(3))
}
function poundsToKg(poundsmultiply){
    sum = num.value / poundsmultiply;
    return (sum.toFixed(3))
}