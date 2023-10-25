let selection = document.getElementById("guitarist");
let options = selection.querySelectorAll("option");

selection.addEventListener("change", function() 
{
  var val = selection.value;

  document.getElementById(val).classList.remove("inactive");
});