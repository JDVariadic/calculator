window.onload = addListeners
let result = ""
let output = ""
let numbers = []
let operations = []

function addListeners() {
  document.querySelectorAll("button").forEach(function(el) {
    el.addEventListener("click", function() {checkButtonClick(el.innerHTML)})
  })
}

function checkButtonClick(innerText) {
  if (result.length <= 10) {
    if (parseInt(innerText) || parseInt(innerText) == 0) {
      result += innerText
      document.getElementById('results-pane').innerHTML = result
      isLastCharOperation = false;
    } else {
      numbers.push(parseInt(result))
      operations.push(innerText)
      output += result
      output += innerText
      document.getElementById('output-pane').innerHTML = output
      result = ""
      document.getElementById('results-pane').innerHTML = result
      isLastCharOperation = true
    }
  }
}
