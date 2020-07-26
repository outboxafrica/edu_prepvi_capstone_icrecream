function filtertext() {
    const input =document.querySelector(".filter");
    const inputValue = input.value;
    console.log(inputValue);
    // get all div elements in div with class foodlist
    const div = document.querySelectorAll(".foodslist div");
  for(var i = 0; i<div.length;i++){
          var p = div[i].getElementsByTagName("h3")[0];
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

function sendMessage() {
  alert("Your message has been submitted");
}
