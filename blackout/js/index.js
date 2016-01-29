var lights = "on";

function lightSwitch () {

  if (lights == "on"){
    $("body").addClass("dark");
    lights = "off";
  }
  else if (lights == "off"){
    $("body").removeClass("dark");
    lights = "on";
  }

}

$("#light_switch").click(lightSwitch);

console.log("check its really really working");
