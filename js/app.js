// const form = document.querySelector('form')
// const message = document.querySelector('.message')
// const firstName = document.getElementById('first-name')
// const lastName = document.getElementById('last-name')
// const emailAddress = document.getElementById('email-address')
// const password = document.getElementById('p-password')

// A function to validate an email using a regular expression
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // A function to check if an input field is empty and display a message
  function checkEmpty(input, message) {
    if (input.value.trim() === "") {
      input.classList.add("error");
      message.textContent = `${input.placeholder} cannot be empty`;
      return false;
    } else {
      input.classList.remove("error");
      message.textContent = "";
      return true;
    }
  }
  
  // A function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault(); // prevent the default action of the form
    // get the input fields and their corresponding messages
    const firstName = document.getElementById("first-name");
    const firstNameMessage = firstName.nextElementSibling;
    const lastName = document.getElementById("last-name");
    const lastNameMessage = lastName.nextElementSibling;
    const email = document.getElementById("email-address");
    const emailMessage = email.nextElementSibling;
    const password = document.getElementById("p-password");
    const passwordMessage = password.nextElementSibling;
    // check if the input fields are empty
    const firstNameValid = checkEmpty(firstName, firstNameMessage);
    const lastNameValid = checkEmpty(lastName, lastNameMessage);
    const emailValid = checkEmpty(email, emailMessage);
    const passwordValid = checkEmpty(password, passwordMessage);
    // check if the email is valid
    if (emailValid && !validateEmail(email.value)) {
      email.classList.add("error");
      emailMessage.textContent = "Looks like this is not an email";
    } else {
      email.classList.remove("error");
      emailMessage.textContent = "";
    }
    // if all the input fields are valid, submit the form
    if (firstNameValid && lastNameValid && emailValid && passwordValid && validateEmail(email.value)) {
      form.submit();
    }
  }
  
  // add an event listener to the form
  form.addEventListener("submit", handleSubmit);
  
