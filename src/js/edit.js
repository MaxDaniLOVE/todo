const edit = (item) => {
  const { title, text, priority, highlight } = item;

  const taskInput = document.querySelector('.task-title');
  const textInput = document.querySelector('.task-text');
  const lowPriorityInput = document.querySelector('#Low');
  const mediumPriorityInput = document.querySelector('#Medium');
  const HighPriorityInput = document.querySelector('#High');
  const colorInput = document.querySelector('#inputColor');

  taskInput.value = title;
  textInput.value = text;
  switch (priority) {
    case 'Low':
      lowPriorityInput.checked = true; 
      break;
    case 'Medium':
      mediumPriorityInput.checked = true;
      break;
    case 'High':
      HighPriorityInput.checked = true;
      break;
    default:
      break;
  }
  colorInput.value = highlight === '#ffffff00' ? '#ffffff' : highlight;
}

export default edit;
