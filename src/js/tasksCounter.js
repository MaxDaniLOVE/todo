const tasksCounter = (tasks) => {
  const todoTitle = document.getElementById('todo-title');
  const comletedTitle = document.getElementById('comleted-title');
  if (todoTitle.children.length && comletedTitle.children.length) {
    todoTitle.children[0].remove();
    comletedTitle.children[0].remove();
  }
  const allTasksAmount = tasks.length;
  const allCompletedTasksAmount = tasks.reduce((accumulator, currentValue,) => {
    if (currentValue.isCompleted) {
      return ++accumulator;
    }
    return accumulator;
  }, 0);
  const allTodoTasksAmount = tasks.reduce((accumulator, currentValue,) => {
    if (!currentValue.isCompleted) {
      return ++accumulator;
    }
    return accumulator;
  }, 0);
  todoTitle.insertAdjacentHTML('beforeend', `<span class="tasks-amount">(${allTodoTasksAmount} / ${allTasksAmount})</span>`)
  comletedTitle.insertAdjacentHTML('beforeend', `<span class="tasks-amount">(${allCompletedTasksAmount} / ${allTasksAmount})</span>`)
}

export default tasksCounter;