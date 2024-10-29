function toggle() {
    console.log('Hellooo');
    var element = document.getElementById('hideshow1');

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }

    var buttonElement = document.getElementsByClassName('toggler')[0];
    if (buttonElement.innerHTML === 'Show') {
        buttonElement.innerHTML = 'Hide';
    } else {
        buttonElement.innerHTML = 'Show';
    }
}