let btn = document.querySelector("button");
let ul= document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dbtn = document.createElement("button");
    dbtn.innerText = "Delete";
    dbtn.classList.add("delete");
    item.appendChild(dbtn);
    ul.appendChild(item);
    inp.value="";
} );
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listELe = event.target.parentElement;
        listELe.remove();
    }
})
/*
let dbtns = document.querySelectorAll(".delete");
for(dbtn of dbtns){
    dbtn.addEventListener("click" , function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}*/