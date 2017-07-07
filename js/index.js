$(document).ready(function(){
  $("#M,#N,#T").change(function(){
    var ism = $("#M").val();
    var isn = $("#N").val();
    var ist = $("#T").val();
    console.log(ism);
    console.log(isn);
    console.log(ist);
    var sum = (ism/8)*(ist*60)*isn/1024/1024*0.43;
    console.log(sum);
    $("#count").html(sum.toFixed(2));
  });
  });