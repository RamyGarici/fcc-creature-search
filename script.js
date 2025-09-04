const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchBtn.addEventListener("click",async ()=>{
    const value = searchInput.value.trim().toLowerCase();
    if(!value) return;
    try{

    
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${value}`);
    if (!res.ok) {
     alert("Creature not found")
    }
    const data = await res.json()

    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = data.id;
    weight.textContent = data.weight;
    height.textContent = data.height;
    types.innerHTML = ""
    data.types.forEach(element => { 
         const span = document.createElement("span");
         span.textContent = element.name;
         types.appendChild(span)
        
    });
   hp.textContent = data.stats[0].base_stat;
   attack.textContent = data.stats[1].base_stat;
   defense.textContent = data.stats[2].base_stat;
   specialAttack.textContent = data.stats[3].base_stat;
   specialDefense.textContent = data.stats[4].base_stat;
   speed.textContent = data.stats[5].base_stat;
    












}
catch (err) {
   console.error(err)}})

