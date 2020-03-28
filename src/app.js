import addTask from './js/addTask';
import taskLayout from './js/taskLayot';

const initialTask = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.',
  priority: 'High',
  isCompleted: false
}

let tasks = [
  initialTask
]

taskLayout(initialTask)

tasks = addTask(tasks);
