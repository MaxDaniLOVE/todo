import taskLayout from './taskLayot';

const sort = (tasks, idx) => {
  const sortedTasks = [...tasks];
  const currentTasks = document.querySelector('#currentTasks');
  const completedTasks =  document.querySelector('#completedTasks');
  sortedTasks.sort((a, b) => {
    if (a.dateOfCreation > b.dateOfCreation) {
      return 1 * idx;
    }
    if (a.dateOfCreation < b.dateOfCreation) {
      return -1 * idx;
    }
    return 0;
  })
  const allCurrentTasks = currentTasks.childNodes;
  allCurrentTasks.forEach(e => {
    if (e.nodeName !== '#text') {
      e.remove();
    }
  });
  const allCompletedTasks = completedTasks.childNodes;
  allCompletedTasks.forEach(e => {
    if (e.nodeName !== '#text') {
      e.remove();
    }
  });
  sortedTasks.forEach(e => taskLayout(e));
}

export default sort;
