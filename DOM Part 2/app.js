function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let imConfused = document.getElementByID('0');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete:false,
      id: imConfused.value,
    });
    newToDoText.value = '';
    renderTheUI();

  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  })
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      newLi.appendChild(checkbox);

      function deleteItem() {
        const deleteBtn = document.getElementById('deleteBtn');
        deleteBtn.addEventListener('delete',()  => {
          let deleteBtn = document.getElementById('li');
          deleteBtn.parentNode.removeChild(deleteBtn);
          renderTheUi();
          const result = toDos.filter(id => toDo.id)
        })
      }

    });
  }
};

window.onload = function() {
  onReady();
};
