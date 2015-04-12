$(document).ready(function(){
  //Setup canvas
  var canvas= $("#canvas")[0];
  var ctx = canvas.getContext("2d");
  var w = $("#canvas").width();
  var h = $("#canvas").height();

  //create snake object
  var snake_array;

  function create_snake(){
    var length=5;
    snake_array[];
    for(var i = length-1; i>=0;i--){
      snake_array.push({x:i,y=0});
    }
  }
  create_snake();

  function paint(){
    //render canvas
    ctx.fillStyle="white";
    ctx.fillRect(0,0,w,h);
    ctx.strokeStyle="black";
    ctx.strokeRect(0,0,w,h);
  }
});
