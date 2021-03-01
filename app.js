
   var firebaseConfig = {
    apiKey: "AIzaSyBD5y035B_APkb6Ey4lQnW60EEkbbllvRI",
    authDomain: "ziwa-ec701.firebaseapp.com",
    databaseURL: "https://ziwa-ec701-default-rtdb.firebaseio.com",
    projectId: "ziwa-ec701",
    storageBucket: "ziwa-ec701.appspot.com",
    messagingSenderId: "869383455477",
    appId: "1:869383455477:web:6397ca550cf02caabfbbbc",
    measurementId: "G-HFL6VT9JP6"
  };
  

  firebase.initializeApp(firebaseConfig);


  let contactInfo = firebase.database().ref("inquiry");
  

  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  

  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }

