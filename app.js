function onReady(){
  const addToDoForm = document.getElementByD('addToDoForm');
  const newToDoText = document.getElementByID('newToDoText');
  const toDoList = document.getElementByID('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value='';

  });
}

window.onload = function() {
  onReady();
};
