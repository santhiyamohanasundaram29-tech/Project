var over=document.querySelector(".over")
var popup=document.querySelector(".popup")
var addpop =document.getElementById("addpop")
var cancel=document.getElementById("cancelbook")

addpop.addEventListener("click",function(){
    popup.style.display="block"
    over.style.display="block"
})
    
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    over.style.display="none"
})
var contain=document.querySelector(".contain")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var description=document.getElementById("short-message")

addbook.addEventListener("click", function (event) {
event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class", "book")
  div.innerHTML = `
    <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="cleanbook(event)" >Delete</button>`
    contain.append(div)
    popup.style.display = "none"
    over.style.display = "none"
})


function cleanbook(event){
    event.target.parentElement.remove()  
}    