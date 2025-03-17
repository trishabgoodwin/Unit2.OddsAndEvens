// TODO: this file! :)
const state = {
    numbers: [],
  };

  const form = document.querySelector("form")
  const output = document.querySelector("#numberBank > output")
  const input = document.querySelector("input" > form)
  const numberInput = document.querySelector('input[name="number"]')

  console.log(form)
  console.log(state)
  console.log(output)
  console.log(input)

//When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
form.addEventListener("submit", addNumber)

//
function renderNumbers(numberBank, element) {
  const bank = numberBank.join(", ")
  //opposite of split, join will put the numbers into a string
  console.log(bank)
  element.innerHTML = bank
}


function addNumber(event) {
  //stopping default behavior of submit event which is to refresh page
  event.preventDefault();
  //targeting the form elements with an attribute name = "number" (line 24), then we
  //read it's value
  const number = form.elements.number.value
  console.log(number)
  //once we have the number from the input field, we add it to the numbers array in our object, state
  state.numbers.push(number)
  //object.key (object is at top of page!)

  //we call render numbers fx once we have the data to 
  renderNumbers(state.numbers, output)
}