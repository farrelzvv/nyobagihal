function registerUser() {
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;
    var email = document.getElementById("reg-email").value;
  
    // Simpan data pendaftaran ke localStorage
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);
    localStorage.setItem("registeredEmail", email);
  
    alert("Registration successful");
    window.location.href = "login.html";
    // Mungkin Anda ingin melakukan pengalihan halaman atau tindakan lain setelah pendaftaran berhasil.
  }
  
  function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Ambil data pendaftaran dari localStorage
    var registeredUsername = localStorage.getItem("registeredUsername");
    var registeredPassword = localStorage.getItem("registeredPassword");
  
    if (username === registeredUsername && password === registeredPassword) {
      alert("Login successful");
      window.location.href = "index.html";
    } else if (username === "admin" && password === "12345") {
      alert("Login berhasil"); // Assuming 'Login berhasil' means 'Login successful' in Indonesian
      window.location.href = "admin.html";
    } else {
      alert("Login failed. Please check your username and password.");
    }
  }
  