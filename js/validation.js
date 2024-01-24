// validation.js

// Function to validate email address
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var datepickerValue = document.getElementById('datepicker').value;
    var datepicker2Value = document.getElementById('datepicker2').value;
    var departmentSelect = document.getElementById('department-select');
    var doctorSelect = document.getElementById('doctor-select');
    var nameInput = document.getElementById('name-input');
    var phoneInput = document.getElementById('phone-input');
    var emailInput = document.getElementById('email-input');
  
    if (datepickerValue !== '' && datepicker2Value !== '' && departmentSelect.value !== 'Select Department' &&
        doctorSelect.value !== 'Doctors' && nameInput.value !== '' && phoneInput.value !== '' && isValidEmail(emailInput.value)) {
      document.getElementById('result-date').textContent = 'Date: ' + datepickerValue;
      document.getElementById('result-time').textContent = 'Time: ' + datepicker2Value;
      document.getElementById('result-department').textContent = 'Department: ' + departmentSelect.value;
      document.getElementById('result-doctor').textContent = 'Doctor: ' + doctorSelect.value;
      document.getElementById('result-name').textContent = 'Name: ' + nameInput.value;
      document.getElementById('result-phone').textContent = 'Phone: ' + phoneInput.value;
      document.getElementById('result-email').textContent = 'Email: ' + emailInput.value;
  
      // Display the result container
      document.getElementById('result-container').style.display = 'block';
    }
  });
  