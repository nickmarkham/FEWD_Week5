$(document).ready(function() {

  $('#submit-btn').click(function(){
  event.preventDefault();

    var city = $('#city-type').val();
    $('#city-input').val('');

        if (city == "New York" || city =="New York City" || city == "NYC"){
          $('body').attr('class','nyc');

      } else if (city == "San Francisco" || city == "SF" || city =="Bay Area"){
          $('body').attr('class','sf');

      } else if (city == "Los Angeles" || city =="LA" || city == "LAX") {
          $('body').attr('class','la');

      } else if (city == "Austin" || city =="ATX") {
         $('body').attr('class','austin');

      } else if (city == "Sydney" || city =="SYD") {
         $('body').attr('class','sydney');

// Will, how would i make it so if another value is entered that does not match the options, it gives a pop up?

      } else if (city == "") {
          alert("Please enter another City ");
      }

// Will, i found these three examples of how to reset a form after clicked. But i cant for the life of me figure out
// which one is best used to reset and where in the script it should sit. Can you give a pointer? Thanks

    // $('#city-type').trigger("reset");
    // $("#city-type")[0].reset();
    // $('#city-type').children('input').val('')


  });
});

console.log("check its really really working");
