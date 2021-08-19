//Get input values
const outputScreen = document.getElementById("output-field");
const inputValues = document.getElementsByClassName("input-value");
for (const inputValue of inputValues) {
    inputValue.addEventListener("click", function () {
    const inputValueText = inputValue.innerText;
    outputScreen.innerText += inputValueText;
  });
}

//All Clear Button
document.getElementById("all-clear-btn").addEventListener("click", function () {
  outputScreen.innerText = "";
});

//Delete Button
document.getElementById("del-btn").addEventListener("click", function () {
  const outputScreenText = outputScreen.innerText;
  const updatedOutput = outputScreenText.substring(
    0,
    outputScreenText.length - 1
  );
  outputScreen.innerText = updatedOutput;
});

//Calculation & Error Throw
document.getElementById("result-btn").addEventListener("click", function () {
  try {
    const Operationoutput = eval(outputScreen.innerText);
    outputScreen.innerText = Operationoutput;
  } catch (e) {
    outputScreen.innerText = "Syntax Error";
  }
});
