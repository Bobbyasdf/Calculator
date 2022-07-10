function clearScreen() {
    document.getElementById("result").value = "";
   }

function display(value) {
    document.getElementById("result").value += value;
   }

function remove() {
    document.getElementById("result").value = document.getElementById("result").value.substring(0, document.getElementById("result").value.length - 1)
   }
  
function solve() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
   }



   
