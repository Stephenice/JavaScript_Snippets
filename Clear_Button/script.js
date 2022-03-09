const input_text = document.querySelector("input");
const clearX = document.querySelector(".clearX");

input_text.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (e.target.value && input_text.value) return (clearX.textContent = "x");
  clear_toggle();
});

clearX.addEventListener("click", function () {
  console.log(this);
  input_text.value = "";
  clear_toggle();
});

function clear_toggle() {
  clearX.textContent = " ";
}
