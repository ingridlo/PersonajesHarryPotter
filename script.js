const btn = document.getElementById('boton')
let data= [];


document.addEventListener('DOMContentLoaded', async () => {    
        const res = await fetch('https://hp-api.herokuapp.com/api/characters/students');
        data = await res.json();
        // var index = data.map(function(e) { return e.name; }).indexOf("Harry Potter");
        data = data.filter(function(e) { 
            return e.image != ""
        })          
});


btn.addEventListener ("click" , () => {
    personajes(data)
})


const personajes = (data) => { 
    btn.style.display = 'none';    
    let num=numAleatorio(data) 
        tarjeta1.innerHTML=
            `<div id="tarjeta">                                                 
            <img src="${data[num].house}.png" class="escudo"></img>
            <img src="${data[num].image}" class="imagen"></img>
            <h2>${data[num].name}</h2>
            <p>${data[num].house}</p>
            <button id ="pers">Nuevo Personaje</button>
            </div>                           
        `;   
    pers.addEventListener  ("click" , () => {
          personajes(data)
       })
    };

const numAleatorio= (data)=>{
    let numAleatorio = Math.floor(Math.random() * (data.length))
    return (numAleatorio)
}
