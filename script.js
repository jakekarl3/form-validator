const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isiValid = false;

function validateForm() {
  // Using constraint API
  isiValid = form.checkValidity();
  // Style main message for an error
  message.textContent = 'Please fil out all fields';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
  
}

function processFormData(e) {
  e.preventDefault();

  // Validate Form
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);