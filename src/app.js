import addTask from './js/addTask';

let tasks = [
  {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.',
    priority: 'high',
    isCompleted: false
  }
]

tasks = addTask(tasks);
