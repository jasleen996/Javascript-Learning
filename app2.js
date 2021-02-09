let colorArr = [];
let bwArr = [];

let colors = document.getElementsByClassName("selectionColor");
let bws = document.getElementsByClassName("selectionBw");
let checkColor = document.getElementsByClassName("checkcolor");
let checkbw = document.getElementsByClassName("checkbw")
let selColor = document.getElementsByClassName("selColor");
let selBw = document.getElementsByClassName("selBw");

let priceArr = [];

for(let i=0; i<7; i++) {
    colorArr.push(parseInt(colors[i].innerHTML.split("$")[1]))
}
for(let i=0; i<7; i++) {
    bwArr.push(parseInt(bws[i].innerHTML.split("$")[1]))
}

function setPrice(){
    let price = 0;
    let items = 0;
    for(let i=0 ;i<7; i++){
        if(checkColor[i].checked){
            price += colorArr[i] * selColor[i].value;
            items += parseInt(selColor[i].value);   
        }
        if(checkbw[i].checked){
            price += bwArr[i] * selBw[i].value;
            items += parseInt(selBw[i].value);
        }
    }
    localStorage.setItem("price", price);
    localStorage.setItem("items", items);
    window.location.href = "./invoice.html";
}