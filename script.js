//insert is a function that is add value by onclick event
//we can continuesly add values to this
function insert(number) 
 { 
     document.getElementById("output").value = document.getElementById("output").value + number; 
 } 
 
 //answer is a function that contains the final output
 //inside the answer function there is a default JS function eval()
 //it will calculate the answer from the user input
 function answer() 
 { 
     let final = eval(document.getElementById("output").value);
     document.getElementById("output").value = final;
 } 

 //reset is a function that is return an empty value
 function reset() 
 { 
     document.getElementById("output").value = ""; 
 } 

