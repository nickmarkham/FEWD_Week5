
function compareNumbers(){
  // text
  var a = $("#a").val();
  var b = $("#b").val();

  if(!a || !b){
    alert ("please input a number into both fields")
    return;
  }

  var comparison = $("#comparison");

  a = parseFloat (a);
  b = parseFloat (b);


  if ( a > b) {
    comparison.html('>');

  }else if ( a < b) {
    comparison.html('<');

  }else if ( a === b) {
    comparison.html('=');

  }else{
    comparison.html('NaN');
  }

}

$("#submit").click(compareNumbers);


console.log("check its really really working");
