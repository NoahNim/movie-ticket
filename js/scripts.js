//BUSINESS LOGIC

//create object
function Ticket(name, movie, time, age) {
  this.name = name;
  this.movie = movie;
  this.time = time;
  this.age = age;
  }
//find price
Ticket.prototype.price = function() {
    if ((this.age === "Senior" && this.time === "Matinee")) {
      moviePrice -= 6;
    } else if (this.age === "Student" || this.time === "Afternoon" || this.movie === "Arthouse" || this.movie === "Second Run") {
      moviePrice -= 2;
    } else if (this.age === "Senior" || this.time === "Matinee") {
      moviePrice -= 4;
    }
  }
//concatenate info
Ticket.prototype.info = function() {
  return this.movie + ", " + this.time;
}
//define global variables
  var moviePrice = 12;
  var userName;
  var userMovie;
  var userTime;
  var userAge;



//UI LOGIC
$(document).ready(function( ) {
  // $("#movieGroup").hide();
  $("form#movieGroup").submit(function(event) {
    event.preventDefault();
    $(".results").show();
//collect user inputs
    userName = $("#nameInput").val();
    userMovie = $(".new-movie").val();
    userTime = $(".new-time").val();
    userAge = $(".new-age").val();



    newTicket = new Ticket(userName, userMovie, userTime, userAge);
    newTicket.price(moviePrice)
    $("#name").text(userName);
    $("#price").text(newTicket.info() + ", " + "$" + moviePrice);

    moviePrice = 12;


  });
//allow the user to clear result and refresh form
  $("button#refresh").click(function() {
    $(".results").hide();
    $("#movieGroup").trigger('reset');
    });

});
