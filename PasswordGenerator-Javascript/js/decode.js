var coded = document.getElementById("coded");
var passwordDecodedPlace = document.getElementById("passwordDecodedPlace");
var decode = document.getElementById("decode");

// Add event listener to decoder button
decode.addEventListener("click", decodePassword);


//This isn't functioning
function decodePassword() {

    var passwordArray = coded.value.split('');

    console.log(passwordArray);

    passwordArray.splice(0,11);

    passwordArray.splice(-11);

    

    var answerTwo = passwordArray.toString();

    var answer = answerTwo.replace(/,/g, '');

    console.log(answer);

    passwordDecodedPlace.value = answer;
  }
  