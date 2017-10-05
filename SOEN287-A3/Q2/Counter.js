counter = 0;
dom = null;

function getElementBtnIncrement() {

  var counterBtn = document.getElementById("counterBtn");
  dom = document.getElementById("counterOutput");
  counterBtn.addEventListener("click", increment, false);
}

function increment() {
  counter++;
  dom.innerHTML = "Count = " + counter;
}


window.addEventListener("load", getElementBtnIncrement, false);
