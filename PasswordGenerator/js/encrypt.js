var encryption = document.getElementById("encryption");
var passwordEncrypterPlace = document.getElementById("passwordEncrypterPlace");
var encrypt = document.getElementById("encrypt");

// Add event listener to decoder button
encrypt.addEventListener("click", encryptPassword);


function encryptPassword() {

    var passwordEncrypterPlaceholder = ["1ryyNdDH5dr","2K7dma6AfLc", "30JP4GEsx8L", "4yNuof3FojI", "5Dkadu8R3UA"];

    var passwordEncrypted = passwordEncrypterPlaceholder[Math.floor(Math.random()*5)]+encryption.value+passwordEncrypterPlaceholder[Math.floor(Math.random()*5)]

    console.log(passwordEncrypted);

    passwordEncrypterPlace.value = passwordEncrypted;
  }
  