function Ticket(name, movie, time, age) {
  this.name = name;
  this.movie = movie;
  this.time = time;
  this.age = age;
  // this.userPrice = userPrice;
  }
Ticket.prototype.price = function() {
    if (this.age === "senior" || this.time === "matinee") {
      moviePrice -= 4;
    } else if (this.age === "student" || this.time === "afternoon" || this.movie === "artHouse" || this.movie === "secondRun") {
      moviePrice -= 2;
    }

  }

Ticket.prototype.info = function() {
  return this.name + this.movie + this.time + this.age;
}

  var moviePrice = 12;
  var userName;
  var userMovie;
  var userTime;
  var userAge;

$(document).ready(function( ) {
  // $("#movieGroup").hide();
  $("form#movieGroup").submit(function(event) {
    event.preventDefault();
    $(".results").show();

    userName = $("#nameInput").val();
    userMovie = $(".new-movie").val();
    userTime = $(".new-time").val();
    userAge = $(".new-age").val();



    newTicket = new Ticket(userName, userMovie, userTime, userAge);
    newTicket.price(moviePrice)

    $("#price").text(newTicket.info() + " " + moviePrice)

    moviePrice = 12;


  });
  $("button#refresh").click(function(event) {
    event.preventDefault()
    $(".results").remove();
  });

});
