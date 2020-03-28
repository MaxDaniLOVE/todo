import addTask from './js/addTask';
import taskLayout from './js/taskLayot';
import deleteItem from './js/deleteItem';
import completeItem from './js/completeItem';
import loadingJSON from './js/loadingJSON';
import uniqid from 'uniqid';

const initialTask = {
  id: uniqid(),
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.',
  priority: 'High',
  isCompleted: false
}

let tasks = [
  initialTask
]

taskLayout(initialTask)

document.querySelector('#add-task').addEventListener('click', (e) => {
  e.preventDefault()
  tasks = addTask(e, tasks);
})

const currentTasksBlock = document.getElementById('currentTasks');
const completedTasksBlock = document.getElementById('completedTasks');

currentTasksBlock.addEventListener('click', (e) => {
  if (e.target.id === 'delete') {
    tasks = deleteItem(e, tasks);
  }
  if (e.target.id === 'complete') {
    tasks = completeItem(e, tasks);
  }
})

completedTasks.addEventListener('click', (e) => {
  if (e.target.id === 'delete') {
    tasks = deleteItem(e, tasks);
  }
})

document.getElementById('load-btn').addEventListener('click', (e) => {
  e.target.href = loadingJSON(tasks)
})
