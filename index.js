let currentDrag = null;
const base1 = document.getElementsByClassName("base1")[0];
const base2 = document.getElementsByClassName("base2")[0];
const topping1 = document.getElementsByClassName("topping1")[0];
const topping2 = document.getElementsByClassName("topping2")[0];
const topping3 = document.getElementsByClassName("topping3")[0];
const topping1_img = document.getElementById("topping1")
const topping2_img = document.getElementById("topping2")
const topping3_img = document.getElementById("topping3")
const pizzaArea = document.getElementsByClassName("pizza-show")[0];
const baseSelect = document.getElementById("base-select");
const selectTopping = document.getElementsByClassName("select-topping")[0];
const selectBase = document.getElementsByClassName("select-base")[0];

const showToppings = ()=>{
    selectBase.style.display = "none";
    selectTopping.style.display = "block";
}
const checkout = ()=>{
    window.location.href = "./thankyou.html";
}

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
topping1.addEventListener("dragstart", ()=>{
    currentDrag = "topping1";
});
topping1.addEventListener("dragend", ()=>{
    currentDrag = null;
});
topping2.addEventListener("dragstart", ()=>{
    currentDrag = "topping2";
});
topping2.addEventListener("dragend", ()=>{
    currentDrag = null;
});
topping3.addEventListener("dragstart", ()=>{
    currentDrag = "topping3";
});
topping3.addEventListener("dragend", ()=>{
    currentDrag = null;
});

pizzaArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
pizzaArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    console.log(currentDrag)
    if(currentDrag==="base1"){
        baseSelect.src = "./img/select-base1.png";
        showToppings();
    }
    else if(currentDrag==="base2"){
        baseSelect.src = "./img/select-base2.png";
        showToppings();
    }
    else if(currentDrag==="topping1"){
        topping1_img.style.display="block";
    }
    else if(currentDrag==="topping2"){
        topping2_img.style.display="block";
    }
    else if(currentDrag==="topping3"){
        topping3_img.style.display="block";
    }

})