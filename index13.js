const signUp = e => {
    e.preventDefault();
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        number: document.getElementById('number').value
    }
    localStorage.setItem(formData.email,JSON.stringify(formData));
    displayData(formData);
}

function displayData(formData){
  var parentElement = document.getElementById('output');
  var childElement = document.createElement('li');

  childElement.textContent = formData.name+'-'+formData.email+'-'+formData.number;

  var delButton = document.createElement('input');
  delButton.type = 'button';
  delButton.value = 'Delete';

  delButton.onclick = () => {
    localStorage.removeItem(formData.email);
    parentElement.removeChild(childElement);
  }
  childElement.appendChild(delButton);
  parentElement.appendChild(childElement);
}
