$(document).ready(function() {

  $('#submit-btn').click(function(){
  event.preventDefault();

    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();

// .trim reduces white space - look into this further

        if (city === "new York" || city ==="new york city" || city === "nyc"){
          $('body').attr("class","nyc");

      } else if (city === "san francisco" || city === "sf" || city ==="bay area"){
          $('body').attr('class','sf');

      } else if (city === "los angeles" || city ==="la" || city === "lax") {
          $('body').attr('class','la');

      } else if (city === "austin" || city ==="atx") {
         $('body').attr('class','austin');

      } else if (city === "sydney" || city ==="syd") {
         $('body').attr('class','sydney');

// Will, how would i make it so if another value is entered that does not match the options, it gives a pop up?

      } else if (city == "") {
          alert("Please enter another City ");
      }

// Will, i found these three examples of how to reset a form after clicked. But i cant for the life of me figure out
// Which one is best used to reset and where in the script it should sit. Can you give a pointer? Thanks

    // $('#city-type').trigger("reset");
    // $("#city-type")[0].reset();
    // $('#city-type').val('') - turns out this is the correct one. 

  });
});

console.log("check its really really working");
