const Storage={

load(){

return JSON.parse(localStorage.getItem("off"))||{

available:0,

transactions:[]

};

},

save(data){

localStorage.setItem("off",JSON.stringify(data));

}

};
