      const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');
      const deleteAll = document.querySelector("#delete");

      button.addEventListener("click", () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listText.textContent = myItem;
        listItem.appendChild(listText);
        listBtn.textContent = 'Delete';
        listItem.appendChild(listBtn);
        
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });
      deleteAll.addEventListener("click",() =>{
        list.innerHTML="";
      })
//       const list = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('#btn');
// const deleteAll = document.querySelector("#delete");

// // Function to add a new list item
// function addListItem(itemText) {
//   const listItem = document.createElement('li');
//   const listText = document.createElement('span');
//   const listBtn = document.createElement('button');

//   listText.textContent = itemText;
//   listItem.appendChild(listText);
//   listBtn.textContent = 'Delete';
//   listItem.appendChild(listBtn);
  
//   list.appendChild(listItem);

//   // Add event listener for delete button
//   listBtn.addEventListener('click', () => {
//     list.removeChild(listItem);
//     saveList(); // Save the updated list to localStorage
//   });
// }

// // Function to load the list items from localStorage
// function loadList() {
//   const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
//   items.forEach(item => {
//     addListItem(item);
//   });
// }

// // Function to save the list items to localStorage
// function saveList() {
//   const items = [];
//   list.querySelectorAll('li').forEach(li => {
//     items.push(li.querySelector('span').textContent);
//   });
//   localStorage.setItem('shoppingList', JSON.stringify(items));
// }

// // Event listener for adding a new item
// button.addEventListener("click", () => {
//   const myItem = input.value.trim();
//   if (myItem) {
//     input.value = '';
//     addListItem(myItem);
//     saveList(); // Save the updated list to localStorage
//   }
//   input.focus();
// });

// // Event listener for deleting all items
// deleteAll.addEventListener("click", () => {
//   list.innerHTML = "";
//   localStorage.removeItem('shoppingList'); // Clear the list from localStorage
// });

// // Load the list from localStorage when the page loads
// loadList();
