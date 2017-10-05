dom = null;

function getElementAmpersand() {
    dom = document.getElementById("textInput");

    textInput.addEventListener("blur", convertAmpersands, false);
}

function convertAmpersands() {
  var replacementText = " and ";
  var newString = "";
  var inputString = dom.value;
  var outputString = inputString.replace(/&/g, replacementText);

  textOutput = document.getElementById("textOutput");
  textOutput.value = outputString;

}


window.addEventListener("load", getElementAmpersand, false);
