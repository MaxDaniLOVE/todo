import taskLayout from './taskLayot';
import uniqid from 'uniqid';

const addTask = (e, tasks) => {
  const modal = e.target.closest('#exampleModal')
  const initialState = {
    id: uniqid(),
    title: '',
    text: '',
    priority: '',
    isCompleted: false
  }
  let newTask = {
    ...initialState
  }
  const taskInput = document.querySelector('.task-title');
  const textInput = document.querySelector('.task-text');
  const lowPriorityInput = document.querySelector('#Low');
  const mediumPriorityInput = document.querySelector('#Medium');
  const HighPriorityInput = document.querySelector('#High');
  newTask.title = taskInput.value;
  newTask.text = textInput.value;
  newTask.priority = lowPriorityInput.value;
  newTask.priority = mediumPriorityInput.value;
  newTask.priority = HighPriorityInput.value;
  console.log(newTask)
  const { title, text, priority } = newTask;
  
  if (title.length && text.length && priority.length) {
    taskLayout(newTask);
    const newTasksArray = [...tasks, newTask];
    taskInput.value = '';
    textInput.value = '';
    lowPriorityInput.checked  = false;
    mediumPriorityInput.checked  = false;
    HighPriorityInput.checked  = false;
    newTask = {
      ...initialState
    }
    $('#exampleModal').modal('hide');
    return newTasksArray;
  }
}

export default addTask;