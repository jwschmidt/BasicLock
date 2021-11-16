function add_inputs()
{
  var password = "1829";

  var div = document.getElementById('bodyDiv');
  div.innerHTML = "<input type=hidden id=password value='" + password + "'>";
  if (password.indexOf(' ') >= 0)
  {
  }
  else
  {
    var chars = password.split('');
    for (var i = 0; i < chars.length; i++)
    {
      div.innerHTML += "<input type=text maxlength=1 onfocus='this.value = \"\"' onkeyup='next(event, this.id)' class='inputs' id=" + i + ">";
    }
  }
}

function next(e, id)
{
  id = parseInt(id);
  //document.getElementById(id).value = e.key;
  nextId = id + 1;
  var next = document.getElementById(nextId);
  if (next)
    next.focus();
  else
  {
    //check();
    document.activeElement.blur()
  }
}

function check()
{
  password   = document.getElementById('password').value;
  var answer = '';
  var i = 0;
  for (var i = 0; i < password.length; i++)
  {
    answer += document.getElementById(i).value;
  }

  var bodyDiv = document.getElementById('bodyDiv');
  var btnDiv  = document.getElementById('btnDiv');
  if (answer == password)
  {
    bodyDiv.innerHTML = 'Open Bag 1!';
    btnDiv.innerHTML  = '';
  }
  else
  {
    bodyDiv.classList.add('error');
    setTimeout(function() { // remove the class after the animation completes
      bodyDiv.classList.remove('error');
    }, 300);
  }
}
