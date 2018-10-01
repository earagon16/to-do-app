function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = toDos.length || 0;

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id,
    });
    newToDoText.value = '';
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    renderTheUI();
  })
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      newLi.appendChild(checkbox);

      function deleteItem() {
        const deleteBtn = document.getElementById('button');
        deleteBtn.innerHTML = '<span>Delete</span>';
        deleteBtn.addEventListener('click',()  => {
          toDos = deleteToDo(toDo.id);
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
