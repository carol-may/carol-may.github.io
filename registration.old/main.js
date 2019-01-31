// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-9I7yWlo3MB-OUf__oezXmpvuQ5xy5S4",
    authDomain: "elixir-19.firebaseapp.com",
    databaseURL: "https://elixir-19.firebaseio.com",
    projectId: "elixir-19",
    storageBucket: "elixir-19.appspot.com",
    messagingSenderId: "804570312349"
  };
  firebase.initializeApp(config);

//Reference registrations collection
var registrationsRef = firebase.database().ref('registrations');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  console.log(123)

  // Get values
  var name = getInputVal('name');
  var college = getInputVal('college');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var event = getInputVal('event');
  console.log(name)
  console.log(email)
  console.log(college)
  console.log(phone)
  console.log(event)
 
  //Save reg
  saveRegistration(name, college, email, phone, event);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveRegistration(name, college, email, phone, event){
  var newRegistrationRef = registrationsRef.push();
  newRegistrationRef.set({
    name: name,
    college:college,
    email:email,
    phone:phone,
    event:event
  });
}