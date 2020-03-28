import taskLayout from './taskLayot';

const completeItem = (e, tasks) => {
  const completedItem = e.target.closest("li");
  const completedItemId = completedItem.id;
  const foundedTasksIdx = tasks.findIndex(({id}) => id === completedItemId);
  const completedTask = {...tasks[foundedTasksIdx], isCompleted: true};
  completedItem.remove();
  taskLayout(completedTask);
  tasks.splice(foundedTasksIdx, 1)
  const newData = [
    ...tasks.slice(0, foundedTasksIdx),
    completedTask,
    ...tasks.slice(foundedTasksIdx)
  ];
  return newData;
};

export default completeItem;
