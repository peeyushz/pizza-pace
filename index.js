let currentDrag = null;
const base1 = document.getElementsByClassName("base1")[0];
const base2 = document.getElementsByClassName("base2")[0];
const pizzaArea = document.getElementsByClassName("pizza-show")[0];
const baseSelect = document.getElementById("base-select");
const selectTopping = document.getElementsByClassName("select-topping")[0];
const selectBase = document.getElementsByClassName("select-base")[0];

base1.addEventListener("dragstart", ()=>{
    currentDrag = "base1";
});
base1.addEventListener("dragend", ()=>{
    currentDrag = null;

});

base2.addEventListener("dragstart", ()=>{
    currentDrag = "base2";
});
base2.addEventListener("dragend", ()=>{
    currentDrag = null;
});

pizzaArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
pizzaArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    if(currentDrag==="base1")
        baseSelect.src = "./img/select-base1.png";
    else if(currentDrag==="base2")
        baseSelect.src = "./img/select-base2.png";
})