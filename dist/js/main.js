// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAykvmoFnqymH7I1oRuhITIXkseojiGN2w",
  authDomain: "contactform-4ac71.firebaseapp.com",
  databaseURL: "https://contactform-4ac71.firebaseio.com",
  projectId: "contactform-4ac71",
  storageBucket: "",
  messagingSenderId: "93451189437",
  appId: "1:93451189437:web:2d0e55da976ffc99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference message collection
var messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  //Save message
  saveMessage(name, email, message);

  //Show alert
  document.querySelector(".alert").style.display = "block";

  //Hide alert after initial pop up
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //Clear form
  document.getElementById("contactForm").reset();
}

//Function to get for values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save messages to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}

//Smooth Scroll
let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
  // relitere
  item.addEventListener("click", e => {
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}
