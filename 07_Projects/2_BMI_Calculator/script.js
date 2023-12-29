const form = document.querySelector('form');
// This usecase ↓ will give you empty value in height & weight
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
    e.preventDefault(); // This will prevent/stop data from reaching server, i.e. it will stop the data at here itself.

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        if(BMI < 18.6) {
            results.innerHTML = `<span>${BMI}</span> <br> You are Under Weight`;
        }
        if(BMI >= 18.6 && BMI <= 24.9) {
            results.innerHTML = `<span>${BMI}</span> <br> You are under Normal Range`;
        }
        if(BMI > 24.9) {
            results.innerHTML = `<span>${BMI}</span> <br> You are Over Weight`;
        }
    }
});