function addPatient(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let disease = document.getElementById("disease").value;

let patient = {
name:name,
age:age,
disease:disease
};

let patients = JSON.parse(localStorage.getItem("patients")) || [];

patients.push(patient);

localStorage.setItem("patients", JSON.stringify(patients));

alert("Patient Added");

}

function loadPatients(){

let patients = JSON.parse(localStorage.getItem("patients")) || [];

let table = document.getElementById("patientList");

patients.forEach(p => {

let row = `
<tr>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.disease}</td>
</tr>
`;

table.innerHTML += row;

});

}

if(document.getElementById("patientList")){
loadPatients();
}

function updateDashboard(){

let patients = JSON.parse(localStorage.getItem("patients")) || [];

let total = document.getElementById("totalPatients");

if(total){
total.innerText = patients.length;
}

}

updateDashboard();

function bookAppointment(){

let pname = document.getElementById("pname").value;
let doc = document.getElementById("docname").value;
let date = document.getElementById("date").value;

let appointment = {
patient: pname,
doctor: doc,
date: date
};

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

appointments.push(appointment);

localStorage.setItem("appointments", JSON.stringify(appointments));

displayAppointments();

}

function displayAppointments(){

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

let table = document.getElementById("appointmentList");

if(!table) return;

table.innerHTML="";

appointments.forEach(a => {

let row = `
<tr>
<td>${a.patient}</td>
<td>${a.doctor}</td>
<td>${a.date}</td>
</tr>
`;

table.innerHTML += row;

});

}

displayAppointments();

function updateDashboard(){

let patients = JSON.parse(localStorage.getItem("patients")) || [];
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

let patientCount = document.getElementById("totalPatients");
let appointmentCount = document.getElementById("totalAppointments");
let doctorCount = document.getElementById("totalDoctors");

if(patientCount){
patientCount.innerText = patients.length;
}

if(appointmentCount){
appointmentCount.innerText = appointments.length;
}

if(doctorCount){
doctorCount.innerText = doctors.length;
}

}

updateDashboard();

