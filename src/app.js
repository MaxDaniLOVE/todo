import addItem from './js/addItem';
import taskLayout from './js/taskLayot';
import deleteItem from './js/deleteItem';
import completeItem from './js/completeItem';
import loadingJSON from './js/loadingJSON';
import sort from './js/sort';
import tasksCounter from './js/tasksCounter';
import edit from './js/edit';
import nightTheme from './js/nightTheme';
import uniqid from 'uniqid';
import resetValues from './js/resetValues';

sessionStorage.setItem('isNightTheme', false)

const initialTask = {
  id: uniqid(),
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.',
  priority: 'High',
  isCompleted: false,
  dateOfCreation: new Date(),
  highlight: '#ffffff00'
}

let tasks = [
  initialTask
]

taskLayout(initialTask)

document.querySelector('#add-task').addEventListener('click', (e) => {
  tasks = addItem(e, tasks);
})

const currentTasksBlock = document.getElementById('currentTasks');
const completedTasksBlock = document.getElementById('completedTasks');

const getEditItem = (e, tasks) => {
  const item = e.target.closest("li");
  const itemId = item.id;
  const tasksIdx = tasks.findIndex(({id}) => id === itemId);
  return tasks[tasksIdx];
}

currentTasksBlock.addEventListener('click', (e) => {
  if (e.target.id === 'delete') {
    tasks = deleteItem(e, tasks);
  }
  if (e.target.id === 'complete') {
    tasks = completeItem(e, tasks);
  }
  if (e.target.id === 'edit') {
    const editItem = getEditItem(e, tasks);
    sessionStorage.setItem('isEditMode', true);
    sessionStorage.setItem('editItem', editItem.id);
    edit(editItem);
  }
})

completedTasksBlock.addEventListener('click', (e) => {
  if (e.target.id === 'delete') {
    tasks = deleteItem(e, tasks);
  }
})

document.getElementById('load-btn').addEventListener('click', (e) => {
  e.target.href = loadingJSON(tasks)
})


document.getElementById('nine-to-one').addEventListener('click', () => {
  sort(tasks, -1)
})

document.getElementById('one-to-nine').addEventListener('click', () => {
  sort(tasks, 1)
})

document.getElementById('night-theme').addEventListener('change', (e) => {
  nightTheme(e.target.checked)
})

const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');
const close = document.querySelector('.close');

modal.addEventListener('click', (e) => {
  if (e.target === modal
    || e.target === closeModal
    || e.target === close
    || e.target === close.querySelector('span')
    ) {
      resetValues();
      sessionStorage.isEditMode = false;
  }
})

tasksCounter(tasks)