function onReady(){
  let toDos = [];
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

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<span>Delete</span>';
        deleteBtn.addEventListener('click',()  => {
          toDos = toDos.filter(t => toDo.id != t.id);
          renderTheUI();

        })
        newLi.appendChild(deleteBtn);
        toDoList.appendChild(newLi);

    });
  }
};

window.onload = function() {
  onReady();
};
