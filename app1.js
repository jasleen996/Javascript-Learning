let searchSec = document.getElementById("search-section");
searchSec.style.display = "None";  
function search(){
    let arr = [];
    text = document.getElementById("searchText").value;
    detail = document.getElementsByClassName("detail-cont");
    if(text !== "") {
        searchSec.style.display = "block";
        for(var i=0; i<7; i++){
            arr.push(detail[i].children[1].children[0].innerHTML)
        }
        for(var i=0; i<7; i++){
            if(text.toLowerCase() === arr[i].toLowerCase()) {
                imgs = document.getElementById("search-imgs");
                imgs.innerHTML = `<img src="${detail[i].children[0].innerHTML.split(" ")[2].split("\"")[1]}" alt="">`;
                console.log(detail[i].children[0].innerHTML.split(" ")[2].split("\""))
                det = document.getElementById("search-det");
                det.innerHTML = `<div class="search-bold">${detail[i].children[1].children[0].innerHTML}</div>` + detail[i].children[1].children[1].innerHTML 
                console.log(detail[i].children[1].children[0].innerHTML)
            }
        }
    }
}