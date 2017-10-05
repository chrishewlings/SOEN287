
function setUpFormEventListener() {

  // Remove default event listener on submit (to prevent page refresh)
  // and replace it with our JS function
  sub = document.getElementById("submit");
  sub.addEventListener("click", function(event) { event.preventDefault() }, false);
  sub.addEventListener("click", parseForm, false);
}

function hideExpertSuggestions() {
  expertSuggestions = document.getElementById("expertSuggestions");
  expertSuggestions.style.visibility = "hidden";
}

function displayExpertSuggestions(outputList) {

    // Grab the div and make it visible
    expertSuggestions = document.getElementById("expertSuggestions");
    expertSuggestions.style.visibility = "visible";

    innerField = document.getElementById("expertField");

    // If innerField is already populated, clear it, so the previous
    // search results don't stick around 

    if( innerField.getElementsByTagName("ul").length != 0 ) {
      listItems = innerField.getElementsByTagName("ul");
      for( i = 0; i < listItems.length; i++ ) {
        listItems[i].remove();
      }
    }

    innerField.appendChild(outputList);
}

function parseForm() {
    var outputList = document.createElement("ul");

    var aptForm = document.forms[0];
    var aptPrice = aptForm.priceRange.value;
    var isLargerThanFiveAndAHalf = aptForm.moreThanFive.checked;
    var isLargerThanFourAndAHalf = (aptForm.fourAndAHalf.checked || aptForm.fiveAndAHalf.checked || aptForm.moreThanFive.checked );
    var priceIsLessThan1K = (aptPrice === "<$500" || aptPrice === "$500-$700" || aptPrice === "$700-$1000");
    var isDowntown = aptForm.Downtown.checked;

    // Generate bullet point(s) for the items matching our characteristics

    if( (isDowntown === true) && (isLargerThanFiveAndAHalf === true) ) {
      var listItem = document.createElement("li");
      listItem.innerHTML = "It is very difficult to find an apartment larger than 5&frac12 in downtown.";
      outputList.appendChild(listItem);
    }

    if( (isDowntown === true ) && (isLargerThanFourAndAHalf === true) && (priceIsLessThan1K === true) ) {
      var listItem = document.createElement("li");
      listItem.innerHTML = "Normally an apartment of 4 &frac12 and above costs more than 1000$ in downtown area. ";
      outputList.appendChild(listItem);
    }

    // If the proposed output list is empty, re-hide the div
    if( outputList.innerHTML === "") {
      hideExpertSuggestions();
    }

    if( outputList.innerHTML != "") {
      displayExpertSuggestions(outputList);
    }
}

window.addEventListener("load", setUpFormEventListener, false);
