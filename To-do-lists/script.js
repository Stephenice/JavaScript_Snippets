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
   <li class="d${indexData}"> ${data[indexData].text} ${data[indexData].date} 
   <button class="delete${indexData}">Delete</button> </li>
   `;
  ui_lists.insertAdjacentHTML("beforeend", html);

  const x = `delete${indexData}`;
  const del = document.querySelector(`.${x}`);
  console.log(del);

  del.addEventListener("click", (e) => {
    console.log(indexData);
    document.querySelector(`.d${indexData}`).style.display = "none";
    // delList.classList.remove;
    toDoListArray.splice(indexData, 1);
    console.log(toDoListArray);
  });
};

submit.addEventListener("click", dataResult);
