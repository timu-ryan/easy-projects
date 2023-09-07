const list = document.querySelector('.list');
const listItemTemplate = document.querySelector('#list-item').content;


const tasks = [
  'wash the dishes', 
  'wash my arms',
  'do my homework',
  'clean up the table'
]

// function createListItem(task) {
//   const listItem = document.createElement('li');
//   const listItemSpan = document.createElement('span');
//   const listItemButton = document.createElement('button'); 
//   listItem.textContent = task;
//   listItemButton.textContent = 'delete'
//   list.append(listItem);
//   listItem.append(listItemSpan, listItemButton);
// }

for (let i = 0; i <= tasks.length - 1; i++) {
  const listItem = listItemTemplate.querySelector('.list-item').cloneNode(true);
  const listItemSpan = listItem.querySelector('span');
  const listItemButton = listItem.querySelector('button');
  listItemButton.addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
  })
  listItemSpan.textContent = tasks[i];
  list.append(listItem)
}


// const listItems = list.children;
// console.log(listItems)