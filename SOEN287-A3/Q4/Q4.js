
xhtmlPrice = 19.99;
phpPrice = 86.00;
jqueryPrice = 55.00;

function setUpBookForm() {
    container = document.getElementById("container");
    form = document.forms[0];
    sub = document.getElementById("sub");
    sub.addEventListener("click", function(event) { event.preventDefault() }, false);
    sub.addEventListener("click", getBookFormQuantities, false);
    setUpOutput();
}

function setUpOutput() {
    outputContainer = document.createElement("p");
    outputContainer.id = "outputContainer";
}

function getBookFormQuantities() {

  //outputContainer = document.createElement("p");

  xhtmlQuantity = document.getElementById("book_1").value;
  phpQuantity = document.getElementById("book_2").value;
  jqueryQuantity = document.getElementById("book_3").value;

  // Check if any of the fields are empty.

  if( xhtmlQuantity === "" || phpQuantity === "" || jqueryQuantity === "") {
    window.alert("One or more input fields is missing!");
    return;
  }

  writeOutput(xhtmlQuantity, phpQuantity, jqueryQuantity);

}

function writeOutput(xhtmlQuantity, phpQuantity,jqueryQuantity) {

  // Check to see if an output already exists, and remove it if so.

  if(outputContainer.innerHTML != "") {
    outputContainer.innerHTML = "";
  }

  xhtmlTotalCost = Number(xhtmlQuantity * xhtmlPrice).toFixed(2);
  phpTotalCost = Number(phpQuantity * phpPrice).toFixed(2);
  jqueryTotalCost = Number(jqueryQuantity * jqueryPrice).toFixed(2);

  xhtmlOutput = "Basic XHTML (Quantity = " + xhtmlQuantity + "): " + xhtmlTotalCost;
  phpOutput = "Intro to PHP (Quantity = " + phpQuantity + "): " + phpTotalCost;
  jqueryOutput = "Advanced jQuery (Quantity = " + jqueryQuantity + "): " + jqueryTotalCost;

  totalCost = (parseFloat(xhtmlTotalCost) + parseFloat(phpTotalCost) + parseFloat(jqueryTotalCost));
  totalOutput = "Total Cost: " + Number(totalCost).toFixed(2);

  textOutput = xhtmlOutput + "<br>" + phpOutput + "<br>" + jqueryOutput + "<br><br>" + totalOutput;


  outputContainer.innerHTML = textOutput;
  container.appendChild(outputContainer);

}




window.addEventListener("load", setUpBookForm, false);
