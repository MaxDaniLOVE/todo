const taskLayout = (task) => {
  const { title, text, priority, isCompleted, id, dateOfCreation, highlight } = task;
  const changeableBlock = !isCompleted
    ? document.querySelector('#currentTasks')
    : document.querySelector('#completedTasks');
  const btnsVisibilityClass = isCompleted ? 'hidden' : '';
  const isNightTheme = sessionStorage.isNightTheme;
  changeableBlock.insertAdjacentHTML('beforeend', `
    <li class="list-group-item d-flex w-100 mb-2 ${isNightTheme === 'true' ? 'bg-grey' : ''}" id="${id}">
        <div class="w-100 mr-2">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" style="background-color: ${highlight === '#ffffff' ? 'ffffff00' : highlight};">${title}</h5>
                <div>
                    <small class="mr-2">${priority} priority</small>
                    <small>${dateOfCreation.toLocaleString()}</small>
                </div>
            </div>
            <p class="mb-1 w-100">${text}</p>
        </div>
        <div class="dropdown m-2 dropleft">
            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <div class="dropdown-menu p-2 flex-column ${isNightTheme === 'true' ? 'bg-grey' : ''}" aria-labelledby="dropdownMenuItem1">
                <button type="button" class="btn btn-success w-100 ${btnsVisibilityClass}" id="complete">Complete</button>
                <button type="button" class="btn btn-info w-100 my-2 ${btnsVisibilityClass}" id="edit" data-toggle="modal" data-target="#exampleModal">Edit</button>
                <button type="button" class="btn btn-danger w-100" id="delete">Delete</button>
            </div>
        </div>
    </li>
  `)
}

export default taskLayout;