"use strict"
function napilapok() {

    const ujasgPromise=fetch("napilapok.php")
    ujasgPromise
    .then(response => response.json())
    .then(data=>{
        let tabi=`<table class="table">` 
        tabi+=`<thead><tr>
        <th>Cim</td>
        <th>Alapitva</th>
        <th>Kiadó</th>
        <th>Példány</th>
        <th>Tematika</th>
        </tr></thead><tbody>`      
        data.forEach(element => {
            tabi+=`<tr>
            
            <td>${element.cim}</td>
            <td>${element.alapitva}</td>
            <td>${element.kiado}</td>
            <td>Kb:${element.peldany} példány</td>
            <td>${element.tematika}</td>
            </tr>`
        
           
        
        
        })
         tabi+=`</table>`
        document.getElementById("adatok").innerHTML=tabi

    })
}
napilapok();

    const nev="^[a-zA-Z]*[(][0-9]{4}[)]$";
    const evszam="^[2][0-9]{3}|^[1][9][0-9]{2}$"; 

function ellenor(nevek,evszamok) 
{
 this.nev=nevek;
 this.evszam=evszamok;  
}

function validation(field,regex) {
    var reg=new RegExp(regex,"gi")
    var value=field.value
    var cont=value.match(reg)
    if (cont !=null) {
        field.classList.remove('invalid')
        field.classList.add('valid')
        console.log("s");
    }
}

const ell=new ellenor(nev,evszam);
const neve=document.getElementById('cim');
neve.addEventListener('keyup',function(){validation(neve,ell.nev)},false);

const szam=document.getElementById('alapitva');
szam.addEventListener('keyup',function(){validation(szam,ell.evszam)},false);