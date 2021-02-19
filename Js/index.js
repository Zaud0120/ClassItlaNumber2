let btnCalcular = document.getElementById('btnCalcular');
let btnClean = document.getElementById('btnClean');

//Adding event listener in the button btnCalcular
btnCalcular.addEventListener("click", calcularAge);
btnClean.addEventListener("click", cleanFields);

function calcularAge(){
    let age = document.getElementById("exampleInputPassword1").value;
    let name = document.getElementById("name").value;
    //Conditionals
    if (age == "" || name == "") {
        alert("Please, complete the fiels empty");
    }if (age >= 17){
        alert("Te la comiste, "  + name +  ", eres mayor de edad!!")
    }else{
        alert("Lo sentimos, " + name + " " + "Pero no eres mayor de edad")
    }
}

function cleanFields(){
    let age = document.getElementById("exampleInputPassword1").value = "";
    let name = document.getElementById("name").value = "";
}