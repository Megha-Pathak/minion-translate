var btn = document.querySelector("#btn-translate");
var input = document.querySelector("#input-text");
var output = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
  console.log("there is some issue with the API", error);
  alert(
    "Minions are not available to translate your text right now. Try again later."
  );
}

function translateText() {
  var inputText = input.value;
  if (inputText == "") {
    alert("Please enter some text");
    return;
  }

  const url = `${serverURL}?text=${inputText}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      var outputText = json.contents.translated;
      output.innerText = outputText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", translateText);
