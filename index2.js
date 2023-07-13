var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    var newItemName = document.getElementById('item').value;
    var newItemDesc = document.getElementById('item-desc').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    var itemDetails = document.createElement('div');

    var itemName = document.createElement('h5');
    itemName.textContent = newItemName;

    var itemDescription = document.createElement('p');
    itemDescription.textContent = newItemDesc;

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemDescription);
    li.appendChild(itemDetails);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    itemList.appendChild(li);

    document.getElementById('item').value = '';
    document.getElementById('item-desc').value = '';
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.querySelectorAll('.list-group-item');
  
    items.forEach(function (item) {
      var itemName = item.querySelector('h5').textContent.toLowerCase();
      var itemDesc = item.querySelector('p').textContent.toLowerCase();
  
      if (itemName.includes(text) || itemDesc.includes(text)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
