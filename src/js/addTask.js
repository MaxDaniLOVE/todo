import taskLayout from './taskLayot';

const addTask = (tasks) => {
  const initialState = {
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
  taskInput.addEventListener('input', (e) => {
    newTask.title = e.target.value
  })
  textInput.addEventListener('input', (e) => {
    newTask.text = e.target.value
  })
  lowPriorityInput.addEventListener('change', (e) => {
    newTask.priority = e.target.value
  })
  mediumPriorityInput.addEventListener('change', (e) => {
    newTask.priority = e.target.value
  })
  HighPriorityInput.addEventListener('change', (e) => {
    newTask.priority = e.target.value
  })
  document.querySelector('#add-task').addEventListener('click', (e) => {
    const { title, text, priority } = newTask;
    e.preventDefault()
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
      return newTasksArray;
    }
  })
}

export default addTask;