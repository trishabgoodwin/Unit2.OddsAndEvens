// TODO: this file! :)
const state = {
    numbers: [],
  };

//When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = document.querySelector(number);
  for (let i = 0; i < numberInput.value; i++) {
    state.start.push(number);
  }

  renderNumbers();
});
