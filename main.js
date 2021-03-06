// - addHobby should add the hobby and console.log the return value from the server.
// - getHobbies should console.log each hobby from the return value from the server;

// Change <yourname> to your github username, i.e egdelwonk)
var url = 'http://tiny-starburst.herokuapp.com/collections/TimGass';


function addHobby(hobby){
  $.post(url, {hobby:hobby.toString(), created: Date.now()}).done(function(data){
    console.log(data);
  });
};

function getHobbies(){
  $.getJSON(url).done(function(data){
    data.forEach(function(item){
      console.log(item);
    });
  });
};

addHobby("basketball");
getHobbies();
