
              
function validateEmail () {
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    producePrompt('Email Invalid','email-error', 'red');
    return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    producePrompt('Email Invalid', 'email-error', 'red');
    return false;
}
producePrompt('Valid', 'email-error', '#4776E6');
return true;
}
function validateSubject() {
  var subject = document.getElementById('subject').value;
  var required = 5;
  var need = required - subject.length;
  if (need > 0) {
    producePrompt(need + ' more characters required','subject-error','red');
    return false;
}
producePrompt('Valid', 'subject-error', '#4776E6');
return true;
}
function validateMessage() {
  var message = document.getElementById('message').value;
  var required = 15;
  var left = required - message.length;
  if (left > 0) {
    producePrompt(left + ' more characters required','message-error','red');
    return false;
}
producePrompt('Valid', 'message-error', '#4776E6');
return true;
}
function validateForm() {
  if ( !validateEmail() || !validateSubject() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Please fill.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
    return false;
}
else {
    window.open('mailto:example@gmail.com');
}
}
function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}
function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}
function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}

            
    