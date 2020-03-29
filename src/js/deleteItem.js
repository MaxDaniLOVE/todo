import tasksCounter from './tasksCounter';

const deleteItem = (e, tasks) => {
  const deletedItem = e.target.closest("li");
  const deletedItemId = deletedItem.id;
  const idx = tasks.findIndex((el) => el.id === deletedItemId)
  tasks.splice(idx, 1)
  const newData = [
    ...tasks.slice(0, idx),
    ...tasks.slice(idx)
  ];
  deletedItem.remove();
  tasksCounter(newData);
  return newData;
}

export default deleteItem;
