"use strict"
var megkotes=""
function napilapok() {

    const ujasgPromise=fetch("napilapok.php")
    ujasgPromise
    .then(response => response.json())
    .then(data=>{
        let ujsagfelsorolas   = `<div class="container">`
        ujsagfelsorolas  += `<div class="row">`
       
        data.forEach(element => {
            
        
            ujsagfelsorolas+=`<div class=col-md-4 my-5>`
            ujsagfelsorolas+=`<h3>${element.cim}</h3>`
            
            ujsagfelsorolas+=`<img src="img/${element.id}.png" class="img-thumbnail">`
            if(megkotes=="elso")
           {
               ujsagfelsorolas+=`<p style="text-align:right"><b>${element.alapitva} óta</b></p>`
           }
            ujsagfelsorolas+=`</div>`
        
        
        })
        document.getElementById("adatok").innerHTML=ujsagfelsorolas

    })


}

napilapok();

const rendezGomb = document.querySelector("#nev");
rendezGomb.addEventListener("click",(evt) => {
    evt.preventDefault();
    sortname();
});

const elsoGomb=document.querySelector("#elso");
elsoGomb.addEventListener("click",(evt)=>{
evt.preventDefault();
megkotes="elso";
napilapok();
})

function sortname() {
    const ujasgPromise = fetch("napilapok.php?orderby=cim&rendezes=ASC")
    
    ujasgPromise
    .then(response => response.json())
    .then(data=>{
        let ujsagfelsorolas   = `<div class="container">`
        ujsagfelsorolas  += `<div class="row">`
       
        data.forEach(element => {
            
        
            ujsagfelsorolas+=`<div class=col-md-4>`
            ujsagfelsorolas+=`<h3>${element.cim}</h3>`
            
            ujsagfelsorolas+=`<img src="img/${element.id}.png" class="img-thumbnail">`
           
            ujsagfelsorolas+=`</div>`
        
        
        })
        document.getElementById("adatok").innerHTML=ujsagfelsorolas

    })
}
