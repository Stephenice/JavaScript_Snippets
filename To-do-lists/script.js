const text = document.querySelector(".text");
const date = document.querySelector(`[type="date"]`);
const submit = document.querySelector("button");

const toDoListArray = [];
const toDoListObject = {
  text,
  date,
};

submit.addEventListener("click", () => {
  toDoListObject.text = "today";
  toDoListObject.date = date.value;
  console.log(toDoListObject);
  toDoListArray.push(toDoListObject);
  console.log(toDoListArray);
});
