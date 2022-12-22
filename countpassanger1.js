
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let commonAmount = document.getElementById("common-btn")


let count = 0

function increment(){
    count +=1
    countEl.innerHTML = count

}

function save(){
 
   saveEl.textContent += count + " - "
   countEl.textContent = 0
   count = 0
}

