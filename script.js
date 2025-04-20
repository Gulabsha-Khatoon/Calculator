let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === "") return;
    let result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
