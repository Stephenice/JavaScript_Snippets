const input_text = document.querySelector("input");
const clear = document.querySelector(".clear");

input_text.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (e.target.value && input_text.value) {
    console.log("not empty");
    console.log(input_text);
  } else {
    console.log("empty");
  }
});
