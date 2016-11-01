$('form').on('submit', function(){
      var minAge = parseInt($("#min_age").val());
      var age = parseInt ($("#age").val());
      if(age >= minAge) {
        $('#result').html("You can go on this ride");
      } else {
         $('#result').html("You cannot go on this ride");
      }
});
  
  