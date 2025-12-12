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
function insertDataReg(email, password, isSubscribed, method) {
    let table = document.getElementById('dataTableReg');
    let newRow = table.insertRow();
    let emailCell = newRow.insertCell(0);
    let passCell = newRow.insertCell(1);
    let subscribeCell = newRow.insertCell(2);
    let methodCell = newRow.insertCell(3);

    emailCell.textContent = email;
    passCell.textContent = password;
    subscribeCell.textContent = isSubscribed;
    methodCell.textContent = method;

}
function processFormDataReg() {
    let form = document.getElementById('myFormReg');
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let isSubscribed = document.getElementById('subscribe').checked;

    let method = form.elements.pay.value;


    //Insert data into table with predefined function
    insertDataReg(email, password, isSubscribed, method);

    // Clear the form fields
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementsByName('pay').value = '';


};


function changeStyle() {
    let body = document.getElementById('body');
    let background = document.getElementById('background').value;
    let color = document.getElementById('color').value;

    body.style.background = background;
    body.style.color = color;
};

