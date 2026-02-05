document.getElementById("age").addEventListener("submit",function(event)
{
event.preventDefault();
let birthdate=new Date(document.getElementById("user").value);
let today=new Date();
let age=today.getFullYear()- birthdate.getFullYear();
let monthDifference=today.getMonth()-birthdate.getMonth();
if(monthDifference < 0 ||
(monthDifference === 0  && today.getDate()< birthdate.getDate()))
{
    age--;
}
document.getElementById("result").textContent=`You are ${age} years old`;//cannot single quote '' and tab up``
});