const state=Storage.load();

document.getElementById("availableBalance").innerText=

"$"+state.available.toFixed(2);

if(state.available===0){

state.available=2041.02;

Storage.save(state);

document.getElementById("availableBalance").innerText=

"$"+state.available.toFixed(2);

}
