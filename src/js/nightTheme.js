const nightTheme = (isNightTheme) => {
  const body = document.body;
  const navBar = document.querySelector('.navbar');
  const allListItems = document.querySelectorAll('.list-group-item');
  const allDropDownMenus = document.querySelectorAll('.dropdown-menu');
  const modal = document.querySelector('.modal-content');
  const label = document.querySelector('.custom-control-label')
  console.log(label)
  if (isNightTheme) {
    body.classList.add('bg-dark');
    body.style.color = '#fff';
    label.style.color = '#fff';
    navBar.classList.remove('bg-light');
    navBar.classList.add('bg-grey');
    allListItems.forEach(item => {
      item.classList.add('bg-grey');
    })
    allDropDownMenus.forEach(item => {
      item.classList.add('bg-grey');
    })
    modal.classList.add('bg-grey');
    modal.querySelectorAll('.form-control').forEach(input => {
      input.classList.add('bg-grey__input');
    })
    sessionStorage.setItem('isNightTheme', true);
  } else {
    body.classList.remove('bg-dark');
    body.style.color = '#000';
    label.style.color = '#000';
    navBar.classList.add('bg-light');
    navBar.classList.remove('bg-grey');
    allListItems.forEach(item => {
      item.classList.remove('bg-grey');
    })
    allDropDownMenus.forEach(item => {
      item.classList.remove('bg-grey');
    })
    modal.classList.remove('bg-grey');
    modal.querySelectorAll('.form-control').forEach(input => {
      input.classList.remove('bg-grey__input');
    })
    sessionStorage.setItem('isNightTheme', false)
  }
}

export default nightTheme;
