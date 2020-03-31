import taskLayout from './taskLayot';
import tasksCounter from './tasksCounter';
import resetValues from './resetValues';
import uniqid from 'uniqid';

const addItem = (e, tasks) => {
  e.preventDefault()
  const initialState = {
    id: uniqid(),
    title: '',
    text: '',
    priority: '',
    isCompleted: false,
    dateOfCreation: new Date(),
    highlight: '#ffffff00'
  }
  let newTask = {
    ...initialState
  }
  const taskInput = document.querySelector('.task-title');
  const textInput = document.querySelector('.task-text');
  const lowPriorityInput = document.querySelector('#Low');
  const mediumPriorityInput = document.querySelector('#Medium');
  const HighPriorityInput = document.querySelector('#High');
  const colorInput = document.querySelector('#inputColor');

  newTask.title = taskInput.value;
  newTask.text = textInput.value;
  const newPriority = lowPriorityInput.checked ? lowPriorityInput.value :
                    mediumPriorityInput.checked ? mediumPriorityInput.value :
                    HighPriorityInput.checked ? HighPriorityInput.value :
                    ''
  newTask.priority = newPriority;
  newTask.highlight = colorInput.value;
  const { title, text, priority } = newTask;
  if (title.length && text.length && priority.length) {
    taskLayout(newTask);
    let newTasksArray = [...tasks, newTask];
    tasksCounter(newTasksArray);
    resetValues();
    if (sessionStorage.isEditMode === 'true') {
      const itemId = sessionStorage.editItem;
      const tasksIdx = tasks.findIndex(({id}) => id === itemId);
      tasks.splice(tasksIdx, 1)
      newTasksArray = [
        ...tasks.slice(0, tasksIdx),
        newTask,
        ...tasks.slice(tasksIdx)
      ];
      sessionStorage.isEditMode = false
      document.getElementById(itemId).remove();
      tasksCounter(newTasksArray);
      $('#exampleModal').modal('hide');
      return newTasksArray;
    }
    $('#exampleModal').modal('hide');
    return newTasksArray;
  }
}

export default addItem;