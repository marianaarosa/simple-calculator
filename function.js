function add() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  if (number1 == "" || number2 == "") {
    alert("Please fill in all fields");
    return;
  }

  let result = parseFloat(number1) + parseFloat(number2);

  document.getElementById("result").value = result;
}

function subtract() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  if (number1 == "" || number2 == "") {
    alert("Please fill in all fields");
    return;
  }
  let result = parseFloat(number1) - parseFloat(number2);
  document.getElementById("result").value = result;
}

function multiply() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  if (number1 == "" || number2 == "") {
    alert("Please fill in all fields");
    return;
  }
  let result = parseFloat(number1) * parseFloat(number2);
  document.getElementById("result").value = result;
}

function divide() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  if (number1 == "" || number2 == "") {
    alert("Please fill in all fields");
    return;
  }
  if (number2 == 0) {
    alert("Cannot divide by zero");
    return;
  }
  let result = parseFloat(number1) / parseFloat(number2);
  document.getElementById("result").value = result;
}

function clearFields() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("result").value = "";
  document.getElementById("number1").focus();
}


