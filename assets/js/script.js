/* Author: Aniket*/

var persondetails = [];
document.querySelector(".form-control input:first-of-type").addEventListener('click',fetchData);

function fetchData (e) {
  e.preventDefault();
  debugger;
  var person = {
    fName : document.querySelector("#firstName").value,
    lName : document.querySelector("#lastName").value,
    genderdata : document.querySelector(".form-group:nth-child(3) input").value,
    addressdata : document.querySelector("#address").value
  }
  
  if (person.fName.value == "" || person.lName.value == "" || person.genderdata.value == null || person.addressdata.value == "") { ErrorMsg(); } else {
    persondetails.push(person);
    // console.log(persondetails);
    alert("your Data submitted successfully");
    document.querySelector('form').reset();
    displayData();
  }
}

function ErrorMsg() { alert("fill the form first");}

function displayData () {


}

















