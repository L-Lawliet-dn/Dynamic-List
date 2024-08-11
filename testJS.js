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