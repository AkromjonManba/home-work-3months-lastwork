window.addEventListener("DOMContentLoaded", () => {
    lang: "uz-UZ"
  // elForm,elInput,elBtn,elBookList;
  let elForm = document.querySelector("#book-form");
  let elInput = document.querySelector(".js-input");
  let elBtn = document.querySelector(".js-btn");
  let elRecorder = document.querySelector('.js-recorder');
  let elBookList = document.querySelector("#book-list");
  let elRecorderSpan = document.querySelector('.recorder');
  let todos = [];
  elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let elInputVal = elInput.value;
    elBookList.innerHTML = "";

    todos.push({
      id: todos.length + 1,
      text: elInputVal,
    });

    for (item of todos) {
      let newItem = document.createElement("li");
      newItem.textContent = `Id: (${item.id}): ${item.text}`;
      elBookList.appendChild(newItem);
      newItem.setAttribute('class','items')
    }
    elBookList.setAttribute("class", "box");


});
});



