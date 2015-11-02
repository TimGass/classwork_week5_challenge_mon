// - addHobby should add the hobby and console.log the return value from the server.
// - getHobbies should console.log each hobby from the return value from the server;

// Change <yourname> to your github username, i.e egdelwonk)
var url = 'http://tiny-starburst.herokuapp.com/collections/TimGass';


function addHobby(hobby){
  $.post(url, hobby.toString(), function(data){
    console.log(data);
  });
}

function getHobbies(){
  $.getJSON(url, function(data){
    data.forEach(function(item){
      console.log(item);
    });
  });
}

addHobby("basketball");
getHobbies();
