const resetValues = () => {
  const taskInput = document.querySelector('.task-title');
  const textInput = document.querySelector('.task-text');
  const lowPriorityInput = document.querySelector('#Low');
  const mediumPriorityInput = document.querySelector('#Medium');
  const HighPriorityInput = document.querySelector('#High');
  const colorInput = document.querySelector('#inputColor');
  taskInput.value = '';
  textInput.value = '';
  lowPriorityInput.checked  = false;
  mediumPriorityInput.checked  = false;
  HighPriorityInput.checked  = false;
  colorInput.value = '#ffffff'
}

export default resetValues;
