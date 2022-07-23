const text = document.querySelector(".text");
const date = document.querySelector(`[type="date"]`);
const submit = document.querySelector("button");
const ui_lists = document.querySelector(".ui-lists");

const toDoListArray = [];

const dataResult = (e) => {
  const toDoListObject = {
    text,
    date,
  };
  //get the value of the to-do input
  toDoListObject.text = text.value;
  toDoListObject.date = date.value;

  // add value to the state
  toDoListArray.push(toDoListObject);

  // render data to the UI
  render(toDoListArray);
};

const render = (data) => {
  const indexData = data.length - 1;

  const html = `
   <li> ${data[indexData].text} ${data[indexData].date} 
   <button class="delete">Delete</button> </li>
   `;

  const del = document.querySelectorAll(".delete");
  console.log(del);

  if (del.length >= 0) {
    console.log(del[0]);
  }

  ui_lists.insertAdjacentHTML("beforeend", html);
};

submit.addEventListener("click", dataResult);
