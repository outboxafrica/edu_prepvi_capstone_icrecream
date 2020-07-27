var filterinput = document.getElementById("searchbar");
  
filterinput.addEventListener("keyup",filterNames);

function filterNames(){
//  get value of input
    var filterValue = document.getElementById("searchbar").value.toUpperCase();
    console.log(filterValue);
// get ul ref
    var ul = document.getElementById('list');
// get li item
    var li = ul.querySelectorAll("food-item");

    for(var i=0;i<li.length;i++){
        var a = li[i].getElementsById('food-item');

        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display = '';

        }else{
            li[i].style.display = 'none';
        }
    }

}
function filtertext() {
    const input =document.querySelector(".filter");
    const inputValue = input.value;
    console.log(inputValue);
    // get all div elements in div with class foodlist
    const div = document.querySelectorAll(".foodslist div");
  for(var i = 0; i<div.length;i++){
          var p = div[i].getElementsByClassName(".shop-item-title")[0];
          console.log(p);
          var x = p.textContent;
          console.log(x);
          var p = x.indexOf(inputValue);
          console.log(p);
            if(p > -1){
                 div[i].style.display="";
            } else {
                    div[i].style.display="none";
                   }
    }
 }

function myFunction() {
    alert("Thanks for subscribing");
}
function orderFood()  {
    alert('Your order has been recorded');
}
