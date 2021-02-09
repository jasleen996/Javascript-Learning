let fields = document.getElementsByClassName("f");
fields[1].innerHTML = localStorage.getItem("price");
fields[2].innerHTML = localStorage.getItem("items");
let tot = document.getElementById("invoice-total");
tot.innerHTML = localStorage.getItem("price");
let ctot = document.getElementById("credit-total");
ctot.value = localStorage.getItem("price");

let inputs = document.getElementsByClassName("inputs");
let inputs2 = document.getElementsByClassName("inputs2");
let term = document.getElementById("terms");

let date = new Date();

function clearAll() {
    for(let i=0; i<inputs.length; i++) {
        inputs[i].value = ""; 
    }
    inputs2[0].value = "";
    inputs2[1].value = ""
}

function placeOrder(){
    console.log(inputs[0].value.length < 16)
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value === "" || inputs[i].value === "undefined") {
            alert("Please enter all * fields");
            break;
        }
        else if(!term.checked){
            alert("Please check the terms and conditions");
            break;
        } 
        else if(i === 0){
            if(inputs[i].value.charAt(0) === '5' && inputs[i].value.length < 16) {
                alert("Please enter valid card number");
                break;
            }
            else if(inputs[i].value.charAt(0) === '4' && inputs[i].value.length < 15) {
                alert("Please enter valid card number");
                break;
            }
        }
        else if(i === 1){
            if(inputs[i].value.length !== 3) {
                alert("Please enter valid cvc");
                break;
            }
        }
        else if(i === 3){
            let dat = inputs[i].value.split("/");
            if(parseInt(dat[0]) < parseInt(date.getMonth()+1) || parseInt('20' + dat[1]) < date.getFullYear()) {
                alert("Please enter valid expiration date");
                break;
            }
        }
        else{
            alert("Order Placed");
            break;
        }
    }
}