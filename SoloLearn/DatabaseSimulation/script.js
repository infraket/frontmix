function insertData(city, country) {
    let table = document.getElementById('dataTable');
    let newRow = table.insertRow();
    let cityCell = newRow.insertCell(0);
    let countryCell = newRow.insertCell(1);
    cityCell.textContent = city;
    countryCell.textContent = country;
}
function processFormData() {
    // Access the form
    let form = document.getElementById('myForm');
    //Access the elements by name and get values
    let city = form.elements.city.value;
    let country = form.elements.country.value;

    insertData(city, country);

    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
};



function changeStyle() {
    let body = document.getElementById('body');
    let background = document.getElementById('background').value;
    let color = document.getElementById('color').value;

    body.style.background = background;
    body.style.color = color;
};

function testStyle() {
    alert("Hello World");
};