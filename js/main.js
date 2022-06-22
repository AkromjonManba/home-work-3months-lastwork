window.addEventListener("DOMContentLoaded", () => {
  // elForm,elInput,elBtn,elBookList;
  let elForm = document.querySelector("#book-form");
  let elInput = document.querySelector(".js-input");
  let elBtn = document.querySelector(".js-btn");
  let elRecorder = document.querySelector('.js-recorder');
  let elBookList = document.querySelector("#book-list");
  let elRecorderSpan = document.querySelector('.recorder');
  let todos = [];

  let recorder = new webkitSpeechRecognition();
  recorder.lang = "uz-UZ"
  elRecorder.addEventListener("click", function() {
    recorder.start();
  })

  elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let elInputVal = elInput.value;
    elInput.value = ""
    elBookList.innerHTML = "";

    recorder.onresult = function (evt) {
      console.log(evt);
    }

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



