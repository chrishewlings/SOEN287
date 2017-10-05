
var searchStr;
var ch;
var outResult;

function getAllDomElement() {
  searchStr = document.getElementById("searchString");
  ch = document.getElementById("characters");
  outResult = document.getElementById("output");
  var searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", searchOccurrences, false);
}

function searchOccurrences() {
  var count = 0;
  var chValue = ch.value;
  var searchString = searchStr.value;
  var result = null;


  // Loop through the search to find instances of chValue
  // and increment counter on hit
  for(i = 0; i < searchString.length; i++) {
    if(searchString.charAt(i).toLowerCase() === chValue) {
      count++;
    }
  }

  // Display an alert if no matches were found
  // and return out of the function
  if(count === 0) {
    outResult.innerHTML = "";
    window.alert("The character ''" + chValue + "' not found.");
    return null;
  } else {
    result = count + " occurrence(s) of " + chValue + " were found.";
  }

  // Write the number of matches to the output paragraph.
  outResult.innerHTML = result;

}


window.addEventListener("load", getAllDomElement, false);
