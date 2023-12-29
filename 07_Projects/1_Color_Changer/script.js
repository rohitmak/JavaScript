const buttons = document.querySelectorAll('.button'); // buttons will be the NodeList of buttons which can be traversed using forEach loop.

const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});