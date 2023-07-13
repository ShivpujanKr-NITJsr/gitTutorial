function pass(){
    var nameEntered = document.getElementById('name').value;
    var emailEntered = document.getElementById('email').value;

    localStorage.setItem('nameEntered',nameEntered);
    localStorage.setItem('emaiEntered',emailEntered);

}