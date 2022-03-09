const input_text = document.querySelector("input");
const clearX = document.querySelector(".clearX");

input_text.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (e.target.value && input_text.value) {
    console.log("not empty");
    //add x
    clearX.textContent = "x";
  } else {
    console.log("empty");
    // remove x
    clearX.textContent = " ";
  }
});

clearX.addEventListener("click", function () {
  console.log(this);
  input_text.value = "";
  clearX.textContent = " ";
});
