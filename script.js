const textarea = document.getElementById("message");
const totalCounter = document.getElementById("totalCounter");
const remainingCounter = document.getElementById("remainingCounter");

textarea.addEventListener("input", updateCounter);

function updateCounter() {
  let textLength = textarea.value.length;
  totalCounter.textContent = textLength;
  remainingCounter.textContent = textarea.maxLength - textLength;

  remainingCounter.style.color =
    textLength > textarea.maxLength * 0.8 ? "#e63946" : "#1d3557";
}

updateCounter();
