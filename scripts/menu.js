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

function myFunction() {
    alert("Thanks for subscribing");
}
function orderFood()  {
    alert('Your order has been recorded');
}
